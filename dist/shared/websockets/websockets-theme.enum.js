"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocketsTheme;
(function (WebSocketsTheme) {
    WebSocketsTheme[WebSocketsTheme["ClientConnected"] = 0] = "ClientConnected";
    WebSocketsTheme[WebSocketsTheme["AuthenticateWithToken"] = 1] = "AuthenticateWithToken";
    WebSocketsTheme[WebSocketsTheme["Unauthorized"] = 2] = "Unauthorized";
    WebSocketsTheme[WebSocketsTheme["UnknownCommand"] = 3] = "UnknownCommand";
    WebSocketsTheme[WebSocketsTheme["EndOfServiceCommands"] = 4] = "EndOfServiceCommands";
    WebSocketsTheme[WebSocketsTheme["SendBackData"] = 5] = "SendBackData";
})(WebSocketsTheme = exports.WebSocketsTheme || (exports.WebSocketsTheme = {}));
