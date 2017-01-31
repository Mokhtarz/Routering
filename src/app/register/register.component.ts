import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private username: string;
  private password: string;
  private email: string;

  constructor(private mediaservice: MediaService) { }

  ngOnInit() {
  }

  register = () => {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.mediaservice.setUser(user);
    this.mediaservice.register();
  }

}
