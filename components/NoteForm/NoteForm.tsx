"use client";

import css from "./NoteForm.module.css";

export default function NoteForm() {
  return (
    <form className={css.form}>
      <input
        className={css.input}
        type="text"
        placeholder="Title"
        required
      />
      <textarea
        className={css.textarea}
        placeholder="Content"
        required
      />
      <button type="submit" className={css.addBtn}>
        Add Note
      </button>
    </form>
  );
}
