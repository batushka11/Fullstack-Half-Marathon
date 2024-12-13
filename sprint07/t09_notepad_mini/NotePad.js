class NotePad {
    constructor() {
        this.notes = [];
    }

    async addNote(note) {
        const response = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
        const newNote = await response.json();
        this.notes.push(newNote);
    }

    async getNotes() {
        const response = await fetch('/api/notes');
        this.notes = await response.json();
        return this.notes;
    }

    async getNoteByDate(date) {
        const response = await fetch(`/api/notes/${date}`);
        return await response.json();
    }

    async deleteNoteByDate(date) {
        await fetch(`/api/notes/${date}`, {
            method: 'DELETE',
        });
        this.notes = this.notes.filter(note => note.date !== date);
    }
}