import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  retracted: boolean = true;

  constructor(private sidebarService: SidebarService){}

  retractSidebar(){
    this.retracted = !this.retracted;
  }
  
}
