import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-fb-button',
  templateUrl: './fb-button.component.html',
  styleUrls: ['./fb-button.component.css']
})
export class FbButtonComponent implements OnInit {

  @Output() buttonClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

}
