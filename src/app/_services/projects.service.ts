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
      pictures: ['assets/fsParking.jpg', 'assets/fs2.jpg', 'assets/fs3.jpg'],
      projectLink: 'https://github.com/AlexTcw/FSFingerprintParkingSystem',
      summary: 'Full-stack web application developed using Spring Boot for the backend and Angular for the frontend.',
      description:
        'A comprehensive fullstack parking management system utilizing fingerprint authentication. This project leverages Docker, MySQL, Spring Boot, and Angular to provide a seamless and efficient solution for managing parking spaces with enhanced security.',
      tags: [Tag.JAVA,Tag.ANGULAR,Tag.MYSQL,Tag.TYPESCRIPT,Tag.SPRINGBOOT],
    },

    {
      id: 1,
      name: 'e-shop Angular App',
      pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'],
      projectLink: 'https://github.com/AlexTcw/Tienda_front.git',
      summary: 'Angular admin panel for managing products, orders, and users in an e-commerce app.',
      description:
        'Angular-based admin dashboard for managing eShop operations, including product catalog, orders, users, inventory, and promotions. Designed with responsive UI and real-time data handling for an efficient administrative experience.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 2,
      name: 'e-shop Springboot App',
      pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'],
      projectLink: 'https://github.com/AlexTcw/Tienda_back',
      summary: 'Spring Boot backend for managing e-commerce data and user operations.',
      description:
        'RESTful API built with Spring Boot to manage products, orders, users, and payments for an e-commerce platform.',
      tags: [Tag.SPRINGBOOT, Tag.POSTGRESQL, Tag.JAVA],
    },
    {
      id: 3,
      name: 'Web API Project',
      pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'],
      projectLink: '//www.github.com',
      summary: 'Web API Project that was developed for a class project.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.CSHARP, Tag.ASPNET],
    },
    {
      id: 4,
      name: 'Chrome Extension',
      pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'],
      projectLink: '//www.github.com',
      summary:
        'Developed a chrome extension that tracks the prices of furniture.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.JAVASCRIPT],
    },
    {
      id: 5,
      name: 'Mobile App',
      pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'],
      projectLink: '//www.github.com',
      summary:
        'Mobile app developed in java that tracks the departure and arrival of trains.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.JAVA],
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
