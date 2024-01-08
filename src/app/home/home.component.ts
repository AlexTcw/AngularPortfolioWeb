import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; // Asegúrate de importar el servicio Title
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;

  constructor(
    private tittleService: Title,
    private projectService: ProjectsService
  ) {
    this.tittleService.setTitle('Jhon Doe - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(0);
  }
}
