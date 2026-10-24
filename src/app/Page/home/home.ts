import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  Number:number = 0;

  addnumber(values:string){
    if(values === 'add'){
      this.Number++;
    }else{
      this.Number > 0 && this.Number--
    }
  }

  reset(){
    this.Number = 0;
  }
}
