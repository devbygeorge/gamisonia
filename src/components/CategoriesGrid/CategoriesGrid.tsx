import Image from "next/image";

import s from "./CategoriesGrid.module.scss";

type Props = {
  categories: string[];
  changeActiveCategory: (category: string) => void;
};

export default function CategoriesGrid(props: Props) {
  const { categories, changeActiveCategory } = props;

  return (
    <div className={s.categoriesGrid}>
      {categories.map((category: string) => (
        <div
          key={category}
          className={s.categoriesGridItem}
          onClick={() => changeActiveCategory(category)}
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
