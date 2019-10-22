import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="btn-group">
  
    <button class="btn btn-info"
            routerLink="heroparent"
            routerLinkActive="btn-warning"
    >hero</button>
    
    <button class="btn btn-info"
    routerLink="nameparent"
    routerLinkActive="btn-warning"
    >name</button>
    
    <button class="btn btn-info"
    routerLink="versionparent"
    routerLinkActive="btn-warning"
    >version</button>

    <button class="btn btn-info"
    routerLink="votetaker"
    routerLinkActive="btn-warning"
    >votetaker</button>

    <button class="btn btn-info"
    routerLink="countdown"
    routerLinkActive="btn-warning"
    >countdown</button>

  </div>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
