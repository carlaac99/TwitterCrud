// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {


    client: 'pg',
    connection: {
      database: 'twitter',
      user:     'postgres',
      password: ''
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  

};
