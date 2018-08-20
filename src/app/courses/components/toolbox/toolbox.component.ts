import { Component,  OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  public searchInput = new BehaviorSubject<string>('');
  @Output()
  public searchEmitter = new EventEmitter<string>();

  constructor(public router: Router) { }

  ngOnInit() {
    this.searchInput
    .pipe(debounceTime(400))
    .subscribe((value) => {
      if (value && value.length > 2){
        this.searchEmitter.emit(value);
      } else {
        this.searchEmitter.emit('');
      }
    })
  }

  public navigateToAddCoursePage() {
    this.router.navigate(['courses', 'new']);
  }
}
