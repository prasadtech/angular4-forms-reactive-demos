import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  name = 'Alice';
  logs: string[] = [];
  showChild = true;

  ngOnInit() {
    setTimeout(() => this.updateName(), 3000);
    setTimeout(() => this.hideChild(), 4000);
  }

  updateName() {
    this.name = 'Bob';
  }

  hideChild() {
    this.showChild = false;
    this.logs.push(`onDestroy`);
  }

  onLog(data) {
    this.logs.push(data);
  }
}
