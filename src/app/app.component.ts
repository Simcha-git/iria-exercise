import { Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface digits {
  col1: number;
  col2: number;
  col3: number;
  col4: number;
  col5: number;
}

const ELEMENT_DATA: digits[] = [
  {col1: 1, col2: 2, col3: 3, col4: 4, col5: 5},
  {col1: 1, col2: 1, col3: 1, col4: 1, col5: 1},
  {col1: 2, col2: 2, col3: 2, col4: 2, col5: 2},
  {col1: 3, col2: 3, col3: 3, col4: 3, col5: 3}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNumbers:string
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  func(val:number){
    debugger;
    this.selectedNumbers+=val.toString;
  }
}
