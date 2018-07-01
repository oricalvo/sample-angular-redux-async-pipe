import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {state$, store} from '../../appStore';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  counter$;

  constructor() {
    this.counter$ = state$.pipe(map(s => s.counter));
  }

  ngOnInit() {
  }

  get counter(){
    return store.getState().counter;
  }
}
