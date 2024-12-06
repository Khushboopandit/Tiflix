import React, { useState } from "react";
// Material ui icons import
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircleIcon from "@mui/icons-material/Circle";

function MovieCard({ item }) {
  // collapse item details with state varibale
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const defaultImg = "https://i.ytimg.com/vi/yuIpbZZuEco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCB6wznvSwo_z1UpFMQtCcuDYLZaA"
  return (
    <div className="my-3">
      <div className="card">
        <img src={item?.Poster != "N/A"? item?.Poster: defaultImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">{item?.Title}</h5>
            <KeyboardArrowDownIcon
              onClick={() => setIsOpenDetails((value) => !value)}
              style={{ color: "#fff", fontSize: 36, cursor: "pointer" }}
            />
          </div>
          {isOpenDetails && <CardDetails item={item}/>}
        </div>
      </div>
    </div>
  );
}

// movie extra details need to be shown in cardDetails comp
function CardDetails({item}) {

  return (
    <div className="mt-2">
      <div className="d-flex justify-content-between align-items-center">
        <div>{item?.Year || new Date()?.getFullYear()}</div> <CircleIcon style={{ fontSize: 6 }} />
        <div>{item?.Type || "Movie"}</div>
        <CircleIcon style={{ fontSize: 6 }} /> <div>start world</div>
      </div>
      <div className="text-7289ad mt-2">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </div>
    </div>
  );
}

export default MovieCard;
