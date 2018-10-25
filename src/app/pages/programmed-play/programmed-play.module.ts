import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgrammedPlayPage } from './programmed-play.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrammedPlayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgrammedPlayPage]
})
export class ProgrammedPlayPageModule {}
