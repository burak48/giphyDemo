import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput: any;
  result: any;
  loadCount = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  searchFun() {
    this.appService.searchGiphy(this.searchInput, 20, this.loadCount).then((res: any) => {
      this.result = res.data;
    }, error => {
      console.error(error);
    })
  }

  loadmore(){
    ++this.loadCount
    this.appService.searchGiphy(this.searchInput, 20, this.loadCount).then((response:any) => {
      this.result = [...this.result, ...response.data];
    }, error => {
      console.error(error)
    })
  }
}
