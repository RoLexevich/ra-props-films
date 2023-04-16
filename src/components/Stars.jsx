import React from "react";
import { Star } from "./Star";

export const Stars = ({ count }) => {
  return (
    <ul className="card-body-stars u-clearfix">
      {count && Number.isInteger(count) && count < 6
        ? Array.from({ length: count }).map((star, index) => <Star key={index} />)
        : null}
    </ul>
  );
};
