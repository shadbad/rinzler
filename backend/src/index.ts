import { loadEnvironmentVariables } from './util';
import { start as startServer } from './server';

loadEnvironmentVariables();

startServer();
