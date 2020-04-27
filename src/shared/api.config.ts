const appName = 'nest_with_angular';
const urlApiBase = '/api';
const defaultDbName = appName;
const defaultPort = 3000;
const defaultDbUri = 'mongodb://localhost/' + defaultDbName;

export const apiConfig = {
    apiPort: defaultPort,
    dbUri: defaultDbUri,
    dbConnectionName: appName,
    urlSignup: urlApiBase + '/signup',
    urlLogin: urlApiBase + '/login',
    minUsernameLen: 1,
    maxUsernameLen: 30,
    minPasswordLen: 1,
    maxPasswordLen: 30,
    usernameRegex: /^[A-Za-zА-Яа-я0-9\s.\-_]+$/,
    passwordRegex: /^[A-Za-zА-Яа-я0-9\s.\-`~!@#$%^&*()_=+|?]+$/
}

export function setApiPort(port: any) {
    if (!port) {
        console.log(`No PORT provided in environment variables. Will use port ${defaultPort}`);
        apiConfig.apiPort = defaultPort;
        return;
    }

    console.log(`PORT = ${port}`);
    apiConfig.apiPort = port;
}

export function setDbUri(uri: string) {
    if (!uri) {
        console.log(`No MONGODB_URI provided in environment variables. Will use URI "${defaultDbUri}"`);
        apiConfig.dbUri = defaultDbUri;
        return;
    }

    console.log(`MONGODB_URI = ${uri}`);
    apiConfig.dbUri = uri;
}
