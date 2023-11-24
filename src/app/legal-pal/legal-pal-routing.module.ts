import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalPalPage } from './legal-pal.page';

const routes: Routes = [
  {
    path: '',
    component: LegalPalPage
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalPalPageRoutingModule {}
