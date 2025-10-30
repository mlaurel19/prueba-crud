import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StockAdd } from '../../components/stockAdd/stockAdd';
import { StockList } from '../../components/stockList/stockList';

@Component({
  selector: 'app-stock',
  imports: [StockAdd],
  templateUrl: './stock.html',
})
export default class Stock { }
