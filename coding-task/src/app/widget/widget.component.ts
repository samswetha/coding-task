import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less']
})
export class WidgetComponent implements OnInit {

  constructor() { }
 
  @Input() tasks; 
  @Input() headerName; 

  ngOnInit(): void {
    
  }

}
