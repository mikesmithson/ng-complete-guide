import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientCreated = new EventEmitter<Ingredient>();
  @ViewChild('ingredientNameInput', {static: true}) ingredientName: ElementRef;
  @ViewChild('ingredientAmountInput', {static: true}) ingredientAmount: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  addIngredient() {
    this.ingredientCreated.emit(
      new Ingredient(
        this.ingredientName.nativeElement.value,
        this.ingredientAmount.nativeElement.value
      )
    );
  }
}
