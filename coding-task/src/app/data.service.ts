import { Injectable } from '@angular/core';
import * as tasksMock from '../assets/tasks.json';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  originalMockData ;
  constructor() {

    this.originalMockData=tasksMock.tasks;
   }

   private data= new Subject();
   getTasksList() {
      
       return this.data.asObservable();
   }
   refresh() {
      this.data.next(this.originalMockData);

   } 
 
   
   getGlobalTasks(){
    return this.originalMockData.filter(x => x.isGlobal==true);
     
   }
   getLeaderTasks(){
    return this.originalMockData.filter(x => x.isLeader==true);
     
   }
   getPersonalTasks(){
    return this.originalMockData.filter(x => x.isGlobal==false&&x.isLeader==false);
     
   }
   addTask(obj){
    obj.start = `${obj.start.year}-${obj.start.month}-${obj.start.day}` 
    obj.end = `${obj.end.year}-${obj.end.month}-${obj.end.day}` 
     obj.isGlobal = obj.isGlobal=="true";
     obj.isLeader = obj.isLeader=="true";
this.originalMockData.push(obj);
this.refresh();
   }
}
