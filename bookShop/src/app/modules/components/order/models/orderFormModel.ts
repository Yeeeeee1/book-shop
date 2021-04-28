import { FormGroup } from '@angular/forms';

interface ValueObj {
  name: string;
  email: string;
  address: string;
  comment: string;
  buyWay: string;
}

export interface IOrderForm extends FormGroup {
  value: ValueObj;
}
