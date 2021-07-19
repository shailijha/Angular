import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'server',
    templateUrl: './server.component.html',
    styles: [
        `
            .online {
                color: white;
            }
        `
    ]
})
export class ServerComponent {
    id: number = 30;
    status: string = Math.random() > 0.5 ? 'online' : 'offline';

    getColor() {
        return this.status === 'online' ? 'green' : 'red';
    }
}   