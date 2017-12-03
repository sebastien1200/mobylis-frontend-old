import { Component } from '@angular/core';
import {SingleRow} from "../shared/single-row";

@Component({
  selector: 'accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.scss']
})
export class AccessoiresComponent {

  rows: SingleRow[] = [
    {
      src: "assets/evoluent.jpg",
      text: "Souris verticales : une position naturelle qui suit votre articulation",

    }
  ];
}
