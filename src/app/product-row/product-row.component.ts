import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Product } from '../shared/product';
@Component( {
    selector: 'app-product-row',
    templateUrl: './product-row.component.html',
    styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
    @HostBinding('class.item') itemClass = true;
    @Input()
    product: Product;
    constructor() { }

    ngOnInit() {
    }

}
