import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import { useState } from "react";
import {Link} from "react-router-dom"
const Reserve = ({ setOpen }) => {
  
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        
          <div className="rItem" >
            <div className="rItemInfo">
              <div className="rTitle">abc</div>
              <div className="rDesc">abc</div>
              <div className="rMax">
                Max people: <b>99</b>
              </div>
              <div className="rPrice">9.999$</div>
            </div>
            <div className="rSelectRooms">
              
                <div className="room">
                  <label>101, 202, 301</label>
                  <input
                    type="checkbox"
                  />
                </div>
              
            </div>
          </div>
        ))}
          <Link to={`/`}>
        <button className="rButton">
          Reserve Now!
        </button>
          </Link>
      </div>
    </div>
  );
};

export default Reserve;
