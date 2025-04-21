const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let NotesDiv = $('#listNotes');

function addElement() {
    let newNote = document.createElement('div');
    newNote.id = `Note ${+1}`;
    let jinfo = infoNote();
    newNote.innerText = jinfo.title;
    return newNote;
}

function infoNote() {
    let newTitle = $('#newTitle').value;
    let newDesc = $('#newDesc').value;
    let jinfo = {
        title: newTitle, 
        desc: newDesc
    }
    return jinfo;
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
    NotesDiv.appendChild(addElement());
    cleanNote();
})

