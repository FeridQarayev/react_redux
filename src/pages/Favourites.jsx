import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { resetFavous } from "../redux/favous/favous";
import "./style.css";

function Favourites() {
  const dispatch = useDispatch();
  const favousData = useSelector((state) => state.favous.value);
  return (
    <div className="favouries">
      <div className="container">
        <div className="col">
          <button
            onClick={() => {
              favousData.length ===0 ?
              toast.error("This is already empty"):
              toast.success("Favorites cleaned successfully");
              dispatch(resetFavous());
            }}
          >
            Empty
          </button>
        </div>
        <div className="col">
          <h2>
            <b>Count: </b>
            {favousData.length}
          </h2>
          <ul>
            {favousData.map((data) => {
              return (
                <li key={data.id}>
                  {data.id}, {data.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default Favourites;
