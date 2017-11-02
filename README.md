# VsoLoader

Very simple loader for Angular 4.
Display it during http request or other time loading.

**Exemple inside a component:**
```
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public loading: boolean
  constructor() {}

  ngOnInit() {
    this.loading = true
    this.httpService.addItem(data).subscribe(
        data => {
            //Do what you want
            this.loading = false
        }, 
        err => {
            // Log errors if any
            console.log(err);
            this.loading = false
        });
}
```

**Then put in your template**

`<app-vso-loader [loading]="loading" spinner="./../img/img.svg" loadingMsg="Chargement..."></app-vso-loader>`

You can pass some config : 

- config : `[config]= {spinnerWidth: '300px', spinnerHeight: 'auto'}`

Don't hesitate to update it !

#vso
