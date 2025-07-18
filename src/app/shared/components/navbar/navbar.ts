import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [RouterLink, RouterLinkActive],
})
export class Navbar {

  routes = [
    {
      name: 'Pokemons',
      path: 'pokemons/page/1'
    },
    {
      name: 'Pricing',
      path: 'pricing'
    },
    {
      name: 'Contact',
      path: 'contact'
    },
  ]
}
