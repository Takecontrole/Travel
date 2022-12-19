import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Королевский отель</h1>
        <span className="siDistance">500 метров от центра</span>
        <span className="siTaxiOp">Бесспоатное такси из аэропорта</span>
        <span className="siSubtitle">
          С кондиционероми воздуха.
        </span>
        <span className="siFeatures">Уютный и небольшой, окутанный атмосферой непринужденности, в которой каждый гость почувствует себя комфортно</span>
        <span className="siCancelOp">Бесплатная отмена бронирования</span>
        <span className="siCancelOpSubtitle">
          Оформите сейчас, а если вы передумаете то сможете отменить бронь!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Великолепно</span>
          <button>8.8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$999</span>
          <span className="siTaxOp">Включая налоги и сборы</span>
          <Link to={`/hotels/:id`}>
          <button className="siCheckButton">Посмотреть доступность</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
