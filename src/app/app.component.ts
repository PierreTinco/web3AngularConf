import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  web3 = new Web3('HTTP://127.0.0.1:7545')
  balance1 = this.web3.eth.getBalance('0xEB65d6bC2239Ba9FB6563Ca4Fd78056fbcC864b7')
  balance2 = this.web3.eth.getBalance('0xEB65d6bC2239Ba9FB6563Ca4Fd78056fbcC864b7')
  constructor(private test: TestServiceService) {
    
    
   }
 ngOnInit(): void {
this.balance1.then((res)=>{
  console.log(res)
},err=>console.log(err))
     



     
     
 }
}
