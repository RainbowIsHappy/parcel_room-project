import { Component, OnInit } from '@angular/core';
import { liff } from '@line/liff';

type UnPromise<T> = T extends Promise<infer X> ? X : T;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  os: ReturnType<typeof liff.getOS>;
  profile!: UnPromise<ReturnType<typeof liff.getProfile>>;

  constructor() {}

  ngOnInit(): void {}

  liff_open(): void {
    liff
      .init({ liffId: '2004139710-wDam1rVk' })
      .then(() => {
        this.os = liff.getOS();
        if (liff.isLoggedIn()) {
          liff
            .getProfile()
            .then((profile) => {
              this.profile = profile;
            })
            .catch(console.error);
        } else {
          liff.login();
        }
      })
      .catch(console.error);

    console.log(JSON.stringify(this.profile));
  }
}
