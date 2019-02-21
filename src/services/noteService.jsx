import axios from 'axios'
export function createNote(data) {
    console.log("create note:",data);
    return axios('/createNote', {
        
        method: "POST",
        data:data
    })
}

export function getNotes() {
    return axios('/getNotes', {
        method: "GET",
        
    }).then(function (response) {
        const result = response.data.data;
        return result;
    })
} 