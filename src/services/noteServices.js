import axios from 'axios'

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

export function createNote(data) {
    console.log("create note call",data);
    
    return axios('/createNote', {
        method: "POST",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}


export function updateColor(url,data) {
        
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function updateTitle(url,data) {
        
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function updateDescription(url,data) {
        
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}



export function updatePin(url,data) {
    
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function setReminder(url,data){
    return axios(url,{
        method:"PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function isTrashed(url,data){
    return axios(url,{
        method:"PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function updateArchiveStatus(url,data){
    return axios(url,{
        method:"PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function deleteNoteForever(url,data) {
    return axios(url, {
        method: "POST",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function saveLabel(url,data) {
    return axios(url, {
        method: "POST",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}
export function saveCollabs(url,data) {
    return axios(url, {
        method: "POST",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}
export function getCollabDetails(url) {
    return axios(url, {
        method: "GET",
        headers: {
            "access-token": localStorage.getItem("token")
        }
    })
}

export function updateImages(url,data) {
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token"),
        },
        data:data
    })
}
/***************************************************************************** */
export function pinArray(notesData) {
    let pinArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].note.pinned) {
            pinArr.push(notesData[i]);
        }
    }
    return pinArr;
}

export function remiderArray(notesData) {
    let reminderArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].note.remindMe!=="" && !notesData[i].note.trash) {
            reminderArr.push(notesData[i]);
        }
    }
    
    return reminderArr;
}

export function trashArray(notesData) {
    let trashArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].note.trash) {
            trashArr.push(notesData[i]);            
        }
    }
    return trashArr;
}
export function archiveArray(notesData) {
    let archiveArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].note.archive) {
            archiveArr.push(notesData[i]);
        }
    }
    return archiveArr;
}

export function otherArray(notesData) {
    let otherArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (!notesData[i].note.pinned && !notesData[i].note.archive && !notesData[i].note.trash) {
            otherArr.push(notesData[i]);
        }
    }
    return otherArr;
}


























