import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { QuickPageModule } from '../quickplay/quickplay.module';
import { ProgrammedPlayPageModule } from '../programmed-play/programmed-play.module';
import { HelpPageModule } from '../help/help.module';
import { AboutPageModule } from '../about/about.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    QuickPageModule,
    ProgrammedPlayPageModule,
    HelpPageModule,
    AboutPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
