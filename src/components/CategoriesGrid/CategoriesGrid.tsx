"use client";

import { useContext } from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { CategoriesContext } from "@/context/categories.context";

import s from "./CategoriesGrid.module.scss";

export default function CategoriesGrid() {
  const { state, dispatch } = useContext(CategoriesContext);

  const t = useTranslations("Index");

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
          <span className={s.categoriesGridLabel}>{t(category)}</span>
        </div>
      ))}
    </div>
  );
}
