import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }
  baseurl=environment.url;
  baseurl2=environment.url2;
  
  fetchProduits():Observable<product[]>
  {
    //return this.http.get<product[]>(this.baseurl2+"Produit");
    return this.http.get<product[]>(this.baseurl2+"retrieve-all-products");
    
  }
  fetchProduitById(id:any):Observable<product>
  {
    //return this.http.get<product>(this.baseurl2+"Produit/"+id);
    return this.http.get<product>(this.baseurl2+id);
  }
 
  addProduit(data:product)
  {
    //return this.http.post(this.baseurl2+"produit",data);
    return this.http.post(this.baseurl2+"addProduct",data);
  }

  
  deleteProduit(id_produit:any){
    console.log(id_produit);
    //return this.http.delete(this.baseurl2+"produit/"+id);
    return this.http.delete(this.baseurl2+"deleteProduct/"+id_produit);

  }
  Updateproduit(data:product):Observable<product>
  {
    //return this.http.put<product>(this.baseurl2+"produit/"+data.id_produit,data);
    return this.http.put<product>(this.baseurl2+"updateProduct/",data,httpOptions);

  }

    
}
