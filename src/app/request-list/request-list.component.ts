import { Component, OnInit } from '@angular/core';
import { SocketRequest } from '../models/socketRequest';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  public socketRequests: SocketRequest[] = [
    new SocketRequest(1, "yandex", "GET\n yandex.ru ", "yandex.ru", 80),
    new SocketRequest(2, "google", "GET\n google.ru ", "google.ru", 80)
  ];

  constructor() { }

  ngOnInit() {
  }

}
