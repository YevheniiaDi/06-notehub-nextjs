"use client";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={css.searchBox}>
      <input
        className={css.input}
        type="text"
        placeholder="Search notes..."
      />
      <button className={css.searchBtn}>Search</button>
    </div>
  );
}
