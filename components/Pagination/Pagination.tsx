"use client";

import css from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className={css.pagination}>
      <button className={css.prevBtn}>Previous</button>
      <span className={css.pageInfo}>Page 1 of 5</span>
      <button className={css.nextBtn}>Next</button>
    </div>
  );
}
