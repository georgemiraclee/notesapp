import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemFooter from "./NoteItemFooter";

function NoteItem({ title, body, createdAt, id, onArchive, onDelete, text }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <NoteItemFooter
        id={id}
        onArchive={onArchive}
        onDelete={onDelete}
        text={text}
      />
    </div>
  );
}

export default NoteItem;
