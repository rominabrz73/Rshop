import React from "react";
import { Iproduct } from "../../types/server";
import { Tooltip } from "react-tooltip";
function Productitem({ image, title, price }: Iproduct) {
  return (
    <div className="hover:shadow bg-white  m-2 h-50 border-2 ">
      <img className="object-contain  h-48 w-96" src={image} />
      <div className="flex justify-between p-2">
        <p
          className="font-bold line-clamp-1 my-anchor-element"
          data-tooltip-id={`tooltip-${title}`}
        >
          {title}
        </p>

        <Tooltip
          anchorSelect={`[data-tooltip-id="tooltip-${title}"]`}
          place="top"
        >
          {title}
        </Tooltip>
        <p className="font-bold">{price}£</p>
      </div>
    </div>
  );
}

export default Productitem;
