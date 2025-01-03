import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css'
})
export class ProjectSectionComponent {
// Data for the header section
headerTitle: string = "Our Projects";
headerSubtitle: string = "Empowering Innovation,Inspiring Futures,Together I have Achieve More.";

// Data for the project cards
projects = [
  {
    icon: 'bi bi-eyeglasses',
    title: 'CKS SITE',
    description: 'A job portal connects job seekers with employers by allowing users to search and apply for jobs and find candidates. It streamlines the job search and hiring process with filters for location, industry, and job type.',
    link: 'https://cks.ckssolutions.co.in/' 
  },
  {
    icon: 'bi bi-eyeglasses',
    title: 'CAREERIN',
    description: 'A course purchase website lets users browse, buy, and access online courses in various subjects. It provides course details and pricing, giving users instant access to learning materials after purchase.',
    link: 'https://careerin.co.in/'
  },
  {
    icon: 'bi bi-eyeglasses',
    title: 'HARMONYNEST',
    description: 'An online exam portal allows administrators to assign exams, students to attend them online, and view instant results. It streamlines scheduling, question management, and automated grading for efficient assessments.',
    link: 'https://harmonynest.academy/event' 
  },
  // Add more projects as needed
];
}
