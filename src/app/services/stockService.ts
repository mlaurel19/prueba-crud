import { Injectable, signal } from '@angular/core';
import { Stock } from '../interfaces/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  stockList = signal<Stock[]>([
    { id: 1, name: 'Laptop', cuantity: 5 },
    { id: 2, name: 'Escritorio', cuantity: 10 },
    { id: 3, name: 'Silla', cuantity: 30 },
    { id: 4, name: 'Tintas', cuantity: 2 },
    { id: 5, name: 'Boligrafos', cuantity: 200 }
  ])

  AddStock(stockItem: Stock) {
    this.stockList.update((stockItems) => [...stockItems, stockItem]);
  };
}
