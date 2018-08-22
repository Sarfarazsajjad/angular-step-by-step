import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  createServerStatus = "no server was created!";
  serverName = "";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  
  onCreateServer(){
    this.createServerStatus = "server was created!";
  }

  onInputServerName(event:any){
    console.log(event);
  }
  ngOnInit() {
  }

}
