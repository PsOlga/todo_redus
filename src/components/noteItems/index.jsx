import styles from "./styles.module.css";
import { connect } from "react-redux";
import { deleteNote } from "../../redux/actions/actionsNote";

function NoteItem({ id, title, content, deleteNoteFromList }) {
    return (
      <div className={styles.note_item_div} >
       <div className={styles.note_item_container}>
      <div  className={styles.note_content}>
      <h3 className={styles.note_h3}>{title}</h3>
      <p className={styles.note_p}>{content}</p>
      </div>
        <button 
        className={styles.note_btn} >Edit
        </button>
        <button onClick={ () => deleteNoteFromList(id)} 
         className={styles.note_btn} >
          Delete
        </button>
       </div>
      </div>
    );
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      deleteNoteFromList: (id) => dispatch(deleteNote(id)),
    };
  };

  export default connect(null, mapDispatchToProps) (NoteItem);