import { Component } from '@angular/core';
import {Row} from "../shared";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  rows: Row[] = [
  {
    srcLeft: "assets/desk-position.jpg",
    textRight: "Ergo conception des postes de travail pour les entreprises",

    srcRight: "/assets/sofi-mesh-banner.jpg",
    textLeft: "Une large gamme de sièges de bureau ergonomique ",

  },
  {
    srcLeft: "/assets/table-ergo-technik.jpg",
    textRight: "Du mobilier adapté aux personnes à mobilité réduite",

    srcRight: "/assets/HAG-Futu-8.jpg",
    textLeft: "Du mobilier d'entreprise de fabrication française et européenne ",

  }
];

}
