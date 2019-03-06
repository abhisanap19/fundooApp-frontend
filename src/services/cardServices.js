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