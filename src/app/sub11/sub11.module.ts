import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Sub11RoutingModule } from './sub11-routing.module'
import { Sub11Component } from './sub11.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub11RoutingModule],
  declarations: [Sub11Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub11Module {}
