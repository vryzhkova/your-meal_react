import { Count } from "../Count/Count.jsx";
import style from "./OrderGoods.module.css";

export const OrderGoods = ({ i, item }) => {
  return (
    <li className={style.item}>
      <img className={style.image} src="img/burger_1.jpg" alt={item} />

      <div className={style.goods}>
        <h3 className={style.title}>{item}</h3>

        <p className={style.weight}>512г</p>

        <p className={style.price}>
          1279
          <span className="currency">₽</span>
        </p>
      </div>

      <Count count={1} />
    </li>
  );
};
