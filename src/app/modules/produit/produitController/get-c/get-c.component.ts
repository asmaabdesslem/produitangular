import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'models/product';
import { ProduitService } from '../../produit.service';
import { GetPComponent } from '../get-p/get-p.component';

@Component({
  selector: 'app-get-c',
  templateUrl: './get-c.component.html',
  styleUrls: ['./get-c.component.css']
})
export class GetCComponent implements OnInit {

  @Input() produit!:product;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>();
  @ViewChild(GetPComponent) c!:GetCComponent;
  
    constructor(private service:ProduitService,private router:Router) { }
  
  ngOnInit(): void {
    console.log("get c comp :")
    console.log(this.produit)
    console.log(this.produit.idProduit)
  }
  Delete()
  {
    this.notif.emit(this.produit);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['Produit/ProduitHome/update',id])
  }
}
