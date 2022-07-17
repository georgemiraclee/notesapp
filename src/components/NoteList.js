import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onArchive, onDelete }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              text="Arsipkan"
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}

export default NoteList;
