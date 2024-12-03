import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
    content:any;
    private dialogComponentRef!: ComponentRef<ModalComponent>;
    constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector
    ) {}

    open(component:any,data?:any){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
       this.dialogComponentRef = componentFactory.create(this.injector);
      this.appRef.attachView(this.dialogComponentRef.hostView);
      const domElem = (this.dialogComponentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);      
      this.dialogComponentRef.instance.open(component, data);
    }

    closeDialog(data?:any) {
      this.appRef.detachView(this.dialogComponentRef.hostView);
      this.dialogComponentRef.destroy();
    }
}
