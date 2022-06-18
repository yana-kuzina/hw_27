import { useParams } from "react-router-dom";

const Hotel = () => {
  const params = useParams();
  console.log(params);

  return <h2>Hotels list: {params.hotelId}</h2>;
};

export default Hotel;
