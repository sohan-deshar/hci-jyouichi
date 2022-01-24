import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject, Injector,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CurrentReservationService} from "../../../../services/current-reservation.service";

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
  seatingFor: number = 0;
  selectedFor: number = 0;
  highlight = false;
  public currentReservation: CurrentReservationService;

  constructor(private dialogRef: MatDialogRef<SeatingComponent>,
              private renderer: Renderer2,
              @Inject(MAT_DIALOG_DATA) data: {injector: Injector}) {
    this.currentReservation = data.injector.get(CurrentReservationService);
    this.seatingFor = this.currentReservation.entry.numberOfGuests;
    this.selectedList = [...this.currentReservation.entry.seat];
    if(this.selectedList.length != 0){
      for(const item of this.selectedList){
        if(item.includes('big')){
          this.selectedFor+= 4;
        } else {
          this.selectedFor += 2;
        }
      }
    }
    // console.log(this.selectedList);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.currentReservation.entry.seat = [...this.selectedList];
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

    if(!this.checkIfSeatAvailable(area.title)) {
      // TODO: implement proper logic for this.
      this.renderer.addClass(div,"unavailable");
    }

    if(this.selectedList.includes(area.title)) {
      this.renderer.addClass(div,"selected");
    }
    // console.log(div);
    this.renderer.appendChild(this.container.nativeElement, div);
  }

  checkIfSeatAvailable(id: string) {
    return true;
    return this.currentReservation.entry.seat.includes(id);

  }

  onSave() {
    const tables = this.container.nativeElement.childNodes;
    tables.forEach((table: HTMLAreaElement) => {
      if(table.classList.contains('selected')) {
        this.selectedList.push(table.id);
      }
    })
    this.dialogRef.close(this.selectedList);
  }

  markIfSeatSelected(event: MouseEvent) {
    let target = <HTMLElement> event.target;
    if(target.classList.contains('table') && !target.classList.contains('unavailable')) {
      if(target.classList.contains('selected')) {
        this.renderer.removeClass(target, "selected");

        if(target.id.includes('big')) {
          this.selectedFor -= 4;
        } else {
          this.selectedFor -= 2;
        }

      } else {
        if(this.selectedFor < this.seatingFor) {
          this.renderer.addClass(target, "selected");
          if(target.id.includes('big')) {
            this.selectedFor += 4;
          } else { this.selectedFor += 2; }
        } else {
          this.highlight = true;
          setTimeout(() => {
            this.highlight = false;
          }, 1000);
        }
      }
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
