import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function addNote(data) {
    axios.post('/addNote',data)
        .then(function (response) {
            console.log(response);
            toast("note saved Successfully!!");
        })
        .catch(function (err) {
            console.log(err);
        });
}
export { addNote}