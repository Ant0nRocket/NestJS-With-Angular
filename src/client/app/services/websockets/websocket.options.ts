import { environment } from "../../../environments/environment";

export class WebSocketOptions {

    /** Connection URL. */
    private _url = '';

    /** Connection URL. By default - host root. */
    public get url(): string {
        if (this._url === '') {
            // if your you have HTTPS connection then (at least Firefox) will
            // block attempts to connect to ws:// resources because they are
            // "insecure connection"'s. In that case you should provide wss:// url
            const wsProtocolPrefix =
                location.protocol.startsWith('https') ? 'wss://' : 'ws://';

            this._url = wsProtocolPrefix + location.host;

            if (!environment.production) {
                // in dev mode backend usualy on 3000 port, so let's change it
                this._url = this._url.replace('4200', '3000');
            }
        }

        return this._url;
    }

    public set url(url: string) {
        this._url = url;
    }

    /**
    * For exanple, Heroku closes any connection in 30 sec.
    * if there were no packages transmited.
    * Below there is Ping-Pong code which fire every 25000 ms.
    */
    pingPongIntervalMs = 20000;

    /** 
   * Set to true if you need to start reconnection procedure
   * on error or close
   */
    public reconnectOnClose = true;

    /** 
     * If WebSocket closed because of some error it will
     * try to reconnect every 5 seconds
     */
    public reconnectionOnErrorInterval = 5000;

    /** Max amount of reconnection attempts */
    public reconnectionAttemptsLimit = 10;
}