import axios from 'axios'
export function createNote(data) {
    console.log("create note:",data);
    return axios('/createNote', {
        
        method: "POST",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}
export function getNotes() {
    return axios('/getNotes', {
        method: "GET",
        headers: {
            "access-token": localStorage.getItem("token")
        }
        
    }).then(function (response) {
        const result = response.data.data;
        return result;
    })
} 