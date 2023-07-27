module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-57.railway.app'),
      port: env.int('PGPORT', 7794),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'OL70zU7ss1NZ3LZEQ2nE'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
