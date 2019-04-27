import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals = [];
  
  constructor() { }

  ngOnInit() { //lifecycle hook, that is initiated when the component is loaded
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText); //submit item
    this.goalText = ''; //clear item after submission
    this.itemCount = this.goals.length; //update count
  }
}
