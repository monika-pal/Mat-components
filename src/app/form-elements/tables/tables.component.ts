import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  displayedColumns = ['select','sano', 'plantname', 'plantid','creationdate','validtill','productcount','action','more'];

  dataSource = new MatTableDataSource<InvoiceListItems>(ELEMENT_DATA);
  selection = new SelectionModel<InvoiceListItems>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: InvoiceListItems): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.sano + 1}`;
  }

 

  ngOnInit(): void {
   

  }

}

export interface InvoiceListItems {
sano:number;
plantname:string;
plantid:number;
crdate:string;
crtime:string;
validtill:string;
prodcount:number;
}

const ELEMENT_DATA: InvoiceListItems[] = [
 {sano:130097862100000093,plantname:'Mogli Labs (India) Private Limited - Delhi', plantid:9786, crdate:'14-01-2021',crtime:'04:15:26',validtill:'14-01-2021',prodcount:1},
 {sano:130097862100000093,plantname:'Mogli Labs (India) Private Limited - Delhi', plantid:9786, crdate:'14-01-2021',crtime:'04:15:26',validtill:'14-01-2021',prodcount:1},
 {sano:130097862100000093,plantname:'Mogli Labs (India) Private Limited - Delhi', plantid:9786, crdate:'14-01-2021',crtime:'04:15:26',validtill:'14-01-2021',prodcount:1},
 {sano:130097862100000093,plantname:'Mogli Labs (India) Private Limited - Delhi', plantid:9786, crdate:'14-01-2021',crtime:'04:15:26',validtill:'14-01-2021',prodcount:1},
 {sano:130097862100000093,plantname:'Mogli Labs (India) Private Limited - Delhi', plantid:9786, crdate:'14-01-2021',crtime:'04:15:26',validtill:'14-01-2021',prodcount:1},
 {sano:130097862100000093,plantname:'Mogli Labs (India) Private Limited - Delhi', plantid:9786, crdate:'14-01-2021',crtime:'04:15:26',validtill:'14-01-2021',prodcount:1},
 {sano:130097862100000093,plantname:'Mogli Labs (India) Private Limited - Delhi', plantid:9786, crdate:'14-01-2021',crtime:'04:15:26',validtill:'14-01-2021',prodcount:1},
 {sano:130097862100000093,plantname:'Mogli Labs (India) Private Limited - Delhi', plantid:9786, crdate:'14-01-2021',crtime:'04:15:26',validtill:'14-01-2021',prodcount:1},
];

