import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // select by tag eg: <app-servers></app-servers>
  // selector: '[app-servers]', // select by attribute eg: <div app-servers></div>
  // selector: '.app-servers', // select by class eg: <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
