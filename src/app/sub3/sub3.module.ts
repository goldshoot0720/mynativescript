import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Sub3RoutingModule } from './sub3-routing.module'
import { Sub3Component } from './sub3.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub3RoutingModule],
  declarations: [Sub3Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub3Module {}
