import { Component, Input } from '@angular/core';
import { IT } from '../../../core/models/page.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  @Input() persons: IT.Team[] = [];
}
