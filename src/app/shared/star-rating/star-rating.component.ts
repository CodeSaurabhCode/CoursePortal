import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Initialize to a default value

  // Number of stars to display (customize as per your requirement)
  stars: number[] = [1, 2, 3, 4, 5];

  get fullStars(): number {
    return Math.floor(this.rating);
  }

  get hasHalfStar(): boolean {
    return this.rating - this.fullStars >= 0.5;
  }

  get emptyStars(): number {
    return this.stars.length - this.fullStars - (this.hasHalfStar ? 1 : 0);
  }
}
