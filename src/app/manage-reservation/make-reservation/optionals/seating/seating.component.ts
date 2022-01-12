import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeatingComponent implements OnInit, AfterViewInit {

  @ViewChild('map', {static: false}) map!: ElementRef;
  @ViewChild('container', {static: false}) container!: ElementRef;

  selectedList: string[] = [];

  constructor(private dialogRef: MatDialogRef<SeatingComponent>,
              private renderer: Renderer2,
              @Inject(MAT_DIALOG_DATA) data: Inject) { }

  ngOnInit(): void {
    // console.log(this.map);

    // tables.forEach(table => {
    //   this.createDiv(table)
    // })
  }

  ngAfterViewInit() {
    const tables = this.map.nativeElement.childNodes;
    tables.forEach((table: HTMLAreaElement) => {
      this.createDiv(table)
    })
  }

  createDiv(area: HTMLAreaElement) {
    const coords = area.coords.split(',');
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'table');
    this.renderer.setStyle(this.container.nativeElement, "position", "relative");
    this.renderer.setProperty(div, "id", area.title);
    this.renderer.setStyle(div, "top", `${coords[1]}px`);
    this.renderer.setStyle(div, "left", `${coords[0]}px`);
    this.renderer.setStyle(div, "width", `${+coords[2] - +coords[0]}px`);
    this.renderer.setStyle(div, "height", `${+coords[3] - +coords[1]}px`);
    // this.renderer.setStyle(div, "background-color", "red");
    this.renderer.setStyle(div, "position", "absolute");
    this.renderer.setStyle(div, "z-index", "1");
    if(Math.random() > 0.5) {
      console.log("unavailable added");
      this.renderer.addClass(div,"unavailable");
    }
    // console.log(div);
    this.renderer.appendChild(this.container.nativeElement, div);
  }

  closeDialog() {
    const tables = this.container.nativeElement.childNodes;
    tables.forEach((table: HTMLAreaElement) => {
      if(table.classList.contains('selected')) {
        this.selectedList.push(table.id);
        console.log(table.id);
      }
    })
    console.log(this.selectedList);
    this.dialogRef.close(this.selectedList);
  }

  markIfSeatSelected(event: MouseEvent) {
    console.log(event);
    let target = <HTMLElement> event.target;
    if(target.classList.contains('table') && !target.classList.contains('unavailable')) {
      if(target.classList.contains('selected')) {
        this.renderer.removeClass(target, "selected");
      } else {
        this.renderer.addClass(target, "selected");
      }
    }
  }
}
