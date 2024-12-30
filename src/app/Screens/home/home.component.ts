import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title1: string = "Hello I'm Akash.";
  title2: string = "Front-end Developer.";
  description: string = '"I value clarity, creativity, and empathy in design. These principles guide my approach to creating user-centered solutions that are both intuitive and impactful."';
  imageUrl: string = "../../../assets/Image/rajuimage.png";
  altText: string = "A Digital Agency Specialized in AI and Web 3.0";

  typedTitle1: string = "";
  private currentIndex: number = 0;

  constructor() {
    this.typeTitle();
  }

  typeTitle() {
    if (this.currentIndex < this.title1.length) {
      this.typedTitle1 += this.title1.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeTitle(), 100); // Adjust typing speed (in ms) if needed
    }
  }
    // Scroll function to scroll smoothly to the About section
    scrollToAbout() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
