import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() loading: boolean
  @Input() spinner: string
  @Input() loadingMsg?: string
  @Input() config: Object
  public loaderConfig: Object

  constructor() {}

  ngOnInit() {
    this.loaderConfig = Object.assign({
      spinnerWidth: "100px",
      spinnerHeight: 'auto'
    }, this.config)
  }

}
