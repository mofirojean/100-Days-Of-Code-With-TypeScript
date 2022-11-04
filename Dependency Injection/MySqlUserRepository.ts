import mysql from 'mysql';


class MySqlUserRepository implements UserRepository {
  connection = mysql.createConnection({
    // connection details
  });
  save(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      return this.connection.query(
        `INSERT INTO users (email, password)
        VALUES (?, ?)`,
        [user.email, user.password],
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        }
      );
    });
  }
}