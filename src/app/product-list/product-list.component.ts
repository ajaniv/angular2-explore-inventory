import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../shared/product';

@Component( {
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    /**
     * @input productList - the Product[] passed to us
     */
    @Input()
    productList: Product[];

    /**
     * @ouput onProductSelected - outputs the current 
     *          Product whenever a new Product is selected
     */
    @Output()
    onProductSelected: EventEmitter<Product>;
    /**
     * @property currentProduct - local state containing 
     *             the currently selected `Product`
     */
    currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    ngOnInit() {
    }

    clicked( product: Product ): void {
        this.currentProduct = product;
        this.onProductSelected.emit( product );
    }

    isSelected( product: Product ): boolean {
        if ( !product || !this.currentProduct ) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }

}
