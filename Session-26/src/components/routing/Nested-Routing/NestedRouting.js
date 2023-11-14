import React from "react";
import "./NestedRoute.css";
import { Link, Outlet } from "react-router-dom";

function NestedRouting() {
  return (
    <div className="nestedcontainer">
      <div className="links">
        <Link
          to="electronics"
          style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
        >
          Electronics
        </Link>
        <Link
          to="jewelery"
          style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
        >
          Jewelery
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
        >
          Mens{" "}
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
        >
          Womens
        </Link>
      </div>
      <div className="comps">
        <Outlet />
      </div>
    </div>
  );
}

export default NestedRouting;
