import "./featuredProperties.css";
import { Link } from "react-router-dom";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
      <Link to={`/hotels/:id`}>
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="fpImg"
        />
        </Link>
        <span className="fpName">Отель Конкистадор</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Цены от $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Отлично</span>
        </div>
      </div>
      <div className="fpItem">
      <Link to={`/hotels/:id`}>
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          alt=""
          className="fpImg"
        />
        </Link>
        <span className="fpName">King Hotel</span>
        <span className="fpCity">New-York</span>
        <span className="fpPrice">Цены от $1400</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Исключительный</span>
        </div>
      </div>
      <div className="fpItem">
      <Link to={`/hotels/:id`}>
        <img
          src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt=""
          className="fpImg"
        />
        </Link>
        <span className="fpName">Инки</span>
        <span className="fpCity">Мехика</span>
        <span className="fpPrice">Цены от $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Великолепно</span>
        </div>
      </div>
      <div className="fpItem">
      <Link to={`/hotels/:id`}>
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt=""
          className="fpImg"
        />
        </Link>
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">От $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Зер гуд</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
