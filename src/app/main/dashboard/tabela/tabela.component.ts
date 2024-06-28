import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [
    TableModule,
    CommonModule
  ],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss'
})
export class TabelaComponent {
  products: Object[] = [
    {
      "id": "1007",
      "code": "b567fh0z9",
      "name": "Oak Sunglasses",
      "description": "Stylish and eco-friendly sunglasses",
      "image": "oak-sunglasses.jpg",
      "price": 120,
      "category": "Accessories",
      "quantity": 15,
      "inventoryStatus": "OUTOFSTOCK",
      "rating": 4
    },
    {
      "id": "1012",
      "code": "c891ab1x5",
      "name": "Maple Wallet",
      "description": "Elegant and durable wallet",
      "image": "maple-wallet.jpg",
      "price": 45,
      "category": "Accessories",
      "quantity": 30,
      "inventoryStatus": "INSTOCK",
      "rating": 3
    },
    {
      "id": "1023",
      "code": "d342ij4y2",
      "name": "Birch Bag",
      "description": "Spacious and fashionable bag",
      "image": "birch-bag.jpg",
      "price": 80,
      "category": "Accessories",
      "quantity": 10,
      "inventoryStatus": "LOWSTOCK",
      "rating": 5
    },
    {
      "id": "1045",
      "code": "e876kl2m8",
      "name": "Pine Hat",
      "description": "Comfortable and stylish hat",
      "image": "pine-hat.jpg",
      "price": 35,
      "category": "Accessories",
      "quantity": 22,
      "inventoryStatus": "INSTOCK",
      "rating": 4
    }

  ];
}
