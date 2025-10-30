import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-stock-add',
  imports: [],
  templateUrl: './stockAdd.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAdd {
  public stockAddTitle = signal<string>("Agregar stock");

  public name = signal("Gafete");
  public cuantity = signal(10);

  AddStock(){
    console.log('Hola');
  }
}
