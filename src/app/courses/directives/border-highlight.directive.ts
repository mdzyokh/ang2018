import {Directive, ElementRef, Renderer2, Input, OnInit} from "@angular/core"

const daysDiff: number = 14 * 24 * 60 * 60 * 1000; // 14 days

@Directive({
    selector: '[borderHighlight]',
})
export class BorderHighlightDirective implements OnInit {
    @Input('borderHighlight') creationDate: Date;

    constructor(private renderer: Renderer2, private element: ElementRef) { }

    ngOnInit() {
        const date = new Date(this.creationDate);
        if (date.getTime() <= Date.now() && date.getTime() >= Date.now() - daysDiff) {
            this.renderer.addClass(this.element.nativeElement, 'green-border');
        } else if (date.getTime() > Date.now()) {
            this.renderer.addClass(this.element.nativeElement, 'blue-border');
        }
    }
}