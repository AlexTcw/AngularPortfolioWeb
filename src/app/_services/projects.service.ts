import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';


@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Parking system',
      pictures: ['assets/img/projects/fsParking.jpg', 'assets/img/projects/fs2.jpg', 'assets/img/projects/fs3.jpg'],
      projectLink: 'https://github.com/AlexTcw/FSFingerprintParkingSystem',
      summary: 'projects.parking.summary',
      description: 'projects.parking.description',
      tags: [Tag.JAVA,Tag.ANGULAR,Tag.MYSQL,Tag.TYPESCRIPT,Tag.SPRINGBOOT],
    },

    {
      id: 1,
      name: 'e-shop Angular App',
      pictures: ['assets/img/projects/ecommercefront.jpg', 'assets/img/projects/ecommercefront-1.jpg', 'assets/img/projects/ecommercefront-2.jpg'],
      projectLink: 'https://github.com/AlexTcw/Tienda_front.git',
      summary: 'projects.eshop.angular.summary',
      description: 'projects.eshop.angular.description',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 2,
      name: 'e-shop Springboot App',
      pictures: ['assets/img/projects/ecommerceback.jpg', 'assets/img/projects/ecommerceback-1.jpg', 'assets/img/projects/ecommerceback-2.jpg'],
      projectLink: 'https://github.com/AlexTcw/Tienda_back',
      summary: 'projects.eshop.spring.summary',
      description: 'projects.eshop.spring.description',
      tags: [Tag.SPRINGBOOT, Tag.POSTGRESQL, Tag.JAVA],
    },
    {
      id: 3,
      name: 'API Gateway with Spring Cloud Gateway and Spring Security',
      pictures: ['assets/img/projects/api-gw.jpg', 'assets/img/projects/api-gw-1.jpg', 'assets/img/projects/api-gw-2.jpg'],
      projectLink: 'https://github.com/AlexTcw/ApiGateway-SS.git',
      summary: 'projects.api-gw.summary',
      description: 'projects.api-gw.description',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.MYSQL],
    },
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTags) {
        if (project.tags.includes(filterTags) == false) {
          foundAll = false;
        }
      });
      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
