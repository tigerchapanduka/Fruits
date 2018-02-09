import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Fruit';
  selectedValue: string;

  fruits = [
    {value: '1', viewValue: 'Apples'},
    {value: '2', viewValue: 'Oranges'},
    {value: '3', viewValue: 'Grapes'},
    {value: '4', viewValue: 'Peaches'},
    {value: '5', viewValue: 'Bananas'},
    {value: '6', viewValue: 'Strawberries'}
  ];



}
