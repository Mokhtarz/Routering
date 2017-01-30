import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private mediaservice: MediaService) { }

  ngOnInit() {
  }

  login = () => {
    const user = {
      username: this.username,
      password: this.password
    };
    this.mediaservice.setUser(user);
    this.mediaservice.login();
  }

}
