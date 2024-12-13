document.addEventListener('DOMContentLoaded', async () => {
    const notePad = new NotePad();
    const noteForm = document.getElementById('noteForm');
    const notesList = document.getElementById('notesList');
    const noteDetail = document.getElementById('noteDetail');

    noteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const importance = document.getElementById('importance').value;
        const content = document.getElementById('content').value;
        const date = new Date().toISOString();

        const note = { date, name, importance, content };
        await notePad.addNote(note);
        noteForm.reset();
        renderNotesList(notePad, notesList);
    });

    notesList.addEventListener('click', async (e) => {
        if (e.target.tagName === 'A') {
            const date = e.target.getAttribute('data-date');
            await renderNoteDetail(notePad, noteDetail, date);
        } else if (e.target.tagName === 'BUTTON') {
            const date = e.target.getAttribute('data-date');
            await notePad.deleteNoteByDate(date);
            renderNotesList(notePad, notesList);
            noteDetail.innerHTML = '';
        }
    });

    async function renderNotesList(notePad, notesList) {
        notesList.innerHTML = '';
        const notes = await notePad.getNotes();
        notes.forEach(note => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <a href="#" data-date="${note.date}">${note.date} > ${note.name}</a>
                <button data-date="${note.date}">DELETE</button>
            `;
            notesList.appendChild(listItem);
        });
    }

    async function renderNoteDetail(notePad, noteDetail, date) {
        const note = await notePad.getNoteByDate(date);
        if (note) {
            noteDetail.innerHTML = `
                <p><strong>date:</strong> ${note.date}</p>
                <p><strong>name:</strong> ${note.name}</p>
                <p><strong>importance:</strong> ${note.importance}</p>
                <p><strong>text:</strong> ${note.content}</p>
            `;
        }
    }

    await renderNotesList(notePad, notesList);
});