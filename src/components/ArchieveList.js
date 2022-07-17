import React from "react";
import NoteItem from "./NoteItem";

function ArchieveList({ notes, onArchive, onDelete }) {
  return (
    <>
      <h2>Arsip</h2>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              text="Pindahkan"
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

export default ArchieveList;
