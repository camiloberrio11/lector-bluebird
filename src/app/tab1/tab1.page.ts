import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {
    document.addEventListener('readystatechange', (event: any) =>
      console.log('event1', event)
    );
    document.addEventListener('read', (event: any) =>
      console.log('event2', event)
    );
    document.addEventListener('deviceready', (event: any) =>
      console.log('Dispositivo listo', event)
    );
  }
}
