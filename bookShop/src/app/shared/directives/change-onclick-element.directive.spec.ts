import { ChangeOnclickElementDirective } from './change-onclick-element.directive';

describe('ChangeOnclickElementDirective', () => {
  it('should create an instance', () => {
    let a: any;
    const directive = new ChangeOnclickElementDirective(a, a);
    expect(directive).toBeTruthy();
  });
});
