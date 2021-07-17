import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'warning-alert',
    template: `
        <h3>This is a warning alert!</h3>
    `,
    styles: [`
        h3 {
            background-color: red;
            color: white;
        }
    `]
})
export class WarningAlertComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }