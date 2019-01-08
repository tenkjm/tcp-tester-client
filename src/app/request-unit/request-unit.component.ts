import { Injectable, OnInit, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SocketRequest } from '../models/socketRequest';
import { WebsocketService } from '../websocket.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


const CHAT_URL = 'ws://127.0.0.1:5000';
export enum Event {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

export interface Message {
	author: string,
	message: string
}
@Component({
  selector: 'app-request-unit',
  templateUrl: './request-unit.component.html',
  styleUrls: ['./request-unit.component.css']
})
export class RequestUnitComponent implements OnInit {
  public messages: Subject<Message>;
  public socketService: WebsocketService;
  public socketRequests: SocketRequest[] = [
    new SocketRequest(1, "yandex", "GET\n yandex.ru ", "yandex.ru", 80),
    new SocketRequest(2, "google", "GET\n google.ru ", "google.ru", 80)
  ];
  request: SocketRequest = this.socketRequests[0];

  constructor(socketService: WebsocketService,private route: ActivatedRoute) {
    this.socketService = socketService;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.socketRequests.forEach((s: SocketRequest) => {
        if (s.id == params.id) {
          this.request = s;
        }
      });
    });
    this.initIoConnection();
    this.socketService.send({auton:"anton",
  message:"Hi!"});
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

     this.socketService.onMessage()
      .subscribe((message: Message) => {
        console.log(message);
      });


    }

    public  onClickMe():void
    {
      this.socketService.send({auton:"anton",
  message:"Hi!"});
    }
}