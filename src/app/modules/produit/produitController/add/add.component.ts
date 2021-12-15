import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from 'models/product';
import { ProduitService } from '../../produit.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  produit!:product[];
  ProductForm = new FormGroup(
		{
			code : new FormControl('',[Validators.required,Validators.pattern("619+[0-9]{5,8}")]),
			prix_unitaire : new FormControl('',[Validators.required, Validators.min(1), Validators.pattern('^(0|[1-9][0-9]*)$')]),
			name : new FormControl('',Validators.required),
      image: new FormControl('',Validators.required)

		}
		)
    constructor(private service:ProduitService,private router:Router) { }
 
   
  ngOnInit(): void {
    this.service.fetchProduits().subscribe(
      (t)=>{
        this.produit=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  get code() { return this.ProductForm.get('code'); }
  get prix_unitaire() { return this.ProductForm.get('prix_unitaire'); }
  get name() { return this.ProductForm.get('name'); }
  get image() { return this.ProductForm.get('image'); }

  GetMaxId(t:product[])
  {
    let Max= 0; 
    let i = 0; 
    let n = t.length ;
    
    while(i<n)
    { 
      if(t[i].idProduit > Max)
      { 
          Max = t[i].idProduit;
      }
      else
      {i++;}
    }
    console.log("Max : "+Max);
    return Max+Number(1);
  }

  
SaveProduct(data:product){
  alert(JSON.stringify(this.ProductForm.value));

  data.idProduit=this.GetMaxId(this.produit);
  console.log(data.idProduit);
  data.image="assets/"+data.image.substr(12,data.image.length)
  this.service.addProduit(data).subscribe(()=>{},(error)=>{console.log(error);})
  this.router.navigateByUrl("produit/ProduitHome/getParent");
  console.log(data);
}


}
