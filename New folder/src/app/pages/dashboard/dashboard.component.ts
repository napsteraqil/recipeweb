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
    
  }

  setMargin(index) {
    if (index > 7) {
      
      return false;
    } else if (index > 4 && index % 2 !== 0) {
      
      return true;
    } else {
      return false;
    }
  }
  changeCard(index) {
    
    if (index % 4 === 0) {
      this.cardDisplay = this.cardDisplay;
    } else {
      
      this.cardDisplay = !this.cardDisplay;
    }
  }
}
