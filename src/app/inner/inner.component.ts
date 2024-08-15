import { Component } from '@angular/core';

@Component({
  selector: 'app-inner',
  standalone: true,
  imports: [],
  templateUrl: './inner.component.html',
  styleUrl: './inner.component.css'
})
export class InnerComponent {
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
