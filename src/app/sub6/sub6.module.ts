import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { Sub6RoutingModule } from './sub6-routing.module'
import { Sub6Component } from './sub6.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub6RoutingModule,NativeScriptFormsModule],
  declarations: [Sub6Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub6Module {}
