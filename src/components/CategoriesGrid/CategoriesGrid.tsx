import { useContext } from "react";

import Image from "next/image";

import { CategoriesContext } from "@/context/categories.context";

import s from "./CategoriesGrid.module.scss";

export default function CategoriesGrid() {
  const { state, dispatch } = useContext(CategoriesContext);

  return (
    <div className={s.categoriesGrid}>
      {state.categories.map((category: string) => (
        <div
          key={category}
          className={s.categoriesGridItem}
          onClick={() =>
            dispatch({ type: "CHANGE_CATEGORY", payload: category })
          }
        >
          <Image
            className={s.categoriesGridImage}
            src={`/${category}.jpg`}
            alt={`${category} image`}
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className={s.categoriesGridLabel}>{category}</span>
        </div>
      ))}
    </div>
  );
}
