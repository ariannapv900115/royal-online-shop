import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss'],
})
export class InputMessageComponent implements OnInit {
  @Input() errorText: string;

  constructor() {
    this.errorText = '';
  }

  ngOnInit(): void {}
}
