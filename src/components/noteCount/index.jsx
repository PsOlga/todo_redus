import styles from "./styles.module.css";
 import { connect } from "react-redux";


function NoteCount ({noteCount}) {
    return (
        <div className={styles.note_count_cont}>
            <p className={styles.note_count_p}>Anzahl der Noten: </p>
            <h4 > {noteCount} </h4>
        </div>
    )
}

const mapStateToProps = (state) => ({
    noteCount: state.noteCount,
});
export default connect (mapStateToProps) (NoteCount);


