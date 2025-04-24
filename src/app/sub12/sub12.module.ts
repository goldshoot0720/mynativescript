import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Sub12RoutingModule } from './sub12-routing.module'
import { Sub12Component } from './sub12.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub12RoutingModule],
  declarations: [Sub12Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub12Module {}
