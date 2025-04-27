import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { getJSON } from "@nativescript/core/http";
import { Dialogs } from '@nativescript/core'
import { firebase } from "@nativescript/firebase-core";


@Component({
  selector: 'Sub7',
  templateUrl: './sub7.component.html',
})
export class Sub7Component implements OnInit {

  data: any = {};

  isNewData: boolean = false;
  isViewData: boolean = true;

  data3 = {
    textareavalue1: '',
    textareavalue2: '',
    textareavalue3: '',
    textareavalue4: ''
  };

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.fetchData();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  fetchData() {
    const url = "https://tsaopaofenghsiung2025-myangularsub7.firebaseio.com/.json";

    getJSON(url).then((result) => {
      console.log("Firebase 資料：", result);
      this.data = result;
    }).catch((error) => {
      console.error("讀取失敗：", error);
    });
  }

  onNewDataButtonTap(){
    this.isNewData = true;
    this.isViewData = false;
  }

  onViewDataButtonTap(){
    this.isNewData = false;
    this.isViewData = true;
    this.fetchData();
  }

  onNewData3ButtonTap(){
    if (this.data3.textareavalue1 === '' || this.data3.textareavalue2 === '' || this.data3.textareavalue3 === '') {
      Dialogs.alert({
        title: '',
        message: '訂閱項目不得為空值\n訂閱費用不得為空值\n訂閱到期日不得為空值',
        okButtonText: 'OK'
      });
      return;
    }
    Dialogs.confirm({
      title: '新增資料',
      message: `${this.data3.textareavalue1} \n${this.data3.textareavalue2} \n${this.data3.textareavalue3} \n${this.data3.textareavalue4}`,
      okButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result) {
        const url = "https://tsaopaofenghsiung2025-myangularsub7.firebaseio.com/.json";
        const data = {
          textareavalue1: this.data3.textareavalue1,
          textareavalue2: this.data3.textareavalue2,
          textareavalue3: this.data3.textareavalue3,
          textareavalue4: this.data3.textareavalue4,
          user: firebase().auth().currentUser.email
        };

        console.log("要新增的資料：", data);
        this.isNewData = false;
        this.isViewData = true;

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("新增資料成功：", result);
            this.fetchData();
          })
          .catch((error) => {
            console.error("新增資料失敗：", error);
          });
      }
    })
  }

}
