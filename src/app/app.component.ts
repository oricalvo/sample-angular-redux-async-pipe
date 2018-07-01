import {Component} from '@angular/core';
import {store} from '../appStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  inc() {
    store.dispatch({type: "INC"});
  }

  dec() {
    store.dispatch({type: "DEC"});
  }

  get counter(){
    return store.getState().counter;
  }
}
