import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService:DataService) { }
  tasksData
  ngOnInit(): void {
    this.dataService.getTasksList().subscribe(
      newData=> {
        this.tasksData= newData;
      
        this.getCounts();
        });
     
        this.dataService.refresh();
  }


myCount=0;
teamCount=0;
getCounts(){
   
  this.teamCount = this.tasksData.filter(x => x.isGlobal==true || x.isGlobal==true).length;
  this.myCount = this.tasksData.filter(x => x.isGlobal==false&&x.isLeader==false).length;
 }

}
