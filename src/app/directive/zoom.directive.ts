import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private element: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.zoom(120);
    this.element.nativeElement.style.backgroundColor = '#e9ecef';
  }
  @HostListener('mouseout') onMouseLeave(): void {
    this.zoom(100);
    this.element.nativeElement.style.backgroundColor = 'white';
  }
  private zoom( size: number ): void{
    this.element.nativeElement.height = size;
    this.element.nativeElement.width = size;

  }
}
