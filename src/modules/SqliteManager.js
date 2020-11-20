import * as SQLite from "expo-sqlite";
class SqliteManager {
  db = SQLite.openDatabase("app.db");

  execute(sqlString, errorCallback, successCallback) {
    this.db.transaction((tx) => {
      tx.executeSql(
        sqlString,
        [],
        (tx, val) => successCallback(val),
        (err) => errorCallback(err)
      );
    });
  }
}

export default SqliteManager;
