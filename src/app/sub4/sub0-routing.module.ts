import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { Sub0Component } from './sub0.component'

const routes: Routes = [{ path: '', component: Sub0Component }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class Sub0RoutingModule {}
