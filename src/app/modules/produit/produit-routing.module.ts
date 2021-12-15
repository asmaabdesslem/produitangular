import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit.component';
import { AddComponent } from './produitController/add/add.component';
import { GetCComponent } from './produitController/get-c/get-c.component';
import { GetPComponent } from './produitController/get-p/get-p.component';
import { GetComponent } from './produitController/get/get.component';
import { GetdetailComponent } from './produitController/getdetail/getdetail.component';
import { UpdateComponent } from './produitController/update/update.component';

const routes: Routes =[{path:'',redirectTo:'ProduitHome',pathMatch:'full'},
  { 
    path: 'ProduitHome', component: ProduitComponent,
    children:[
              {path:"add", component:AddComponent},
              {path:"update/:id", component:UpdateComponent},
              {path:"get", component:GetComponent},
              {path:"getParent", component:GetPComponent},
              {path:"detail/:id", component:GetdetailComponent},
              ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
