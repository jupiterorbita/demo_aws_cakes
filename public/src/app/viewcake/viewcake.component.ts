import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-viewcake',
  templateUrl: './viewcake.component.html',
  styleUrls: ['./viewcake.component.css']
})
export class ViewcakeComponent implements OnInit {
  avg_rate: any;
  @Input() oneCake;
  // @Input() avg;
  constructor() { }

  ngOnInit() {
    this.avg();
  }

  avg() {
    let obj = this.oneCake;
    console.log('obj ==============>', obj.rating[0].rating);
    let x = 0;
    for (let i = 0; i < obj.rating.length; i++ ) {
      x += obj.rating[i].rating;
      console.log('sum x =>', x);
      console.log('i =>', i);
    }
    this.avg_rate = x / obj.rating.length;
    console.log('^ ^ ^ ^ AVG =>', this.avg_rate);
  }

}
