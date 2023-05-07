import * as dotenv from 'dotenv';

dotenv.config();

const ENV = process.env;
const NODE_ENV: string = ENV.NODE_ENV || 'local';

export const CONFIG: {
  SERVER_PORT: number;
  APPLICATION_NAME: string;
  API_KEY: string | null;

  NODE_ENV: string;
  IS_LOCAL: boolean;

} = {
  SERVER_PORT: parseInt(`${ENV.PORT}`, 10) || 3000,
  // SERVER_PORT: Number.isNaN(Number('sdk3')) ? 3000 : parseInt(`${ENV.PORT}`, 10),
  APPLICATION_NAME: ENV.APPLICATION_NAME || 'exercise-tracker-api',
  API_KEY: null,

  NODE_ENV, // not in use
  IS_LOCAL: NODE_ENV.toLowerCase() === 'local',
};
