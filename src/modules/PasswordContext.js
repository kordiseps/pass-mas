import SqliteManager from "./SqliteManager";
class PasswordContext {
  sqliteManager = new SqliteManager();

  createDb() {
    const sqlString =
      "CREATE TABLE if not exists Paswords (" +
      "id INTEGER PRIMARY KEY NOT NULL ," +
      "app TEXT NOT NULL ," +
      "userName TEXT NOT NULL ," +
      "password TEXT NOT NULL );";
    this.sqliteManager.execute(
      sqlString,
      (err) => {
        console.log("createdb fail", err);
      },
      (val) => {
        console.log("createDb Success", val);
      }
    );
  }

  insert(newData) {
    const sqlString =
      "INSERT INTO Paswords (app,userName,password)" +
      `VALUES('${newData.app}','${newData.userName}','${newData.password}')`;
    this.sqliteManager.execute(
      sqlString,
      (err) => {
        console.log("insert fail", err);
      },
      (val) => {
        console.log("insert Success", val);
      }
    );
  }

  delete(id) {
    const sqlString = `DELETE FROM Paswords WHERE id =${id}`;
    this.sqliteManager.execute(
      sqlString,
      (err) => {
        console.log("delete fail", err);
      },
      (val) => {
        console.log("delete Success", val);
      }
    );
  }

  select(callbackMethod) {
    const sqlString = `SELECT * FROM Paswords`;
    this.sqliteManager.execute(
      sqlString,
      (err) => {
        console.log("delete fail", err);
      },
      (val) => {
        // console.log("val",val)
        // console.log("val.rows",val.rows)
        callbackMethod(val.rows._array);
      }
    );
  }

  
  find(appName,callbackMethod) {
    const sqlString = `SELECT * FROM Paswords WHERE app LIKE '%${appName}%' `;
    this.sqliteManager.execute(
      sqlString,
      (err) => {
        console.log("delete fail", err);
      },
      (val) => {
        callbackMethod(val.rows._array);
      }
    );
  }
}

export default PasswordContext;
