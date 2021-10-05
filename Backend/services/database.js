const { Pool } = require("pg");
const config = require('../src/config')

class connection {
    constructor() {
      this.pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "360licores",
        password: "admin",
        port: 5432,
      });
    }
  
    async execute(sql) {
      let res = await this.pool.query(sql);
      return res;
    }
  }
  
  module.exports = connection;

