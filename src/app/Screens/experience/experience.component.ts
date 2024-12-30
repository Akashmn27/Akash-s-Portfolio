import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  // Button text
  downloadButtonText = 'Download CV';

  // Section title and description
  sectionTitle = 'Experience';
  sectionDescription = 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites';

  // Experience entries
  experience1 = {
    year:'June 2023 - Sept 2024',
    company: 'CKS Solutions, Nagercoil',
    title: 'UI Developer ',
    description: 'Experienced in designing and developing responsive websites, ensuring seamless functionality and user engagement. Collaborated with cross-functional teams to streamline the design-to-development process, delivering high-quality web solutions tailored to client needs.'
  };

  experience2 = {
    year:'March 2022 - May 2023',
    company: 'Null Errors, Chennai',
    title: 'UI Developer ',
    description: 'Implemented front-end architecture standards, optimizing code and scalability to improve application performance. Created and maintained reusable components and libraries, enhancing development efficiency and project consistency. Utilized version control systems like Git for seamless collaboration and deployment. Designed and developed responsive web applications with HTML, CSS, JavaScript, and Angular, integrating RESTful APIs to support dynamic data updates and functionality.'
  };

  experience3 = {
    year:'Sept 2021 - Feb 2022',
    company: 'Null Errors, Chennai',
    title: 'UI/UX Developer Intern',
    description: 'During my internship, I worked with HTML, CSS, Bootstrap, and JavaScript to develop interactive, user-centered components. I enhanced my technical skills and deepened my understanding of user-centered design principles through real-world projects. Additionally, I gained hands-on experience in front-end development and responsive design, creating mobile-friendly and user-friendly interfaces.'
  };

  
  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Document/Akash_MN_UI_Developer_Resume.pdf');
    link.setAttribute('download', 'Akash_MN_UI_Developer_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
