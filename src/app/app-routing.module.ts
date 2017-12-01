import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterPageComponent } from './mater-page/mater-page.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'mater',
    component: MaterPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }