import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModuleCComponent } from './module-c.component';

const ModuleC_Routes = [
    {
        path: '', 
        component: ModuleCComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ModuleC_Routes)],
    exports: [RouterModule]
})
export class ModuleCRoutingModule { }

