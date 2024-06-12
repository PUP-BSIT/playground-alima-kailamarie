// dashboard.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Properties
  selectedMenu: string | null = null;
  selectedSubMenu: string | null = null;
  dropdowns: { [key: string]: boolean } = {
    'courses': false,
    'grade-entry': false
  };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Methods
  selectMenu(menu: string): void {
    this.selectedMenu = menu;
    this.selectedSubMenu = null;
  }

  toggleDropdown(dropdown: string): void {
    this.dropdowns[dropdown] = !this.dropdowns[dropdown];
  }

  selectSubMenu(submenu: string): void {
    this.selectedSubMenu = submenu;
  }

  // Other methods as needed for functionality
}
