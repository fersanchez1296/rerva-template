import Grid from "@mui/material/Unstable_Grid2";
import { Pagination } from "components/pagination/Pagination";
interface Props {
  cuntriesDataCount: any;
}

export const InfoGraphicsViewer = ({ countriesDataCount }: Props) => {
  
  return (
    <Pagination data={countriesDataCount}/>
  );
};
