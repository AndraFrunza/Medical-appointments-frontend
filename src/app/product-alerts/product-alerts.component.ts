import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../products';

@Component({  //indica ca urmatoarea clasa este o componenta
  selector: 'app-product-alerts', //identifica componenta
  templateUrl: './product-alerts.component.html', //face referire la html
  styleUrls: ['./product-alerts.component.css']  //face referice la css
})
export class ProductAlertsComponent {
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();
}
