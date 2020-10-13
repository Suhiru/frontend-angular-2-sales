import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list-bootstrap.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [

    new SalesPerson("Suhiru", "Benjamin", "suhiru@123.com", 52000),
    new SalesPerson("Dulip", "Kumara", "dulip@123.com", 12000),
    new SalesPerson("Chamod", "Lal", "chamod@123.com", 700000),
    new SalesPerson("Mahima", "Induwara", "mahima@123.com", 80000),
    new SalesPerson("Kushan", "Ariyadasa", "kushan@123.com", 45000),
    new SalesPerson("Anais", "Leal", "anais@123.com", 65000),
    new SalesPerson("Tyronne", "Benjamin", "tyronne@123.com", 95000),

];

  constructor() { }

  ngOnInit(): void {
  }

}
