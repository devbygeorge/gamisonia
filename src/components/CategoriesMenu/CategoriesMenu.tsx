import { FaChevronLeft } from "react-icons/fa";

import s from "./CategoriesMenu.module.scss";

type Props = {
  activeCategory: string;
  categories: string[];
  changeActiveCategory: (category: string) => void;
  resetActiveCategory: () => void;
};

export default function CategoriesMenu(props: Props) {
  const {
    activeCategory,
    categories,
    changeActiveCategory,
    resetActiveCategory,
  } = props;

  return (
    <div className={s.menuWrapper}>
      <ul className={s.menu}>
        {categories.map((category: string) => (
          <li
            key={category}
            className={s.menuItem}
            data-active={activeCategory == category}
            onClick={() => changeActiveCategory(category)}
          >
            <span className={s.menuItemText}>{category}</span>
          </li>
        ))}
      </ul>
      <button className={s.closeButton} onClick={resetActiveCategory}>
        <FaChevronLeft />
      </button>
    </div>
  );
}
