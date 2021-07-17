import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'server',
    templateUrl: './server.component.html',
    styles: [`
        p {
            background-color:black;
            color:white;
        }
    `]
})
export class ServerComponent {
    id: number = 30;
    status: string = 'online';
}   