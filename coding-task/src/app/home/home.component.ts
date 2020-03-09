import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

 tasksData;
 
  constructor(private dataService:DataService) {

    

  }
   globalTasks;
   personalTasks;
   leaderTasks;

  ngOnInit(): void {
    this.dataService.getTasksList().subscribe(
      newData=> {
        this.tasksData= newData;
        
        this.generateTasks();
        });
     
        this.dataService.refresh();
     

  }
  
  generateTasks(){
    //We could get it form service also - jsut showing different types 
    this.globalTasks = this.tasksData.filter(x => x.isGlobal===true);
    this.personalTasks = this.tasksData.filter(x => x.isGlobal===false&&x.isLeader===false);
    this.leaderTasks = this.tasksData.filter(x => x.isLeader===true);
  }
}
