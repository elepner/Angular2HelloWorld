import * as ng from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavMenu } from '../nav-menu/nav-menu';
import powelUi = require('powel-powelui');
@ng.Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [...ROUTER_DIRECTIVES, NavMenu]
})
export class App implements ng.OnInit{
    ngOnInit(){
        console.log("Hello");
        console.log(powelUi);
    }
}

