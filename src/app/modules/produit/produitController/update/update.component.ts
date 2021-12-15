import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'models/product';
import { ProduitService } from '../../produit.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private ac:ActivatedRoute,private service:ProduitService,private router:Router) { }

  produit = new product();
  id=this.ac.snapshot.params.id;

  ngOnInit(): void {
    this.getproduit();

  }
  getproduit()
  {
    this.service.fetchProduitById(this.id).subscribe(
      (res:product)=>
      {
        this.produit=res;
        console.log(res.idProduit)
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  Updateproduit(data:product){
    data.image="assets/"+data.image.substr(12,data.image.length)
    data.idProduit=this.id;
    this.service.Updateproduit(data).subscribe(()=>{},(error)=>{console.log(error);})
    this.router.navigateByUrl("produit/ProduitHome/detail/"+this.id);
    
  }
  
}
