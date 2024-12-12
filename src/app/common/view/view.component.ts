import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModalService } from '../modal.service';
import { SearchComponent } from '../../pages/search/search.component';
import { NotificationComponent } from '../../pages/notification/notification.component';
import { AddTaskComponent } from '../../pages/add-task/add-task.component';
import { NewProjectComponent } from '../../pages/new-project/new-project.component';
import { DargdropComponent } from '../dargdrop/dargdrop.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterOutlet,NotificationComponent,RouterLink,DargdropComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  constructor(private modalService:ModalService){}

  openSearch(){
    this.modalService.open(SearchComponent)
  }

  newProject(){
    this.modalService.open(NewProjectComponent)
  }

  addTask(){
    this.modalService.open(AddTaskComponent)
  }

  openProject(projectId:string){

  }

}
