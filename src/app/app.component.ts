import { Model, ToDoItem } from './Model/model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  Model= new Model;

  // return user name
  getName()
  {
    return this.Model.user;
  }
  getTodoItmems()
  {
      //return all item
    return this.Model.items;

    //return only items that's done
    //return this.Model.items.filter(item => item.done);

  }
  todoItem(newTask)
  {
    if(newTask !="")
    {
      this.Model.items.push(new ToDoItem (newTask,false));
    }

  }
}
