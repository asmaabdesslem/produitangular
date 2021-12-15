import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit.component';
import { AddComponent } from './produitController/add/add.component';
import { UpdateComponent } from './produitController/update/update.component';
import { GetComponent } from './produitController/get/get.component';
import { DeleteComponent } from './produitController/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetCComponent } from './produitController/get-c/get-c.component';
import { GetPComponent } from './produitController/get-p/get-p.component';
import { GetdetailComponent } from './produitController/getdetail/getdetail.component';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    ProduitComponent,
    AddComponent,
    UpdateComponent,
    GetComponent,
    DeleteComponent,
    GetComponent,
    GetCComponent,
    GetPComponent,
    GetdetailComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProduitModule { }
