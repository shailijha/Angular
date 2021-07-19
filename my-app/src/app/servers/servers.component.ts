import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  bool = false;
  // serverCreationStatus = 'No server created';
  serverCreated = false;
  serverName = '';
  servers = ['s1', 's2'];
  constructor() {
      setTimeout(() => {
        this.bool = true;
      }, 2000);
   }

  ngOnInit(): void {
  }

  createServer() {
    // this.serverCreationStatus = 'Server created. Name is ' +this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // updateServer(event) {
  //   this.serverName = event.target.value; 
  // }
}
