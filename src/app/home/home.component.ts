import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';  // Asegúrate de importar el servicio Title

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  
    constructor (private tittleService: Title){
      this.tittleService.setTitle('Jhon Doe - Home')
    }
}
