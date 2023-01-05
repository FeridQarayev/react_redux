import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addFavousData } from "../redux/favous/favous";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function Detail() {
  let Data = useParams();
  const data = JSON.parse(Data.Data);
  const dispatch = useDispatch();
  return (
    <div className="body">
      <div className="detail">
        <h3>
          <b>Customer ID: </b>
          {data.id}
        </h3>
        <p>
          <b>Customer Company Name: </b>
          {data.companyName}
        </p>
        <p>
          <b>Customer Contact Name: </b>
          {data.contactName}
        </p>
        <p>
          <b>Customer Contact Title: </b>
          {data.contactTitle}
        </p>
        <p>
          <b>Customer Address: </b>
          {`${data.address.country}, ${data.address.city}`}
        </p>
        <p>
          <b>Customer Phone: </b>
          {data.address.phone}
        </p>
        <p>
          <b>Customer Postal Code: </b>
          {data.address.postalCode}
        </p>
        <div>
          <button
            className="favosBtn"
            onClick={() => {
              toast.success("Customer added to favorites successfully!");
              dispatch(
                addFavousData({ id: data.id, name: data.companyName })
              );
            }}
          >
            Add to favorites
          </button>
        </div>
      </div>
      <div className="body_down">
        <button style={{ backgroundColor: "darkgreen" }}>
          <Link to={"/customers"}>Go Back</Link>
        </button>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default Detail;
