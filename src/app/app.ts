import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {Nav} from "./nav/nav";
import {Footer} from "./footer/footer";

@Component({
  imports: [RouterOutlet,RouterLink,Nav,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('saad');
}
