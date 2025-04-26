import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { Sub1RoutingModule } from './sub1-routing.module'
import { Sub1Component } from './sub1.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub1RoutingModule,NativeScriptFormsModule],
  declarations: [Sub1Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub1Module {}
