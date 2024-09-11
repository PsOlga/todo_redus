import noteReduser from "./redusers/redusersNote";
import { createStore } from "redux";

const store = createStore(noteReduser);
export default store;