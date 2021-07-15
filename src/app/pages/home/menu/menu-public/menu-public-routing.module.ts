import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDeveloperComponent } from '../menu-developer/menu-developer.component';
import { MenuPublicComponent } from './menu-public.component';

const routes: Routes = [{ path: '', component: MenuPublicComponent },
                        { path: 'Public 1', component: MenuDeveloperComponent},
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPublicRoutingModule { }
