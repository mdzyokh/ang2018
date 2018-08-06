import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Input() searchInput: string;
  @Output()
  public searchHandler: EventEmitter<string> = new EventEmitter<string>();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSearchPressed(event) {
    this.searchHandler.emit(this.searchInput);
  }

  public navigateToAddCoursePage() {
    this.router.navigate(['courses', 'new']);
  }

}
