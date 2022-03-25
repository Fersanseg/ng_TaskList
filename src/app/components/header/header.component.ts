import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(val => this.showAddTask = val);
  }

  ngOnInit(): void { // Si quiero código que se ejecute cuando el componente cargue, se pondría aquí.
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
