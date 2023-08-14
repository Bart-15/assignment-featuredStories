import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const envFileContent = fs.readFileSync((__dirname, './.env'), 'utf8');

export const envVariables = {};
envFileContent.split('\n').forEach((line) => {
    const [key, value] = line.split('=');
    envVariables[key] = value;
});
