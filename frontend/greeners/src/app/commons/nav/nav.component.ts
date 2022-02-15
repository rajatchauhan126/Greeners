import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onGetCategoriesList()
  }
  categoriesListing = []
  onGetCategoriesList() {
    
    
    return this.getCategories()
  }

  getCategories(){
    let Plants = [
      {"name": "By Type", "list": ["All Plants", "Lucy Bamboo"]},
      {"name": "Plant By Name", "list": ["Lily Plant", "Ficus"]},
      {"name": "By Price", "list": ["Under 399", "400-599"]}
    ]

    let Combos = [
      {"name": "By Price", "list": ["Under 399", "400-599"]},
      {"name": "Flower Combos", "list": ["Flowers and cakes", "Flowers and teddy"]},
      {"name": "Plant Combos", "list": ["All plant", "Plants and flowers"]}
    ]

    this.categoriesListing.push({"name": "Plants","category": Plants})
    this.categoriesListing.push({"name": "Combos","category": Combos})
    console.log('this.categoriesListing', this.categoriesListing)
  }
}
