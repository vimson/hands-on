const mysqlRepo = require("../repositories/mysql.repo");

class Post {
  getPosts() {
    return new Promise(async (resolve, reject) => {
      const connection = await mysqlRepo.getConnection();
      const sql = `SELECT * FROM posts`;
      connection.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
        mysqlRepo.releaseConnection(connection);
      });
    });
  }

  createPost(postArticle) {
    return new Promise(async (resolve, reject) => {
      const connection = await mysqlRepo.getConnection();
      const sql = `INSERT INTO posts SET id = '${postArticle.id}', title = '${postArticle.title}', 
	  				description = '${postArticle.description}', user_id= '${postArticle.user_id}'`;
      connection.query(sql, (err, results) => {
        if (err) reject(err);
        mysqlRepo.releaseConnection(connection);
        resolve(results);
      });
    });
  }

  updatePost(postArticle) {
    return new Promise(async (resolve, reject) => {
      const connection = await mysqlRepo.getConnection();
      const sql = `UPDATE posts SET title = '${postArticle.title}', 
	  				description = '${postArticle.description}', user_id= '${postArticle.user_id}'
					  WHERE id = '${postArticle.id}'`;
      connection.query(sql, (err, results) => {
        if (err) reject(err);
        mysqlRepo.releaseConnection(connection);
        resolve(results);
      });
    });
  }

  deletePost(postArticle) {
    return new Promise(async (resolve, reject) => {
      const connection = await mysqlRepo.getConnection();
      const sql = `DELETE FROM posts WHERE id = '${postArticle.id}'`;
      connection.query(sql, (err, results) => {
        if (err) reject(err);
        mysqlRepo.releaseConnection(connection);
        resolve(results);
      });
    });
  }
}

module.exports = new Post();
