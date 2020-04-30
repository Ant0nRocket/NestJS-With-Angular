const urlApiBase = '/api';
const defaultPort = 3000;
const defaultDbUri = 'mongodb://localhost/nest_with_angular';

export const apiConfig = {
    apiPort: defaultPort,
    dbUri: defaultDbUri,
    urlSignup: urlApiBase + '/signup',
    urlLogin: urlApiBase + '/login',
    urlTokenCheck: urlApiBase + '/check-token',
    minUsernameLen: 1,
    maxUsernameLen: 30,
    minPasswordLen: 1,
    maxPasswordLen: 30,
    usernameRegex: /^[A-Za-zА-Яа-я0-9\s.\-_]+$/,
    passwordRegex: /^[A-Za-zА-Яа-я0-9\s.\-`~!@#$%^&*()_=+|?]+$/,
    socketAuthDelay: 5000, // 5 seconds
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
