import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AboutComponent } from '../shared/components/about/about.component';
import { TeamComponent } from '../shared/components/team/team.component';
import { ProjectComponent } from '../shared/components/project/project.component';
import { DataService } from '../core/services/data.service';
import { IT } from '../core/models/page.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AboutComponent, TeamComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  personsData: IT.Team[] = []
  projectsData: IT.Project[] = []

  dataService = inject(DataService)
  
  ngOnInit(){
    this.dataService.getTeam().subscribe((data) => (this.personsData = data))
    this.dataService.getProject().subscribe((data) => (this.projectsData) = data)
  }
}
