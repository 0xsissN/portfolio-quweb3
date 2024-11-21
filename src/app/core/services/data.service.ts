import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface Team {
  name: string;
  rol: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  teamUrl: string = 'assets/db/team.json';

  http = inject(HttpClient);
  getTeam() {
    return this.http.get<Team[]>(this.teamUrl);
  }
}
