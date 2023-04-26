import { Component, OnInit, ViewChild } from '@angular/core';
import { TechnologiesService } from 'src/app/services/technologies.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'
import { forkJoin } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'instruction', 'date', 'glass'];
  detalles: any[];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private myService: TechnologiesService) { }

  ngOnInit() {
    this.myService.getDatos().subscribe(response => {
      this.detalles = response.drinks;
      this.dataSource.data = this.detalles;
      this.dataSource.paginator = this.paginator;
    });
  }

  // displayedColumns: string[] = ['name', 'instruction', 'date', 'glass'];
  // dataSource: any;

  // constructor(private technologiesService: TechnologiesService) { }

  // ngOnInit() {
  //   this.technologiesService.getCocktails().subscribe((data: any) => {
  //     console.log(data);
  //     this.dataSource = new MatTableDataSource(data.drinks);
  //   });
  // }
}