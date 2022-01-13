import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  subjects = ['Food', 'Service', 'Website', 'Other'];
  blackStar = 'assets/imgs/black_star.png';
  yellowStar = 'assets/imgs/yellow_star.png';
  source = [this.yellowStar, this.blackStar, this.blackStar, this.blackStar, this.blackStar];
  currentSubject = "food";
  numberOfStars = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  selectSubject(subject: string) {
    this.currentSubject = subject;
  }


  selectStar(number: number) {
    this.numberOfStars = number;
    for(let i = 0; i < number; i++){
      this.source[i] = this.yellowStar;
    }
    for(let i = number; i < 5; i++){
      this.source[i] = this.blackStar;
    }
  }

  sendFeedBack() {
    this.router.navigate(['/']);
  }
}
