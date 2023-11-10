import React from "react";
import axios from "axios";
import productsActionCreator from "../action-creator/productsAction";
import { useDispatch } from "react-redux";

function ProductCategory() {
  const dispatch = useDispatch();
  const getProducts = async (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        console.log(res.data);
        dispatch(productsActionCreator(res.data));
      })
      .catch((error) => {
        console.log(error);
        alert("Error While Fetching data");
      });
  };
  return (
    <div className="container mt-5">
      <h2 className="text-success">Products Category</h2>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa
        reprehenderit debitis quaerat, voluptates ipsam. Nostrum, deserunt!
        Debitis dignissimos et laudantium, velit accusantium maxime beatae
        laborum nemo voluptatem quas a atque alias magni deleniti ex! Eveniet
        eaque praesentium quasi sapiente minima. Mollitia consectetur esse
        nostrum, deserunt harum quod dicta reiciendis porro quos quam. Doloribus
        fugiat numquam in laboriosam quasi, saepe ipsa harum eius eos, deleniti
        incidunt. Dolorum nobis earum ipsam repellat quis tempore. Maxime,
        doloremque ex nobis qui cum exercitationem.
      </p>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => {
          getProducts("electronics");
        }}
      >
        Electronics
      </button>
      <button
        className="btn btn-outline-success mx-2"
        onClick={() => {
          getProducts("jewelery");
        }}
      >
        Jewelery
      </button>
      <button className="btn btn-outline-danger mx-2">MensClothing</button>
      <button className="btn btn-outline-info mx-2">WomensClothing</button>
    </div>
  );
}

export default ProductCategory;
