import { useDispatch, useSelector } from "react-redux";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct.jsx";
import { Container } from "../Container/Container.jsx";
import { Order } from "../Order/Order.jsx";
import style from "./Catalog.module.css";
import { useEffect } from "react";
import { productRequestAsync } from "../../store/product/productSlice.js";

export const Catalog = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
          <div className={style.wrap_list}>
            {products.length ? (
              <ul className={style.list}>
                {products.map((item) => (
                  <li key={item.id} className={style.item}>
                    <CatalogProduct item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className={style.empty}>
                К сожалению, товаров данной категории нет
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
