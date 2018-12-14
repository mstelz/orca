const path = require('path');
const sqlite3 = require('sqlite3').verbose();

class Database {
  constructor() {
    this.db = new sqlite3.Database(
      path.join(__dirname, '../../../db/Orca.db'),
      sqlite3.OPEN_READWRITE,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Connected to the orca database.');
        }
      }
    );
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log(`Error running sql: ${  sql}`);
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          console.log(`Error running sql: ${  sql}`);
          console.log(err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) {
          console.log(`Error running sql ${  sql}`);
          console.log(err);
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }
}

const db = new Database();

// db.serialize(() => {
//   db.each(`SELECT * FROM bt_devices`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row.device_uuid + ": " + row.name);
//   });
// });

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('Close the database connection.');
//   }
// });

module.exports = db;
