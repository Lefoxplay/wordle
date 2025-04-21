const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let NotesDiv = $('#listNotes');

function infoNote() {
    let newTitle = $('#newTitle').value;
    let newDesc = $('#newDesc').value;
    let jinfo = {
        title: newTitle, 
        desc: newDesc
    }
    return jinfo;
}

function addNote() {
    let nDivs = 1;
    while (document.getElementById(`Note ${nDivs}`)) {
        nDivs++;
    }
    let newNote = document.createElement('div');
    newNote.id = `Note ${nDivs}`;
    let title = addTitle();
    let desc = addDesc();
    newNote.appendChild(title);
    newNote.appendChild(desc);
    return newNote;
}

function addTitle() {
    let nDivs = 1;
    while (document.getElementById(`NoteTitle ${nDivs}`)) {
        nDivs++;
    }
    let newNote = document.createElement('div');
    newNote.id = `NoteTitle ${nDivs}`;
    let jinfo = infoNote();
    newNote.innerText = jinfo.title;
    return newNote;
}

function addDesc() {
    let nDivs = 1;
    while (document.getElementById(`NoteDesc ${nDivs}`)) {
        nDivs++;
    }
    let newNote = document.createElement('div');
    newNote.id = `NoteDesc ${nDivs}`;
    let jinfo = infoNote();
    newNote.innerText = jinfo.desc;
    return newNote;
}

function cleanNote() {
    $('#newTitle').value = "";
    $('#newDesc').value = "";
}
$('.add').addEventListener("click", function (e) {
    $('.new').style.display='grid';
})

$('.cancel').addEventListener("click", function (e) {
    $('.new').style.display='none';
    cleanNote();
})
$('.create').addEventListener("click", function (e) {
    $('.new').style.display='none';
    NotesDiv.appendChild(addNote());
    cleanNote();
})

