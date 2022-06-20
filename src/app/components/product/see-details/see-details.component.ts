import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-see-details',
  templateUrl: './see-details.component.html',
  styleUrls: ['./see-details.component.css']
})
export class SeeDetailsComponent implements OnInit {
  @Input() description: any;
  @Input() amount: any;
  @Input() title: any;
  constructor() { }

  ngOnInit(): void {
  }

}
