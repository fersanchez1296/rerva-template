import { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator } from "d3";
import useResizeObserver from "../useResizeObserver/useResizeObserver";

interface Props {
  data: any;
  handleChange: any;
  countriesData: any;
  url : string;
}

export const WorldMap = ({ data, countriesData,url }: Props) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useResizeObserver(wrapperRef);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "",
  });


  useEffect(() => {
    const { width, height } = dimensions ?? {
      width: wrapperRef.current?.getBoundingClientRect().width || 0,
      height: wrapperRef.current?.getBoundingClientRect().height || 0,
    };

    const svg = select<SVGSVGElement, unknown>(svgRef.current!);
    svg.attr("viewBox", [0, 0, width, height]);

    // projects geo-coordinates on a 2D plane
    const projection = geoMercator()
      .fitSize([width, height], data)
      .precision(100);

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    const g = svg.select(".zoomable-group");

// render each country
const countries = g
  .selectAll(".country")
  .data(data.features)
  .join("path")
  .on("click", (event, feature: any) => {
    const { name_es } = feature.properties;
    const country = countriesData?.find(
      (country: any) => country.name_es === name_es
    );

    if (country) {
      const newTab = window.open(`/map/${url}/${name_es}`, '_blank');
      newTab.focus();
    }
  })
  .on("mousemove", (event, name: any) => {
    const [x, y] = [event.clientX, event.clientY];
    setTooltip({ visible: true, x, y, content: name.properties.name_es });
  })
  .on("mouseout", () => {
    setTooltip({ visible: false, x: 0, y: 0, content: "" });
  });

countries
  .attr("class", "country")
  .attr("fill", (d: any) => {
    const country = countriesData?.find(
      (country: any) => country.name_es === d.properties.name_es
    );
    return country ? "#da256aeb" : "#bdbdbdbb";
  })
  .attr("stroke-width", 0.5)
  .attr("d", (feature: any) => pathGenerator(feature));
  }, []);

  return (
    <>
      <div ref={wrapperRef} className="wrapper-map">
        <svg ref={svgRef} className="map">
          <g className="zoomable-group"></g>
        </svg>
      </div>
      <div
        className="tool-tip"
        style={{
          visibility: tooltip.visible ? "visible" : "hidden",
          left: `${tooltip.x}px`,
          top: `${tooltip.y}px`,
        }}
      >
        {tooltip.content}
      </div>
    </>
  );
};
