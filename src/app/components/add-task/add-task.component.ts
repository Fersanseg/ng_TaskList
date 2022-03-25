import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;

  text!: string; 
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(val => this.showAddTask = val);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert("Please add text to the task");
      return;
    }
    if(!this.day) {
      alert("Please add a day and time to the task");
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
