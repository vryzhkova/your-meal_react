import classNames from "classnames";
import { Container } from "../Container/Container.jsx";
import style from "./Navigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  categoryRequestAsync,
  changeCategory,
} from "../../store/category/categorySlice.js";
import { useEffect } from "react";
import { API_URI } from "../../const.js";

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync("max"));
  }, []);

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category.map((item, index) => (
            <li className={style.item} key={item.title}>
              <button
                className={classNames(
                  style.button,
                  activeCategory === index ? style.button_active : ""
                )}
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: index }));
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
