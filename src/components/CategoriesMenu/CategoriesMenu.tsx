"use client";

import { useContext } from "react";

import { FaChevronLeft } from "react-icons/fa";

import { CategoriesContext } from "@/context/categories.context";

import s from "./CategoriesMenu.module.scss";

export default function CategoriesMenu() {
  const { state, dispatch } = useContext(CategoriesContext);

  return (
    <div className={s.menuWrapper}>
      <ul className={s.menu}>
        {state.categories.map((category: string) => (
          <li
            key={category}
            className={s.menuItem}
            data-active={state.activeCategory == category}
            onClick={() =>
              dispatch({ type: "CHANGE_CATEGORY", payload: category })
            }
          >
            <span className={s.menuItemText}>{category}</span>
          </li>
        ))}
      </ul>
      <button className={s.closeButton} onClick={() => dispatch({})}>
        <FaChevronLeft />
      </button>
    </div>
  );
}
