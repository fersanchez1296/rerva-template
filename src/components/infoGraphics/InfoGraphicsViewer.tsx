import { Pagination } from "components/pagination/Pagination";
interface Props {
  cuntriesDataCount: any;
  url : string
}
//TODO
//eliminar este componente
export const InfoGraphicsViewer = ({url, countriesDataCount }: Props) => {
  
  return (
    <Pagination url={url} data={countriesDataCount}/>
  );
};
