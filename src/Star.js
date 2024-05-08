// import React from "react";
// import { AiOutlineStar, AiFillStar } from "react-icons/ai";
// import { useState } from "react";

// //<AiOutlineStar/>
// //<AiFillStar/>

// const Stars = () => {
//   const [rating, setRating] = React.useState(0);
//   const [hoveredRating, setHoveredRating] = React.useState(0);

//   const handleClick = (value) => {
//     setRating(value);
//     onSave(value);
//   };

//   const handleMouseEnter = (value) => {
//     setHoveredRating(value);
//   };

//   const handleMouseLeave = () => {
//     setHoveredRating(0);
//   };

//   return (
//     <div style={{ fontFamily: "arial,sans-serif" }}>
//       {[1, 2, 3, 4, 5].map((value) => {
//         return (
//           <span
//             key={value}
//             style={{
//               cursor: "pointer",
//               color: value <= (hoveredRating || rating) ? "gold" : "gray",
//             }}
//             onClick={() => handleClick(value)}
//             onMouseEnter={() => handleMouseEnter(value)}
//             onMouseLeave={() => handleMouseLeave()}
//           >
//             {value <= (hoveredRating || rating) ? "\u2605" : "\u2606"}
//           </span>
//         );
//       })}
//       <p>
//         {" "}
//         you rated this product {rating} {rating === 1 ? "star" : "stars"}
//       </p>
//     </div>
//   );
// };

// export default Stars;
