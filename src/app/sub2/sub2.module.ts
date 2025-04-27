import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { Sub2RoutingModule } from './sub2-routing.module'
import { Sub2Component } from './sub2.component'

@NgModule({
  imports: [NativeScriptCommonModule, Sub2RoutingModule,NativeScriptFormsModule],
  declarations: [Sub2Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Sub2Module {}
