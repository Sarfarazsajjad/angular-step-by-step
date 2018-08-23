import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  createServerStatus = "no server was created!";
  serverName = "Untitled server";
  username = "";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  
  onCreateServer(){
    this.createServerStatus = "server was created! server name is " + this.serverName;
  }

  onInputServerName(event:Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName(){
    this.username = "";
  }
  ngOnInit() {
  }

}
