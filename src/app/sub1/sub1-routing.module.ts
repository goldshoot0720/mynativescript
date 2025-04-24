import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { Sub1Component } from './sub1.component'

const routes: Routes = [{ path: '', component: Sub1Component }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class Sub1RoutingModule {}
