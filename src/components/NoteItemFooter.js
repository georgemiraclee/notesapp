import React from "react";

function NoteItemFooter({ id, onArchive, onDelete, text }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {text}
      </button>
    </div>
  );
}

export default NoteItemFooter;
