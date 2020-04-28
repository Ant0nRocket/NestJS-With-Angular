import { Component, OnInit, Input } from '@angular/core';
import { WebSocketsService } from '../../websockets/websockets.service';
import * as shortid from 'shortid';
import { Observable } from 'rxjs';
import { WebSocketsTheme } from '../../../../shared/websockets/websockets-theme.enum';
import { WebSocketsDto } from '../../../../shared/websockets/websockets.dto';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-websockets-test',
  templateUrl: './websockets-test.component.html'
})
export class WebsocketsTestComponent implements OnInit {

  @Input()
  title: string = 'NestJS WebSockets test';

  message: string = '';
  obs: Observable<WebSocketsDto>;

  messages: string[] = [
    'Build in message #1',
    'Build in message #2'
  ]

  private cid: string;

  constructor(
    private wss: WebSocketsService,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.cid = shortid.generate();

    this.obs = this.wss.getSubjectFor(this.cid);
    this.obs.subscribe(
      (dto) => {
        if (dto.theme === WebSocketsTheme.SendBackData) {
          this.messages.push(dto.content);
        }
      }
    );
  }

  sendMessageToServer() {
    const dto: WebSocketsDto = {
      cid: this.cid,
      theme: WebSocketsTheme.SendBackData,
      content: this.message
    };
    this.wss.send(dto);
  }

}
