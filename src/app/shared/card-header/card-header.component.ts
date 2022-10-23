import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent implements OnInit {

  @Input() header:any= {}

  @Output() clickBtn1 = new EventEmitter<string>();
  @Output() clickBtn2 = new EventEmitter<string>();
  @Output() clickBtn3 = new EventEmitter<string>();

  constructor() { }

  existsLinks = (typeof this.header.links != undefined);

  ngOnInit(): void {
    console.log("HEADER: ", this.header)
  }


  returnEmit(option: any) {

    console.log("OPCION: ", option)
    switch (option) {
      case 'Btn1':
        this.clickBtn1.emit()
        break;
      case 'Btn2':
        this.clickBtn2.emit()
        break;
      default:
        this.clickBtn3.emit();
    }
  }

}
