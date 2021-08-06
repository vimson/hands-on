const mysql = require("mysql");

class MySQLRepo {
  connectionPool = null;

  constructor() {
    this.connectionPool = mysql.createPool({
      host: process.env.MYSQL_SERVER,
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      port: process.env.MYSQL_PORT,
      connectionLimit: 10,
    });
  }

  async getConnection() {
    return new Promise((resolve, reject) => {
      this.connectionPool.getConnection(function (err, connection) {
        if (err) {
          reject(err);
        }
        resolve(connection);
      });
    });
  }

  releaseConnection(connection) {
    connection.release();
  }
}

module.exports = new MySQLRepo();
