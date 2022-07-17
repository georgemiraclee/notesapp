import React from "react";

function NoteHeader({ keyword, onSearchHandler }) {
  return (
    <div className="note-app__header">
      <h1>Daily Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={keyword}
          onChange={onSearchHandler}
        />
      </div>
    </div>
  );
}

export default NoteHeader;
