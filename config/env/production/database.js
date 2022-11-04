var parse = require("pg-connection-string").parse;
const { host, port, database, username, password } = parse(
  process.env.DATABASE_URL
);
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF"),
        },
      },
      options: {},
    },
  },
});
