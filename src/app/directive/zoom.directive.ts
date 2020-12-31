import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private element: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.zoom(35);
  }
  @HostListener('mouseout') onMouseLeave(): void {
    this.zoom(30);
  }
  private zoom( size: number ): void{
    this.element.nativeElement.height = size;
    this.element.nativeElement.width = size;

  }
}
