import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeOnclickElement]',
})
export class ChangeOnclickElementDirective {
  @Input()
  color!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick(): void {
    this.setBorder(this.color);
    this.setFontSize();
  }

  setBorder(color: string): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      `2px solid ${color}`
    );
  }

  setFontSize(): void {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '15px');
  }
}
