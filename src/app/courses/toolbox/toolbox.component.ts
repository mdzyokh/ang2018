import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Input() searchInput: string;

  searchHandler(e) {
    console.log(`Searching for: ${e}...`);
  }

  constructor() { }

  ngOnInit() {
  }

}
