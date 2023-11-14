import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsComp() {
  let { id } = useParams(); // {id:10}
  let [state, setState] = useState({
    image: "",
    title: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    var res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setState(res.data);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={state.image} width={500} height={300} />
      <h5>{state.title}</h5>
    </div>
  );
}

export default ProductDetailsComp;
