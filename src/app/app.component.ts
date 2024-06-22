import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";
import { Componente02Component } from "./componente02/componente02.component";
import { Componente03Component } from "./componente03/componente03.component";
import { Componente04Component } from "./componente04/componente04.component";
import { Component05Component } from "./component05/component05.component";
import { Component06Component } from "./component06/component06.component";
import { Component07Component } from "./component07/component07.component";
import { Component08Component } from "./component08/component08.component";
import { Component09Component } from "./component09/component09.component";
import { Component10Component } from "./component10/component10.component";
import { Component11Component } from "./component11/component11.component";
import { Component12Component } from "./component12/component12.component";
import { Component13Component } from "./component13/component13.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Componente01Component, Componente02Component, Componente03Component, Componente04Component, Component05Component, Component06Component, Component07Component, Component08Component, Component09Component, Component10Component, Component11Component, Component12Component, Component13Component]
})
export class AppComponent {
  title = 'basic-angular';
}
