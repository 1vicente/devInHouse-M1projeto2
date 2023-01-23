import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor (private localstorage: LocalStorageService) { }

  deslogaUser() {
    this.localstorage.deslogarUsuario()
  }
}
