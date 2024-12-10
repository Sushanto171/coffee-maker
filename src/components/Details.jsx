import { useEffect } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Details;
