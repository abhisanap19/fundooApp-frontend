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
            // 'content-type': 'multipart/form-data'

        },
        data:data
    })
}
