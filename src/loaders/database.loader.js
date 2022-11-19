const { Config } = require("../configs/config");
const { DBService } = require("../db/db-service");

class DatabaseLoader {
  static init (){
    DBService.init({
      host: Config.DB_HOST,
      user: Config.DB_USER,
      password: Config.DB_PASS,
      database: Config.DB_DATABASE,
      dateStrings: ['DATE', 'DATETIME']
    });
    DBService.checkConnection();
  }
}

module.exports = { DatabaseLoader };