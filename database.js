var mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'oliveira'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

module.exports = {
    execSQLQuery: function execSQLQuery(sqlQry, res) {
        const connection = mysql.createConnection({
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'oliveira'
        });

        connection.query(sqlQry, function(error, results, fields) {
            if (error)
                res.json(error);
            else
                res.json(results);
            connection.end();
            console.log('executou!');
        });
    },
};