import { Component, OnInit } from '@angular/core';
import { Item } from 'src/assets/placeholder-items/HomeGridItems';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items?: Item[]

  constructor(private homeService: HomeService){
  }

  ngOnInit(): void {
    this.items = this.homeService.getItems()
  }
}
