const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'requests.db');
const db = new sqlite3.Database(dbPath);

const initDatabase = () => {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        mobile TEXT NOT NULL,
        email TEXT NOT NULL,
        service TEXT NOT NULL,
        message TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Error creating table:', err);
      } else {
        console.log('Database initialized successfully');
      }
    });
  });
};

const getAllRequests = (callback) => {
  db.all('SELECT * FROM requests ORDER BY created_at DESC', callback);
};

const addRequest = (data, callback) => {
  const { name, mobile, email, service, message } = data;
  db.run(
    'INSERT INTO requests (name, mobile, email, service, message) VALUES (?, ?, ?, ?, ?)',
    [name, mobile, email, service, message],
    callback
  );
};

const deleteRequest = (id, callback) => {
  db.run('DELETE FROM requests WHERE id = ?', [id], callback);
};

const searchByMobile = (mobile, callback) => {
  db.all(
    'SELECT * FROM requests WHERE mobile LIKE ? ORDER BY created_at DESC',
    [`%${mobile}%`],
    callback
  );
};

module.exports = {
  db,
  initDatabase,
  getAllRequests,
  addRequest,
  deleteRequest,
  searchByMobile
};
