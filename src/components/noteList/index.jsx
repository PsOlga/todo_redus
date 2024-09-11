import NoteItem from "../noteItems";
import styles from "./styles.module.css"

import { connect } from "react-redux";
function NoteList({ notesList }) {
  if (notesList.length === 0) return (
  <p className={styles.note_p}>You don't have any notes</p>);
  return (

      <div className={styles.note_list_div}>
      {notesList.map((note) => {
        return <NoteItem key={note.id} {...note}/>;
      })}
    </div>
  
  );
}
const mapStateToProps = (state) => ({
  notesList: state.notesList,
});
export default connect(mapStateToProps)(NoteList);
