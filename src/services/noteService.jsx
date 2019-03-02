import axios from 'axios'
export function createNote(data) {
    console.log("create note:",data);
    return axios('/createNote', {
        method: "POST",
        "userID":localStorage.getItem("Email"),
        data:data
    })
}
export function getNotes() {
    return axios('/getNotes', {
        method: "GET",
       "userID" :localStorage.getItem("Email"),
    }).then(function (response) {
        const result = response.data.data;
        return result;
    })
} 

export function deleteNoteForever(url,data) {
    return axios(url, {
        method: "POST",
     
        data:data
    })
}