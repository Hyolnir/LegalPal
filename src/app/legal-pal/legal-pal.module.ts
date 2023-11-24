import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalPalPageRoutingModule } from './legal-pal-routing.module';

import { LegalPalPage } from './legal-pal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalPalPageRoutingModule
  ],
  declarations: [LegalPalPage]
})
export class LegalPalPageModule {}
