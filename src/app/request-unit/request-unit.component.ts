import { Component, OnInit } from '@angular/core';
import { SocketRequest } from '../models/socketRequest';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-unit',
  templateUrl: './request-unit.component.html',
  styleUrls: ['./request-unit.component.css']
})
export class RequestUnitComponent implements OnInit {

  public socketRequests: SocketRequest[] = [
    new SocketRequest(1, "yandex", "GET\n yandex.ru ", "yandex.ru", 80),
    new SocketRequest(2, "google", "GET\n google.ru ", "google.ru", 80)
  ];
  request: SocketRequest = this.socketRequests[0];

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.socketRequests.forEach((s: SocketRequest) => {
        if (s.id == params.id) {
          this.request = s;
        }
      });
    });
  }
}
