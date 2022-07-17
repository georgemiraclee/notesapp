import React from "react";
import NoteList from "./NoteList";
import ArchieveList from "./ArchieveList";
import NoteInput from "./NoteInput";

function NoteBody({
  notes,
  archieves,
  onAddNoteHandler,
  onArchiveHandler,
  onUnarchiveHandler,
  onDeleteHandler,
}) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={onAddNoteHandler} />
      <NoteList
        notes={notes}
        onArchive={onArchiveHandler}
        onDelete={onDeleteHandler}
      />
      <ArchieveList
        notes={archieves}
        onArchive={onUnarchiveHandler}
        onDelete={onDeleteHandler}
      />
    </div>
  );
}

export default NoteBody;
