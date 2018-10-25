import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { QuickplayPage } from '../quickplay/quickplay.page';
import { AboutPage } from '../about/about.page';
import { HelpPage } from '../help/help.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(quickplay:quickplay)',
        pathMatch: 'full',
      },
      {
        path: 'quickplay',
        outlet: 'quickplay',
        component: QuickplayPage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'help',
        outlet: 'help',
        component: HelpPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(quickplay:quickplay)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
