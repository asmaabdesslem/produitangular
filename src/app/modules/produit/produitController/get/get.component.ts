import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'models/product';
import { ProduitService } from '../../produit.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private service:ProduitService,private router:Router) { }
  ListProduit !: product[];
 
 
  ngOnInit(): void {
    this.GetAllProduit();
  }
  GetAllProduit()
  {console.log("getallProduits");
    this.service.fetchProduits().subscribe(
      (t)=>{
        console.log(t);
        
        this.ListProduit=t;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  Delete(id:number)
  {
    this.service.deleteProduit(id).subscribe(()=>{},(error)=>{console.log(error)});
    console.log("----------------------------")
    this.GetAllProduit();
  }
  UpdateUser(id:number)
  {
    this.router.navigate(['upProduit/ProduitHome/update',id])
  }

}
