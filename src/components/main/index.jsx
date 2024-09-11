import styles from "./styles.module.css"
import NoteForm from "../noteForm";
import NoteList from "../noteList";
import NoteCount from "../noteCount";

function Main () {


    return( 
    <main className={styles.main_container}>
       {/* notes countter */}
        <NoteCount />
        {/* notes countter */}      
         <NoteForm />
         <NoteList />
    </main>)
}

export default Main;