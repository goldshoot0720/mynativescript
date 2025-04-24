import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Sub10RoutingModule } from './sub10-routing.module'
import { Sub10Component } from './sub10.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub10RoutingModule],
  declarations: [Sub10Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub10Module {}
