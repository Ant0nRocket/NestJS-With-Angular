import { WebSocketsDto } from "./websockets.dto";

export interface IWebSocketsEvent {
    /** Every websocket message should be associated to event. */
    event: string;

    data: WebSocketsDto;
}