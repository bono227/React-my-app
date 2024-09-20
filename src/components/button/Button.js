// import React from "react";
// import "./Button.css"

// export const Button = (props) => {
//     const { size, text, children } = props;

//     if (size === "small") {
//         return (
//             <div>
//                 <button id="small">{text}</button>
//             </div>
//         )
//     }
//     if (size === "medium") {
//         return (
//             <div>
//                 <button id="medium">{text}</button>
//             </div>
//         )
//     }
//     if (size === "large") {
//         return (
//             <div>
//                 <button id="large">{text}</button>
//             </div>
//         )
//     }

//     return (
//         <div>
//             <button>{children}</button>
//         </div>
//     )
// }

import React from "react";
import "./Button.css";
 
export const Button = (props) => {
  const { size, children, ...rest } = props;
 
  const buttonSize = size ? size : "medium";
 
  return (
    <div>
      <button className="buttonClass" id={buttonSize} {...rest}>
        {children}
      </button>
    </div>
  );
};
 