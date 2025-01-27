import { Component } from '@angular/core';
import { InnerComponent } from './inner/inner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  getTimeClassic() {
    return new Date().toString();
  }

  getTimeArrow = () => {
    return new Date().toString();
  };

  getTimeArrowImplicit = () => new Date().toString();

  clickedClassic() { }

  clickedArrow = () => { };
}
