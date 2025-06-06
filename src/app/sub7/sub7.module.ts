import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { Sub7RoutingModule } from './sub7-routing.module'
import { Sub7Component } from './sub7.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub7RoutingModule,NativeScriptFormsModule],
  declarations: [Sub7Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub7Module {}
