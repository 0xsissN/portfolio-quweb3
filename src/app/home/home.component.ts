import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AboutComponent } from '../shared/components/about/about.component';
import { TeamComponent } from '../shared/components/team/team.component';
import { ProjectComponent } from '../shared/components/project/project.component';

interface Team {
  name: string,
  rol: string,
  image: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AboutComponent, TeamComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  persons: Team[] = []
  
}
