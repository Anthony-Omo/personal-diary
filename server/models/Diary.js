const db = require('../database/connect');

class Diary {
    constructor({id, title, content, entry_date, category}) {
        this.id = id
        this.title = title
        this.content = content
        this.entry_date = entry_date
        this.category = category
    }
    
    static async getAll() {
        const response = await db.query("SELECT * FROM diary_entries ORDER by entry_date DESC;");
        if (response.rows.length === 0) {
            throw new Error("No entries available.")
        }
        return response.rows.map(d => new Diary(d));
    }

    static async getById(id) {
        const response = await db.query("SELECT * FROM diary_entries WHERE id = $1;", [id]);

        if (response.rows.length != 1) {
        throw new Error("Unable to locate entry.")
        }
        return new Diary(response.rows[0])

    }   
}

module.exports = Diary

