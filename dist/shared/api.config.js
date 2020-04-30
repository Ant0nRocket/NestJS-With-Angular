"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlApiBase = '/api';
const defaultPort = 3000;
const defaultDbUri = 'mongodb://localhost/nest_with_angular';
exports.apiConfig = {
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
    socketAuthDelay: 5000,
};
function setApiPort(port) {
    if (!port) {
        console.log(`No PORT provided in environment variables. Will use port ${defaultPort}`);
        exports.apiConfig.apiPort = defaultPort;
        return;
    }
    console.log(`PORT = ${port}`);
    exports.apiConfig.apiPort = port;
}
exports.setApiPort = setApiPort;
function setDbUri(uri) {
    if (!uri) {
        console.log(`No MONGODB_URI provided in environment variables. Will use URI "${defaultDbUri}"`);
        exports.apiConfig.dbUri = defaultDbUri;
        return;
    }
    console.log(`MONGODB_URI = ${uri}`);
    exports.apiConfig.dbUri = uri;
}
exports.setDbUri = setDbUri;
