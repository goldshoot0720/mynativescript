import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Sub0RoutingModule } from './sub0-routing.module'
import { Sub0Component } from './sub0.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub0RoutingModule],
  declarations: [Sub0Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub0Module {}
