import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { Label } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedMenu: string = 'home';
  selectedSubMenu: string | null = null;
  dropdowns: { [key: string]: boolean } = { courses: false };
  courses: string[] = [];
  newCourseName: string = '';
  editCourseName: string = '';
  isModalOpen: boolean = false;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  isAssessmentModalOpen: boolean = false;
  isEditAssessmentModalOpen: boolean = false;
  isDeleteAssessmentModalOpen: boolean = false;
  currentAssessmentType: string = '';
  newAssessmentName: string = '';
  newAssessmentGrade: number | null = null;
  newAssessmentWeight: number | null = null;

  // Chart.js data
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Progress' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Goal' }
  ];

  constructor() {}

  ngOnInit(): void {}

  selectMenu(menu: string) {
    this.selectedMenu = menu;
    this.selectedSubMenu = null;
  }

  toggleDropdown(menu: string) {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  selectSubMenu(subMenu: string) {
    this.selectedSubMenu = subMenu;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addCourse() {
    this.courses.push(this.newCourseName);
    this.newCourseName = '';
    this.closeModal();
  }

  openEditModal(course: string, index: number) {
    this.editCourseName = course;
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  updateCourse() {
    const index = this.courses.indexOf(this.editCourseName);
    if (index !== -1) {
      this.courses[index] = this.editCourseName;
    }
    this.closeEditModal();
  }

  openDeleteModal(index: number) {
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  confirmDelete() {
    this.courses.splice(this.courses.indexOf(this.editCourseName), 1);
    this.closeDeleteModal();
  }

  openAssessmentModal(type: string) {
    this.currentAssessmentType = type;
    this.isAssessmentModalOpen = true;
  }

  closeAssessmentModal() {
    this.isAssessmentModalOpen = false;
  }

  addAssessment() {
    // Logic to add assessment
    this.closeAssessmentModal();
  }

  openEditAssessmentModal(assessment: any, type: string, index: number) {
    this.isEditAssessmentModalOpen = true;
    this.openAssessmentModal(type);
  }

  closeEditAssessmentModal() {
    this.isEditAssessmentModalOpen = false;
  }

  updateAssessment() {
    // Logic to update assessment
    this.closeAssessmentModal();
  }

  openDeleteAssessmentModal(assessment: any, type: string, index: number) {
    this.isDeleteAssessmentModalOpen = true;
  }

  closeDeleteAssessmentModal() {
    this.isDeleteAssessmentModalOpen = false;
  }

  confirmDeleteAssessment() {
    // Logic to delete assessment
    this.closeDeleteAssessmentModal();
  }
}