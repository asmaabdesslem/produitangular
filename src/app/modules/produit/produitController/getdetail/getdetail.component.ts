import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'models/product';
import { ProduitService } from '../../produit.service';

@Component({
  selector: 'app-getdetail',
  templateUrl: './getdetail.component.html',
  styleUrls: ['./getdetail.component.css']
})
export class GetdetailComponent implements OnInit {

  id!:number;
  produit !:product;
  isLoading = true;
  @ViewChild('content') content!: ElementRef;  


 
  constructor(private route:ActivatedRoute, private service:ProduitService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.GetAllProduit();
  }
  GetAllProduit(){
    this.service.fetchProduitById(this.id).subscribe((res:any)=>{
      console.log(res);
  
      this.produit = res;
  
      this.isLoading = false;
      
    },
    (error)=>{
      console.log(error)
    
    });
  }
   
    Delete(id:number)
    {
      this.service.deleteProduit(id).subscribe(()=>{},(error)=>{console.log(error)});
      console.log("----------------------------")
      this.router.navigateByUrl('/produit/ProduitHome/getParent');
    }
    Update(id:number)
    {
      this.router.navigate(['/produit/ProduitHome/update/',id])
    }
    
   
  
  
  }

