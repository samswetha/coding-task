import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { faCheck,faTimes} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { NewtaskComponent } from '../newtask/newtask.component';
 
 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {

  constructor(private dataService:DataService,private modalService: NgbModal) { }
  allTasksList;  
  faCheck=faCheck;
  faClose =faTimes;
  ngOnInit(): void {
    
    this.dataService.getTasksList().subscribe(
      newData=> {
        this.allTasksList= newData;
        
        });
     
        this.dataService.refresh();
  }

  changeStatus(){
    this.allTasksList.forEach(element => {
     if(element.Checked===true&&!element.isCompleted){
      element.isCompleted=true;
     }
    });

  }
  open(){
    
    const modalRef = this.modalService.open(NewtaskComponent);
    modalRef.componentInstance.name = 'Taks';
  }
}
