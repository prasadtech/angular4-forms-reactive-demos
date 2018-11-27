import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { NgModule,ModuleWithProviders  } from '@angular/core';


@NgModule({
    imports: [ ],
    exports: [],
    declarations: [ ]
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders  {
        return {
          ngModule: SharedModule,
          providers: [ AuthGuard,AuthService ]
        };
      }

}
