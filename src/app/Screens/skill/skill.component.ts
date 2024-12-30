import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  //  Properties for content
  sectionTitle = 'Skills';
  sectionSubtitle = 'Building the Future, One Line at a Time.';
  
  skills = [
    { title: 'Bootstrap', description: 'Bootstrap is a front-end framework for creating responsive and mobile-friendly websites.', image: '../../../assets/Image/technology_logo/Bootstraplogo.png' },
    { title: 'Angular', description: 'Angular is a popular open-source web application framework developed by Google.', image: '../../../assets/Image/technology_logo/Angularlogo.png' },
    { title: 'ASP.NET Core', description: 'ASP.NET Core is a cross-platform framework for building modern web applications and services.', image: '../../../assets/Image/technology_logo/Asp.netlogo.png' },
    { title: 'SQL', description: 'Figma is a cloud-based design tool used for creating, prototyping, and collaborating on user interface and user experience designs..', image: '../../../assets/Image/technology_logo/figma.jpg' }
  ];
}
