interface Env {
  DATABASE_HOST: string;
  API_PORT: number | string;
}

const getEnvVariables = () => {
  const processEnv = process.env;

  return {
    DATABASE_HOST: processEnv.DATABASE_HOST || "./db/mailchest.db",
    API_PORT: processEnv.API_PORT || 9999,
  };
};

const env: Env = getEnvVariables();

export default env;
