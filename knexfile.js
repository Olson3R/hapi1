module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'homation',
      user:     'homation_app',
      password: 'i3coaq2Dt=XAGPA2@uQ'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    }
  }

}
