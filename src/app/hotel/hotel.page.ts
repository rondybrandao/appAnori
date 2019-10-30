import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavController } from '@ionic/angular';


enum COLORS {
  GREY = "#E0E0E0",
  GREEN = "#76FF03",
  YELLOW = "#FFCA28",
  RED = "#DD2C00"
}
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
  @Input() rating: number ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  
  
  hotelCentral
  category
  images = []
  grid = true
  sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: false
  }
  
  constructor(public navCtrl: NavController) { 
    this.rate(3)
  }

  ngOnInit() {
  }

  openHotelCentral() {
    this.hotelCentral = true
  }
  segmentChanged(ev: any) {
    
    const valorSegment = ev.detail.value
    this.category = valorSegment
    console.log('Segment changed', this.category);
  }
  voltar() {
    this.navCtrl.navigateBack('home')
  }

  onRateChange(event) {
    console.log(event)
  }
  onModelChange(event) {
    console.log(event)
  }

  rate(index:number) {
    this.rating = index;
    this.ratingChange.emit(this.rating)
  }

  isAboveRating(index:number):boolean {
    return index > this.rating
  }
  

  getColor(index:number) {
    if (this.isAboveRating(index)) {
      return COLORS.GREY
    }
    switch ( this.rating) {
      case 1: 
      case 2:
        return COLORS.RED
      case 3: 
        return COLORS.YELLOW
      case 4:
      case 5:
        return COLORS.GREEN
    }
  }
}
