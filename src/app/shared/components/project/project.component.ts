import { Component, Input } from '@angular/core';
import { IT } from '../../../core/models/page.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() projects: IT.Project[] = []
}
