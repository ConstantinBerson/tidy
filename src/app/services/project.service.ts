import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects=[
    {
      sectionLabel:"To Do",
      tasks:[
        {
          label:"Design Tidy",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },
        {
          label:"Create migration",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },{
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        }
      ]
    },
    {
      sectionLabel:"In progress",
      tasks:[
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },{
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        }
      ]
    },
    {
      sectionLabel:"Review",
      tasks:[
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },
        {
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        },{
          label:"Set final deadline",
          priority:"High",
          group:"Group",
          tag:"Tag",
          dueDate:"05 Dec 2024 - 14h20",
          status:"Status"
        }
      ]
    },
    {
      sectionLabel:"To Test",
      tasks:[
      ]
    },
    {
      sectionLabel:"Validated",
      tasks:[
      ]
    }
  ]
  constructor() { }

  getProjects(){
    return this.projects;
  }
}
