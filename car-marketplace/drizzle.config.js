/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./config/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://car-market_owner:LEkmBjZyz75c@ep-morning-fire-a5qc5ivp.us-east-2.aws.neon.tech/car-market?sslmode=require',
    }
  };