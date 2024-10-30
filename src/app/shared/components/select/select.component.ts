import { title } from 'process';
import { Component, EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent  implements OnInit{
@Input() title:string = ""
@Input()  data:any[] = []
@Output()   selectedValue = new EventEmitter () 


constructor(){}
  ngOnInit(): void {
    
  }

  DetectChanges(event:any){
    this.selectedValue.emit(event)
  }
}
