import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pastrie } from '../pastrie';
@Component({
  selector: 'app-create-pastrie',
  templateUrl: './create-pastrie.component.html',
  styleUrls: ['./create-pastrie.component.scss']
})
export class CreatePastrieComponent implements OnInit {
  @Output() pastrieToAdd: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm): void
  {
    console.log(form)
    this.pastrieToAdd.emit(form)
  }
}
