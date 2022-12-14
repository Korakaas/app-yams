import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {
  perPage: number = 3; //nb de pastries/pages
  total: number = 0;//total des pastries
  pages: number[] = []; //pages num
  currentPage: number = 0;
  numberPages: number = 0; //nombre de pages
  pastries: Pastrie[];
  @Output() setPaginate: EventEmitter<{ start: number; end: number }> = new EventEmitter();

  constructor(private pS:PastrieService) { }

  ngOnInit(): void {
    this.init$();
    this.pS.sendCurrentNumberPage.subscribe(numberPage => {
      console.log()
      this.currentPage = numberPage;
      this.init$(this.currentPage);
    });
  }
// init(page : number = 1)
// {
//   this.pS.getPastriesCount().subscribe(count => {
//     this.numberPages = Math.ceil(count / this.perPage);
//     this.pages = [];
//     this.currentPage = page;
//     for (let i = 1; i < this.numberPages + 1; i++) {
//         this.pages.push(i);
//     }
// })
// }
// init(page : number = 1) {
//   this.total = this.pS.getPastriesCount();
//   this.numberPages = Math.ceil(this.total / this.perPage);
//   this.currentPage = page;
//   this.pages = [];
//   for (let i = 1; i < this.numberPages + 1; i++) {
//     this.pages.push(i);
//   }
// }

init$(page : number = 1) {
  this.pS.getPastriesCount$().subscribe(count => {
    console.log(count)
    this.total = count;
    console.log(this.total)
    this.numberPages = Math.ceil(this.total / this.perPage);
    console.log(this.numberPages)
  this.currentPage = page;
  console.log(this.currentPage)
  this.pages = [];
  for (let i = 1; i < this.numberPages + 1; i++) {
    this.pages.push(i);
  }
  console.log(this.pages)
  })
}


  selectedPage(page: number)
  {
    this.currentPage = page;
    this.setPaginate.emit(this.paginate(page));
    this.pS.currentPage(this.currentPage); // Mettre ?? jour les autres components paginate
  }


  next() {
    if (this.currentPage >= this.numberPages) {
      this.currentPage = 1;
    } else {
      this.currentPage++;
    }
    this.setPaginate.emit(this.paginate(this.currentPage)); // ??mettre la page courante
    this.pS.currentPage(this.currentPage); // Mettre ?? jour les autres components paginate
  }
  previous() {
    if (this.currentPage == 1) {
      this.currentPage = this.numberPages;
    } else {
      this.currentPage--;
    }
    this.setPaginate.emit(this.paginate(this.currentPage));
    this.pS.currentPage(this.currentPage); // Mettre ?? jour les autres components paginate
  }

  paginate(page: number): { start: number, end: number } {
    let start = (page - 1) * this.perPage; // 0 2
    let end = start + this.perPage; // 2 4

    return { start: start, end: end };
  }
}