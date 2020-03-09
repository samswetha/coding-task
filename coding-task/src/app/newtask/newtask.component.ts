import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.less']
})
export class NewtaskComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private dataService:DataService) {}
  taskObj:any={};
  ngOnInit(): void {
    
  }
  
  
  valid=false;
  addTask(){

    if(this.taskObj.text==''||!this.taskObj.start||this.taskObj.start==''||!this.taskObj.end||this.taskObj.end==''||!this.taskObj.creator){
      alert('Please fill all fields - it canbe a message also ');
      return ;
    }

    this.dataService.addTask(this.taskObj);
    
  }
}
