import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private starting = 0;
  private resultGiphy = [];
  private searchInput: any;
  constructor(private gipyhService: AppService){}

  ngOnInit(){
    this.gipyhService.searchGiphy('sun', 20, 0);
  }

  searchFunc(){
    this.gipyhService.searchGiphy(this.searchInput, 20, 0);
  }

  loadMore(){
    ++this.starting
    this.gipyhService.searchGiphy('sun', 20, this.starting).then((response: any) => {
      this.resultGiphy = response;
      console.log(response, 'response')
    });
  }
}
