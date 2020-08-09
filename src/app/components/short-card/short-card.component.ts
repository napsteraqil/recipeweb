import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss']
})
export class ShortCardComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

  getImageUrl() {
    return 'url(' + this.item.image + ')';
  }

}
