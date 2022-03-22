import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.deleteTask.emit();
  }

}
