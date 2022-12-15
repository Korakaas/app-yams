import { literalMap } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {
  perPage: number = 3;
  total: number;
  page: number = 1;
  presentPage = 1;
  pastries: Pastrie[];
  @Output() pastriesPages: EventEmitter<any> = new EventEmitter();
  constructor(private ps:PastrieService) { }

  ngOnInit(): void {
    this.getTotalPastries();
    

  }
  getCountOPages()
  {
    return Math.ceil(this.ps.getPastriesCount()/ this.perPage);
  }
  getTotalPastries()
  {
    this.total = this.ps.getPastriesCount();
  }
  next()
  {
    if(this.presentPage < this.getCountOPages()) {
      this.presentPage += 1;
      this.pastries = this.ps.paginate(this.presentPage, this.perPage)
    }
    this.pastriesPages.emit(this.pastries)
    
  }
  previous()
  {
    if(this.presentPage > 1)
    { 
      this.presentPage -= 1;
      this.pastries = this.ps.paginate(this.presentPage, this.perPage)
      this.pastriesPages.emit(this.pastries)
    }
    
  }
}