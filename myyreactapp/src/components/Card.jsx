// import React from "react";


// function Card(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.img} alt="avatar_img" />
//       <p>{props.tel}</p>
//       <p>{props.email}</p>
//     </div>
//   );
// }

// export default Card;

import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
