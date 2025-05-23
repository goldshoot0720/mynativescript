import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { Sub4Component } from './sub4.component'

const routes: Routes = [{ path: '', component: Sub4Component }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class Sub4RoutingModule {}
