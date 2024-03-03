import { useParams } from "react-router-dom";

export const DetailProductPage = () => {
  const { id } = useParams();

  return <div>DetailProductPage {id}</div>;
};
