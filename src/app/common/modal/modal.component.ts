import { ApplicationRef, Component, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnDestroy{
  @ViewChild("dialogContent",{static:true,read:ViewContainerRef}) container:ViewContainerRef;
  private componentRef!: ComponentRef<any>;
  backdropClose:boolean=true;
  constructor(private modalService:ModalService){}

  open(component:any,data?:any){
    this.container.clear();
    this.componentRef=this.container.createComponent(component);    
    Object.assign(this.componentRef.instance,data);  
    // this.backdropClose=data.AllowBackDropCLose
  }

  closeDialog(closeData?:any){    
    this.componentRef.destroy();
    this.modalService.closeDialog();
  }
  
  ngOnDestroy(): void {
    this.container.clear();
    console.log("here");
  }
}
