import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'models/product';
import { ProduitService } from '../../produit.service';

@Component({
  selector: 'app-get-p',
  templateUrl: './get-p.component.html',
  styleUrls: ['./get-p.component.css']
})
export class GetPComponent implements OnInit {
  constructor(private service:ProduitService,private router:Router) { }
  ListProduit !: product[];
  searchValue!:string;

  ngOnInit(): void {
    this.GetAllProduct();

  }
  GetAllProduct()
  {
    console.log("getallProduct");
    this.service.fetchProduits().subscribe(
      (t)=>{
        
        this.ListProduit=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  executes(i:any){
    this.service.deleteProduit(i.id).subscribe(()=>{},(error)=>{console.log(error)});
    console.log("----------------------------")
    this.GetAllProduct();
  }

}
