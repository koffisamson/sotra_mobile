import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'new-item', loadChildren: './pages/new-item/new-item.module#NewItemPageModule' },
  { path: 'update-item/:id', loadChildren: './pages/update-item/update-item.module#UpdateItemPageModule' },
  { path: 'new-item/:id', loadChildren: './pages/new-item/new-item.module#NewItemPageModule' },
  { path: 'carte', loadChildren: './pages/carte/carte.module#CartePageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'aide', loadChildren: './pages/aide/aide.module#AidePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
