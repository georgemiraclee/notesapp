import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      characterLeft: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value,
          characterLeft: 50 - event.target.value.length,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
      characterLeft: 50,
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.characterLeft}
        </p>
        <input
          type="text"
          placeholder="Judul Catatan"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          type="text"
          placeholder="Isi catatan kamu disini"
          rows={10}
          onChange={this.onBodyChangeEventHandler}
          value={this.state.body}
        ></textarea>
        <button type="submit">Simpan
      </button>
      </form>
    );
  }
}

export default NoteInput;
