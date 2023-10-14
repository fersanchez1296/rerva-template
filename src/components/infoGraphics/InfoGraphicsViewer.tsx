import { Pagination } from "components/pagination/Pagination";
interface Props {
  cuntriesDataCount: any;
}
//TODO
//eliminar este componente
export const InfoGraphicsViewer = ({ countriesDataCount }: Props) => {
  
  return (
    <Pagination data={countriesDataCount}/>
  );
};
