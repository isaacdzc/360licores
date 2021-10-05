const { Pool } = require("pg");
const config = require('../src/config')

/**
 * Conexión a la base de datos
 */
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

  //Función para ejecutar scripts con PostgreSQL
  async execute(sql) {
    let res = await this.pool.query(sql);
    return res;
  }
}

  module.exports = connection;

