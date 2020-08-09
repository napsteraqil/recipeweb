import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.scss']
})
export class LongCardComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit(): void {
    
  }

  getImageUrl() {
    return 'url(' + this.item.image + ')';
  }

}
