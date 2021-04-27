import { FormGroup } from '@angular/forms';

interface valueObj {
  name: string;
  email: string;
  address: string;
  comment: string;
  buyWay: string;
}

export interface IOrderForm extends FormGroup {
  value: valueObj;
}
