import { SharedModule } from '../shared/SharedModule';
import { NgModule } from '@angular/core';

import { ModuleBRoutingModule } from './module-b.routing.module';
import { ModuleBComponent } from './module-b.component';

@NgModule({
    imports: [
        ModuleBRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        ModuleBComponent
    ],
    providers: [],
})
export class ModuleBModule { }
