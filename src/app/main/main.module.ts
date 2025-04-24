import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { MainRoutingModule } from './main-routing.module'
import { MainComponent } from './main.component'

@NgModule({
  imports: [NativeScriptCommonModule, MainRoutingModule],
  declarations: [MainComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MainModule {}
