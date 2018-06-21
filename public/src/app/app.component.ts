import { CakeService } from './cake.service';
import { RateService} from './rate.service';
import { Component, OnInit } from '@angular/core';

console.log('app,components.ts >>>> ');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // new_Cake = { name: '', imgurl: '' };
  new_Cake: any;
  allcakes: any;
  clicked_cake: any;
  oneCake: null;
  new_comment = {};
  avg: any;
  // new_comment: any;
  constructor(
    private _cakeService: CakeService,
    private _rateService: RateService
  ) { }


  ngOnInit() {
    this.getAllCakes();
    this.new_Cake = { name: '', imgurl: '' };
    this.allcakes = [];
    this.clicked_cake = {};
    this.oneCake = null;
    this.new_comment = { rating: null, comment: ''};
    this.avg = 0;
  }

  // ========== show the INFO - RIGHT DIV ===============
  showMeTheCakeDiv(cake) {
    this.clicked_cake = cake;
    console.log('clicked cake to show =>', cake);
    const getTheCakeObservable = this._cakeService.getOneCake(cake);
    getTheCakeObservable.subscribe(server_response => {
      console.log('got ONE_cakes from server =>', server_response);
      this.oneCake = server_response['data'];
      console.log('=====> server_response.data <======\n', server_response['data']);
      // let obj = server_response['data'];
      // console.log('obj ==============>', obj.rating[0].rating);
      // let x = 0;
      // for (let i = 0; i < obj.rating.length; i++ ) {
      //   x += obj.rating[i].rating;
      //   console.log('sum x =>', x);
      //   console.log('i =>', i);
      // }
      // this.avg = x / obj.rating.length;
      // console.log('^ ^ ^ ^ AVG =>', this.avg);
    });

  }


  // =========== FIND ALL CAKES ==============
  getAllCakes() {
    console.log('initializing get request from server for getAllCakes()');
    const getCakesObservable = this._cakeService.getCakes();
    getCakesObservable.subscribe(server_response => {
      console.log('got ALLcakes from server =>', server_response);
      this.allcakes = server_response['data'];
    });
  }

  // ========== CREATE A NEW CAKE ==============
  createCake() {
    console.log('createCake()');
    console.log('this.new_Cake', this.new_Cake);
    const newCakeObservable = this._cakeService.newCake(this.new_Cake);
    newCakeObservable.subscribe((data_response) => {
      console.log('data_response came back =>', data_response);
    });
    this.new_Cake = {name: '', imgurl: ''};
    this.getAllCakes();
  }

  // ============ commenting by RATE SERVICE!!!! NOT CAKES ==============
  onSubmit_comment(cakeid, new_comment, myForm) {
    console.log('onSubmit_comment() =>', cakeid, new_comment); // this.new_comment
    console.log('=-=-=-=-= myForm.value =>', myForm.value);
    this.new_comment = myForm.value;
    console.log('this.new_comment =======>', this.new_comment);
    const commentObserve = this._rateService.commentCake(cakeid, this.new_comment);
    commentObserve.subscribe((data_response) => {
      console.log('data_response came back for comment', data_response);
      this.new_comment = {rating: null, comment: ''};
    });
  }

}
