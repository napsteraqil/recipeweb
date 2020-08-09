import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  foodItems;
  cardDisplay = false;
  longCard = true;
  shortCard = false;
  useTopMargin = false;
  changeText;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData().subscribe((data) => {
      this.foodItems = data;
    });
  }

  showHover() {
    console.log('GGGG');
  }

  setMargin(index) {
    if (index > 7) {
      console.log('greater Index');
      return false;
    } else if (index > 4 && index % 2 !== 0) {
      console.log('greater Index');
      return true;
    } else {
      return false;
    }
  }
  changeCard(index) {
    console.log(index);
    if (index % 4 === 0) {
      this.cardDisplay = this.cardDisplay;
    } else {
      console.log(index);
      this.cardDisplay = !this.cardDisplay;
    }
  }
}
