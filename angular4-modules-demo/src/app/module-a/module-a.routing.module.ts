import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModuleAComponent } from './module-a.component';

const ModuleA_Routes = [
    {
        path: '',
        component: ModuleAComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ModuleA_Routes)],
    exports: [RouterModule]
})
export class ModuleARoutingModule { }

