import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]',
})
export class ChangeBackgroundDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseover') onMouseOver(): void {
    this.setBackground('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBackground('');
  }

  setBackground(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
