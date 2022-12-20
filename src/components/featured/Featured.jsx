import "./featured.css";
import {Link} from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
       <Link to="/hotels">
        <img
          src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          alt=""
          className="featuredImg"
        />
       </Link>
        <div className="featuredTitles">
          <h1>New-York</h1>
          <h2>163 отелей</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkcmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>471 отелей</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1589909634237-717751180967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFyZ2VudGluYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Argentina</h1>
          <h2>5 отелей</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
