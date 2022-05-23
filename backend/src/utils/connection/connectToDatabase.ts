import { connect } from 'mongoose';

const connectToDatabase = async (): Promise<void> => {
  const DB_URL: Record<string, string | undefined> = {
    local: process.env.DATABASE_LOCAL_URL,
    dev: process.env.DATABASE_URL,
    backdev: process.env.DATABASE_BACKDEV_URL,
    test: process.env.DATABASE_BACKDEV_URL,
    production: process.env.DATABASE_URL,
  };

  const CONNECTION_STRING = process.env.NODE_ENV && DB_URL[`${process.env.NODE_ENV}`];
  if (CONNECTION_STRING) {
    await connect(CONNECTION_STRING);
  }
};

export default connectToDatabase;
