import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../servicies/admin.service';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-admin-tabel-admini',
  templateUrl: './admin-tabel-admini.component.html',
  styleUrls: ['./admin-tabel-admini.component.css'],
})
export class AdminTabelAdminiComponent implements OnInit {
  constructor(private adminService: AdminService) {}
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'email'];
  dataSource = new MatTableDataSource<Admin>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.adminService.getAll().subscribe((admins: Admin[]) => {
      this.dataSource.data = admins;
      console.log('all-admins', this.dataSource.data);
    });
  }
}
