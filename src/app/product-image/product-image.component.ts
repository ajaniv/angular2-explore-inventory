import { Component, Input, HostBinding, OnInit } from '@angular/core';

import { Product } from '../shared/product';

@Component( {
    selector: 'app-product-image',
    templateUrl: './product-image.component.html',
    styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
    @HostBinding( 'class.ui.small.image' ) uiSmallImageClass = true;
    @Input()
    product: Product;

    constructor() { }

    ngOnInit() {
    }

}
