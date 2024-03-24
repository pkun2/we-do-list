import pool from '../db.js';

export const getRootController = (req, res) => {
    pool.query('SELECT * FROM todos', (error, results) => {
        if (error) {
            throw error;
          }
          console.log(results);
    });
    res.send('Hello World!');
}

