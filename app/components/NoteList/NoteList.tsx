"use client";

import css from "./NoteList.module.css";
import Link from "next/link";
import { Note } from "@/types/note";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <ul className={css.list}>
      {notes.map(note => (
        <li key={note.id} className={css.item}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p className={css.date}>{note.date}</p>
          <Link href={`/notes/${note.id}`}>View details</Link>
          <button className={css.deleteBtn}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
