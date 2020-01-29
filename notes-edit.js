titleElement = document.querySelector('input#note-title')
bodyElement = document.querySelector('textarea#note-body')

const noteId = location.hash.substring(1)
var notes = getLocalStorageNotes()

var note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('notes.html')
}
clearEmptyTitle(note.title, note.body)

//Event Listeners
titleElement.addEventListener('input', function () {
    note.title = titleElement.value
    saveNotes(notes)
})

bodyElement.addEventListener('input', function () {
    note.body = bodyElement.value
    saveNotes(notes)
})

document.querySelector('button#go-home').addEventListener('click', function () {
    location.assign('notes.html')
})

document.querySelector('button#remove-note').addEventListener('click',function () {
    removeNoteById(note.id)
    saveNotes(notes)
    location.assign('notes.html')
})