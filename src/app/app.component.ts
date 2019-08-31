import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  peso=50;
  altura=1.75;
  

  IMC() :void{ 
    let imc = this.peso/(this.altura*this.altura);
    alert(imc);
  }

}
