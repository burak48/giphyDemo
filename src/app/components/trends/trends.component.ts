import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  trends: any;
  loadCount = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.trendsGiphy().then((res: any) => {
      this.trends = res.data;
    });
  }

  loadmore(){
    ++this.loadCount
    this.appService.trendsGiphy(20, this.loadCount).then((response:any) => {
      this.trends = [...this.trends, ...response.data];
    }, error => {
      console.error(error)
    })
  }

}
