// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "postgres",
//         host: env("DATABASE_HOST"),
//         port: env.int("DATABASE_PORT"),
//         database: env("DATABASE_NAME"),
//         username: env("DATABASE_USERNAME"),
//         password: env("DATABASE_PASSWORD"),
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       },
//       options: {},
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 1337),
      database: env("DATABASE_NAME", "db"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
