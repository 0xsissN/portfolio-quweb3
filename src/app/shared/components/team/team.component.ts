import { Component, Input } from '@angular/core';

interface Team {
  name: string,
  rol: string,
  image: string
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  @Input() persons: Team[] = []
}
