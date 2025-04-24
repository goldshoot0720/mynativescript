import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('~/app/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'sub0',
    loadChildren: () => import('~/app/sub0/sub0.module').then((m) => m.Sub0Module),
  },
  {
    path: 'sub1',
    loadChildren: () => import('~/app/sub1/sub1.module').then((m) => m.Sub1Module),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
