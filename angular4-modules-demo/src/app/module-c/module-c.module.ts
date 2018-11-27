import { SharedModule } from '../shared/SharedModule';
import { NgModule } from '@angular/core';

import { ModuleCRoutingModule } from './module-c.routing.module';
import { ModuleCComponent } from './module-c.component';

@NgModule({
    imports: [
        ModuleCRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        ModuleCComponent
    ],
    providers: [],
})
export class ModuleCModule { }
