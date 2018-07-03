import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Input() searchInput: string;
  @Output()
  public searchHandler: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  onSearchPressed(event) {
    this.searchHandler.emit(this.searchInput);
  }

}
