import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-temporal",
  templateUrl: "./temporal.component.html",
  styleUrls: ["./temporal.component.css"]
})
export class TemporalComponent implements OnInit {
  constructor() {}

  isDos = false;

  ngOnInit() {}

  ToggleMenu() {
    this.isDos = !this.isDos;
  }
}
