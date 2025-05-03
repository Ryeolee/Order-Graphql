export type ConfigObject = ReturnType<typeof configuration>;

export function configuration() {
  return {
    database: {
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      schema: process.env.DATABASE_SCHEMA,
    },
  };
}
