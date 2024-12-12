import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  CdkDragPlaceholder,
} from '@angular/cdk/drag-drop';
import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag,CdkDragPlaceholder],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit{
  projects:any;
  constructor(private projectService:ProjectService){
  }
  ngOnInit(): void {
    this.projects=this.projectService.getProjects()
    console.log(this.projects);
    
  }

  drop(event: CdkDragDrop<string[]>) {
    event.item.element.nativeElement.style.zIndex="1000";
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
