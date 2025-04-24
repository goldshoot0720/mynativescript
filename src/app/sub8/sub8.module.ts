import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Sub8RoutingModule } from './sub8-routing.module'
import { Sub8Component } from './sub8.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub8RoutingModule],
  declarations: [Sub8Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub8Module {}
