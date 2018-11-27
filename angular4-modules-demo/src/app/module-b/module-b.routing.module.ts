import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModuleBComponent } from './module-b.component';

const ModuleB_Routes = [
    {
        path: '', 
        component: ModuleBComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ModuleB_Routes)],
    exports: [RouterModule]
})
export class ModuleBRoutingModule { }

