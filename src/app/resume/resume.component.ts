import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  isWorkExperienceOpen = false;
  isEducationOpen = false;
  isCertificationsOpen = false;
  isSkillsOpen = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('AlexTcw - Resume');
  }

  DownloadFile() {
    const lang = localStorage.getItem('lang');
    const filename = lang === 'en' ? 'CV_en.pdf' : 'CV_es.pdf';
    const filepath = `assets/files/${filename}`;

    const link = this.renderer.createElement('a');
    this.renderer.setAttribute(link, 'href', filepath);
    this.renderer.setAttribute(link, 'download', filename);
    this.renderer.setAttribute(link, 'type', 'application/pdf');
    this.renderer.setStyle(link, 'display', 'none');

    this.renderer.appendChild(document.body, link);
    link.click();
    this.renderer.removeChild(document.body, link);
  }
}
