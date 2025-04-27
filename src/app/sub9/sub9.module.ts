import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { Sub9RoutingModule } from './sub9-routing.module'
import { Sub9Component } from './sub9.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub9RoutingModule,NativeScriptFormsModule],
  declarations: [Sub9Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub9Module {}
