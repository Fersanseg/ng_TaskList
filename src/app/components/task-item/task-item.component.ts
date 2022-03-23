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
  @Output() toggleReminder = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(task: Task) {
    this.deleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.toggleReminder.emit(task);
  }

}
