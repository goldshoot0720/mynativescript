import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Sub5RoutingModule } from './sub5-routing.module'
import { Sub5Component } from './sub5.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub5RoutingModule],
  declarations: [Sub5Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub5Module {}
