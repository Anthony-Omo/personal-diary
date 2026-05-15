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

    static async searchByCategory(category) {
        const response = await db.query("SELECT * FROM diary_entries WHERE LOWER(category) = LOWER($1) ORDER BY entry_date DESC;", [category]);

        if (response.rows.length != 1) {
        throw new Error("No entries in that category.")
        }
        return new Diary(response.rows[0])

    } 

    static async create(data) {
        const { title, content, category } = data;
        const response = await db.query('INSERT INTO diary_entries (title, content, category) VALUES ($1, $2, $3) RETURNING *;',
        [title, content, category]
        );
        const entryId = response.rows[0].id;
        const newEntry = await Diary.getById(entryId);
        return newEntry;
  }
    
    async destroy() {
    const response = await db.query('DELETE FROM diary_entries WHERE id = $1 RETURNING *;', [this.id]);

    if (response.rows.length != 1) {
      throw new Error("Unable to delete entry.")
    }

    return new Diary(response.rows[0]);
  }

    async update(data) {
    const response = await db.query("UPDATE diary_entries SET title = $1, content = $2 WHERE id = $3 RETURNING id, title, content;",
      [data.title, data.content, this.id]);

    if (response.rows.length != 1) {
      throw new Error("Unable to update diary entry.")
    }

    return new Diary(response.rows[0]);
  }



}

module.exports = Diary

