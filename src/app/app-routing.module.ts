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
  {
    path: 'sub2',
    loadChildren: () => import('~/app/sub2/sub2.module').then((m) => m.Sub2Module),
  },
  {
    path: 'sub3',
    loadChildren: () => import('~/app/sub3/sub3.module').then((m) => m.Sub3Module),
  },
  {
    path: 'sub4',
    loadChildren: () => import('~/app/sub4/sub4.module').then((m) => m.Sub4Module),
  },
  {
    path: 'sub5',
    loadChildren: () => import('~/app/sub5/sub5.module').then((m) => m.Sub5Module),
  },
  {
    path: 'sub6',
    loadChildren: () => import('~/app/sub6/sub6.module').then((m) => m.Sub6Module),
  },
  {
    path: 'sub7',
    loadChildren: () => import('~/app/sub7/sub7.module').then((m) => m.Sub7Module),
  },
  {
    path: 'sub8',
    loadChildren: () => import('~/app/sub8/sub8.module').then((m) => m.Sub8Module),
  },
  {
    path: 'sub9',
    loadChildren: () => import('~/app/sub9/sub9.module').then((m) => m.Sub9Module),
  },
  {
    path: 'sub10',
    loadChildren: () => import('~/app/sub10/sub10.module').then((m) => m.Sub10Module),
  },
  {
    path: 'sub11',
    loadChildren: () => import('~/app/sub11/sub11.module').then((m) => m.Sub11Module),
  },
  {
    path: 'sub12',
    loadChildren: () => import('~/app/sub12/sub12.module').then((m) => m.Sub12Module),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
