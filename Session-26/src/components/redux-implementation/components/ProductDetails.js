import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductDetails() {
  var productsData = useSelector((store) => {
    return store.productsReducer.products;
  });
  return (
    <div className="container">
      <div className="row">
        {productsData.length > 0 ? (
          productsData.map((product) => {
            return (
              <div className="col-3 mt-4">
                <div className="card">
                  <div className="card-header">
                    <img src={product.image} width={"100%"} height={200} />
                  </div>
                  <div className="card-body">
                    <p>{product.title}</p>
                    <p className="fw-bold">$ {product.price}</p>
                    <Link to={`/productdetails/${product.id}`}>
                      <button className="btn btn-outline-primary">
                        Product Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="mt-5 text-center text-danger">No Products Data</h2>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
