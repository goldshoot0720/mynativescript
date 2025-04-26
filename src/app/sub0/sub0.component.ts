import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";
import { firebase } from "@nativescript/firebase-core";
import { GoogleAuthProvider } from "@nativescript/firebase-auth";
import { GoogleSignin } from "@nativescript/google-signin";
import { Router } from '@angular/router';

@Component({
  selector: "Sub0",
  templateUrl: "./sub0.component.html",
})
export class Sub0Component implements OnInit {

  constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    GoogleSignin.configure(); // called earlier in the app
    GoogleSignin.signIn().then((user) => {
      const credential = GoogleAuthProvider.credential(
        user.idToken,
        user.accessToken
      );
      firebase()
        .auth()
        .signInWithCredential(credential)
        .then((userCredential) => {
          // 登入成功
          const user = userCredential.user;
          console.log("登入成功！", user);
          // 可以根據需求進行後續處理，例如導航到主頁或顯示歡迎信息
          alert("登入成功！歡迎 " + (user.displayName || user.email));
          this.router.navigate(['/main']);
        })
        .catch((error) => {
          // 登入失敗
          console.error("登入失敗：", error.message);
          // 顯示錯誤訊息或進行錯誤處理
        });
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

}
