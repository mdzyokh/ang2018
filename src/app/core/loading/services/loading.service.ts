import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DomPortalHost, Portal, ComponentPortal } from '@angular/cdk/portal';
import { LoadingComponent } from '../loading.component';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private portalHost: DomPortalHost;
    private portal: ComponentPortal<LoadingComponent> = new ComponentPortal(LoadingComponent);

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ) { }

    show() {
        if (this.portal.isAttached) {
            return;
        }
        this.portalHost = new DomPortalHost(
            document.querySelector('body'),
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );
        this.portalHost.attach(this.portal);
    }

    hide() {
        this.portalHost.detach();
    }
}