import { Router} from '@angular/router';
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  private url: string = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {}

  setUser = (user) => {
    this.user = user;
    console.log(this.user);
  }

  constructor(private http: Http, private router: Router) { }

  login = () => {
    return this.http.post(this.url + '/login', this.user)
    .subscribe(
      resp => {
        const dataFromServer = resp.json();
        this.user = dataFromServer.user;
        this.user.token = dataFromServer.token;
        console.log(this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate[('front')];

      },
      error => {
        console.log(error);
      }
    );
  }

}
