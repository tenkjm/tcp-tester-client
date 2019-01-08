import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import * as socketIo from 'socket.io-client';

const CHAT_URL = 'http://localhost:5000/';

Injectable()
export class WebsocketService {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(CHAT_URL);
        
    }

    public send(message: Object): void {
        
        this.socket.emit( 'my event', JSON.stringify({
            user : "1",
            rq : "2222222222222"
          }) )
    }
    public onMessage(): Rx.Observable<Object> {
        return new Rx.Observable<Object>(observer => {
            this.socket.on('my_response', (data: Object) => observer.next(data));
        });
    }
    public onEvent(event: Event): Rx.Observable<any> {
        return new Rx.Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}