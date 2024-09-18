import React from "react";
import "./Images.css";

export const Image = (props) => {
    const {type} = props;
console.log(type)
    if (type === "nature") {
        return (
            <div id="nature">
            </div>
        )
    } 
    if (type === "city") {
        return (
            <div id="city">
            </div>
        )
    }
    return (
        <div></div>
    )

}