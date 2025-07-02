import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {}

  selectedLang: string = localStorage.getItem('lang') || 'es';

  setLang(lang: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.selectedLang = lang;
      localStorage.setItem('lang', lang);
      this.translate.use(lang); // ✅ Cambia el idioma en tiempo real
    } else {
      // Evitar que se desmarque el único seleccionado
      event.preventDefault();
    }
  }

}
