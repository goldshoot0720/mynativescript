import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Sub4RoutingModule } from './sub4-routing.module'
import { Sub4Component } from './sub4.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub4RoutingModule],
  declarations: [Sub4Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub4Module {}
