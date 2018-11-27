import { SharedModule } from '../shared/SharedModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a.routing.module';
import { ModuleAComponent } from './module-a.component';

@NgModule({
    imports: [
         ModuleARoutingModule,
         SharedModule
    ],
    exports: [],
    declarations: [
        ModuleAComponent
    ],
    providers: []
})
export class ModuleAModule {
}
