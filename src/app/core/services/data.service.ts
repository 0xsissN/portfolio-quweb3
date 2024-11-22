import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IT } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  teamUrl: string = 'assets/db/team.json';
  projectUrl: string = 'assets/db/project.json'

  http = inject(HttpClient);
  
  getTeam() {
    return this.http.get<IT.Team[]>(this.teamUrl);
  }

  getProject() {
    return this.http.get<IT.Project[]>(this.projectUrl)
  }
}
