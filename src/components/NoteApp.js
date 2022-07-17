import React from "react";
import { getInitialData } from "../utils/index";
import NoteHeader from "../components/NoteHeader";
import NoteBody from "../components/NoteBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: getInitialData(),
      notes: [],
      archieves: [],
      keyword: "",
      notesFilter: [],
      archievesFilter: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  componentDidMount() {
    const notes = this.state.allNotes.filter((note) => note.archived === false);
    const archieves = this.state.allNotes.filter(
      (note) => note.archived === true
    );
    this.setState({ notes, archieves });
  }

  async onDeleteHandler(id) {
    const allNotes = this.state.allNotes.filter((note) => note.id !== id);
    await this.setState({ allNotes });

    const notes = this.state.allNotes.filter((note) => note.archived === false);
    const archieves = this.state.allNotes.filter(
      (note) => note.archived === true
    );
    this.setState({ notes, archieves });
  }

  onArchiveHandler(id) {
    const allNotes = this.state.allNotes.map((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    });
    const notes = this.state.allNotes.filter((note) => note.archived === false);
    const archieves = this.state.allNotes.filter(
      (note) => note.archived === true
    );
    this.setState({ notes, archieves, allNotes });
  }

  onUnarchiveHandler(id) {
    const allNotes = this.state.allNotes.map((note) => {
      if (note.id === id) {
        note.archived = false;
      }
      return note;
    });
    const notes = this.state.allNotes.filter((note) => note.archived === false);
    const archieves = this.state.allNotes.filter(
      (note) => note.archived === true
    );
    this.setState({ notes, archieves, allNotes });
  }

  onSearchHandler(event) {
    this.setState({
      keyword: event.target.value,
    });
    if (this.state.keyword !== "") {
      const notesFilter = this.state.notes.filter(
        (note) =>
          note.title.toLowerCase().search(this.state.keyword.toLowerCase()) >= 0
      );
      const archievesFilter = this.state.archieves.filter(
        (note) =>
          note.title.toLowerCase().search(this.state.keyword.toLowerCase()) >= 0
      );
      this.setState({ notesFilter, archievesFilter });
    } else {
      this.setState({ notesFilter: [], archievesFilter: [] });
    }
  }

  async onAddNoteHandler({ title, body }) {
    await this.setState((prevState) => {
      return {
        allNotes: [
          ...prevState.allNotes,
          {
            id: prevState.allNotes.length + 1,
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });

    const notes = this.state.allNotes.filter((note) => note.archived === false);
    const archieves = this.state.allNotes.filter(
      (note) => note.archived === true
    );
    this.setState({ notes, archieves });
  }

  render() {
    return (
      <>
        <NoteHeader
          keyword={this.state.keyword}
          onSearchHandler={this.onSearchHandler}
        />
        <NoteBody
          notes={
            this.state.keyword !== ""
              ? this.state.notesFilter
              : this.state.notes
          }
          archieves={
            this.state.keyword !== ""
              ? this.state.archievesFilter
              : this.state.archieves
          }
          onAddNoteHandler={this.onAddNoteHandler}
          onArchiveHandler={this.onArchiveHandler}
          onUnarchiveHandler={this.onUnarchiveHandler}
          onDeleteHandler={this.onDeleteHandler}
        />
      </>
    );
  }
}

export default NoteApp;
