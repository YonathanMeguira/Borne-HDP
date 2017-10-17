webpackJsonp([1,4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mailer_service__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartInscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CartInscriptionComponent = (function () {
    function CartInscriptionComponent(dialogRef, data, router, mailer) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.mailer = mailer;
        this.generateTicketId = function () {
            _this.ticketId = Math.floor(1000 + Math.random() * 9000);
        };
    }
    CartInscriptionComponent.prototype.ngOnInit = function () {
    };
    CartInscriptionComponent.prototype.confirm = function () {
        this.generateTicketId();
        this.sendEmail();
        this.router.navigate(['confirmCart'], { queryParams: { ticketId: this.ticketId } });
    };
    CartInscriptionComponent.prototype.sendEmail = function () {
        var title = "New Order | Booking in shop | Ticket ID : " + this.ticketId;
        var cart = JSON.parse(localStorage.getItem('cartItems'));
        var emailBody = {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'email': this.email,
            'phone': this.areaCode + this.phone,
            'helper': this.HN1 + this.HN2,
            'cart': cart
        };
        var mail = { title: title, emailBody: emailBody };
        console.log(mail);
        // this.mailer.sendEmail(title, emailBody).subscribe((res) => console.log(res));
    };
    return CartInscriptionComponent;
}());
CartInscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart-inscription',
        template: __webpack_require__(497),
        styles: [__webpack_require__(408)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_mailer_service__["a" /* MailerService */]]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_mailer_service__["a" /* MailerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_mailer_service__["a" /* MailerService */]) === "function" && _c || Object])
], CartInscriptionComponent);

var _a, _b, _c;
//# sourceMappingURL=cart-inscription.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomHttpService = (function (_super) {
    __extends(CustomHttpService, _super);
    function CustomHttpService(backend, options, dataBus) {
        var _this = _super.call(this, backend, options) || this;
        _this.dataBus = dataBus;
        return _this;
    }
    CustomHttpService.prototype.onGetCatch = function (error, caught) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    CustomHttpService.prototype.get = function (url, options) {
        var _this = this;
        this.dataBus.setDataLoadingStatus(true);
        return _super.prototype.get.call(this, url, options)
            .catch(this.onGetCatch)
            .do(function (res) {
            return res;
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        })
            .finally(function () {
            _this.dataBus.setDataLoadingStatus(false);
        });
    };
    return CustomHttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
CustomHttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_bus_service__["a" /* DataBusService */]) === "function" && _c || Object])
], CustomHttpService);

var _a, _b, _c;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    stripeKey: 'pk_live_FN4bjURxeZhZFZP6cFIDeDNB',
    firebase: {
        apiKey: 'AIzaSyCr4L9zSPtfdi8IMNXNfV5AbB2MHp8Wi5M',
        authDomain: 'beauty-success-3840f.firebaseapp.com',
        databaseURL: 'https://beauty-success-3840f.firebaseio.com',
        projectId: 'beauty-success-3840f',
        storageBucket: 'beauty-success-3840f.appspot.com',
        messagingSenderId: '22204423486'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartConfirmComponent = (function () {
    function CartConfirmComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    CartConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.ticketId = +params['ticketId'] || 0;
        });
        setTimeout(function () {
            _this.goBackToMenu();
        }, 60000);
    };
    CartConfirmComponent.prototype.goBackToMenu = function () {
        window.localStorage.clear();
        this.router.navigate(['/']);
    };
    CartConfirmComponent.prototype.seeItinerary = function () {
        this.router.navigate(['/itinerary']);
    };
    CartConfirmComponent.prototype.gotoTuktuk = function () {
        this.router.navigate(['/tuktuk']);
    };
    CartConfirmComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return CartConfirmComponent;
}());
CartConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart-confirm',
        template: __webpack_require__(496),
        styles: [__webpack_require__(407)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], CartConfirmComponent);

var _a, _b;
//# sourceMappingURL=cart-confirm.component.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_inscription_cart_inscription_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inscription_inscription_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_bus_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartComponent = (function () {
    function CartComponent(dialogRef, dialog, dataBus) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.dataBus = dataBus;
        this.decreaseQty = function (product) {
            var productIdx = _this.cartProducts.indexOf(product);
            _this.cartProducts[productIdx].quantity--;
            _this.numberOfProducts--;
            if (_this.totalPrice >= product.price) {
                _this.totalPrice -= product.price;
                window.localStorage.setItem('cartItems', JSON.stringify(_this.cartProducts));
                _this.writeCartValueInLocalStorage();
                _this.updateCartQuantity();
            }
        };
        this.increaseQty = function (product) {
            var productIdx = _this.cartProducts.indexOf(product);
            _this.cartProducts[productIdx].quantity++;
            _this.numberOfProducts++;
            _this.totalPrice += product.price;
            _this.updateCartQuantity();
            window.localStorage.setItem('cartItems', JSON.stringify(_this.cartProducts));
            _this.writeCartValueInLocalStorage();
        };
        this.existentProds = function () {
            return _this.cartProducts.filter(function (prod) { return prod.quantity > 0; });
        };
        this.productIsDeleted = function (product) {
            return product.quantity < 1;
        };
        this.goToSignUp = function () {
            var oldArticles = localStorage.getItem('cart');
            var oldJsonified = JSON.parse(oldArticles) || [];
            oldJsonified.push(_this.cartProducts);
            var jsonified = JSON.stringify(oldJsonified);
            window.localStorage.setItem('cart', jsonified);
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__inscription_inscription_component__["a" /* InscriptionComponent */], {
                data: { product: _this.cartProducts },
                disableClose: true,
                width: '60%'
            });
            _this.dialogRef.close();
        };
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartProducts = JSON.parse(window.localStorage.getItem('cartItems'));
        this.numberOfProducts = 0;
        this.cartProducts.forEach(function (product) {
            _this.numberOfProducts += product.quantity;
        });
        window.localStorage.setItem('cartQuantity', JSON.stringify(this.numberOfProducts));
        this.dataBus.updateCartQuantity(this.numberOfProducts);
        this.totalPrice = parseInt(window.localStorage.getItem('cartPrice'), 10);
    };
    CartComponent.prototype.writeCartValueInLocalStorage = function () {
        var strPrice = JSON.stringify(this.totalPrice);
        window.localStorage.setItem('cartPrice', strPrice);
    };
    CartComponent.prototype.updateCartQuantity = function () {
        this.dataBus.updateCartQuantity(this.numberOfProducts);
        window.localStorage.setItem('cartQuantity', JSON.stringify(this.numberOfProducts));
    };
    CartComponent.prototype.bookInShop = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */], {
            data: { product: this.cartProducts },
            disableClose: true,
            width: '60%'
        });
        this.dialogRef.close();
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__(498),
        styles: [__webpack_require__(409)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_bus_service__["a" /* DataBusService */]) === "function" && _c || Object])
], CartComponent);

var _a, _b, _c;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_inscription_cart_inscription_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_translator_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_add_to_cart_add_to_cart_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DetailsComponent = (function () {
    function DetailsComponent(dataBus, api, dialog, translator, router) {
        var _this = this;
        this.dataBus = dataBus;
        this.api = api;
        this.dialog = dialog;
        this.translator = translator;
        this.router = router;
        this.mode = 'indeterminate';
        this.spinnerColor = 'accent';
        this.isCartAnimated = false;
        this.goToSignUp = function () {
            var selectedProduct = {
                'product': _this.product.label,
                'quantity': _this.selectedQty,
                'dynamicPrice': _this.product.dynamicPrice,
                'regularPrice': _this.product.regularPrice
            };
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__["a" /* InscriptionComponent */], {
                data: { product: selectedProduct },
                disableClose: true,
                width: '60%'
            });
        };
        this.addProductToCart = function () {
            var cartDialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */], { data: { title: _this.product.label } });
            _this.updateLocalStorage();
            _this.isCartAnimated = true;
            cartDialogRef.afterClosed().subscribe(function (goback) {
                if (goback) {
                    _this.router.navigate(['/parfums']);
                }
            });
        };
        this.contentHasLoaded = false;
        this.prices = [];
        this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.selectedQty = 1;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataBus.currentProduct.subscribe(function (res) {
            if (res) {
                _this.api.getProductDetails(res.url).subscribe(function (product) {
                    _this.product = product[0];
                    _this.product.dynamicPrice = _this.product.price * _this.selectedQty;
                    _this.product.regularPrice = _this.product.price;
                    product.forEach(function (prod) {
                        var PriceObj = { 'price': prod.price, 'label': prod.label };
                        _this.prices.push(PriceObj);
                    });
                    _this.selectedVolume = _this.prices[0].price;
                    _this.multipleVolumes = (_this.prices.length > 1) ? true : false;
                    _this.contentHasLoaded = true;
                });
            }
            else {
                _this.router.navigate(['/parfums']);
            }
        });
    };
    DetailsComponent.prototype.updateValue = function (qty) {
        this.product.dynamicPrice = this.product.price * qty;
        this.product.regularPrice = this.product.dynamicPrice;
        var val = this.val + this.product.dynamicPrice;
    };
    DetailsComponent.prototype.updateVolumePrice = function (price) {
        this.product.dynamicPrice = price * this.selectedQty;
        this.product.price = price;
        this.product.regularPrice = price;
    };
    DetailsComponent.prototype.updateLocalStorage = function () {
        /* updating price */
        var priceFromLocalStorage = parseInt(window.localStorage.getItem('cartPrice'), 10) || 0;
        var updatedPrice = this.product.dynamicPrice + priceFromLocalStorage;
        console.log(updatedPrice);
        window.localStorage.setItem('cartPrice', JSON.stringify(updatedPrice));
        /*update products in cart*/
        ;
        var products = JSON.parse(window.localStorage.getItem('cartItems')) || [];
        var currentProduct = {
            label: this.product.label,
            quantity: this.selectedQty,
            price: this.product.price,
            dynamicPrice: this.val,
            image: this.product.productBigImage
        };
        products.push(currentProduct);
        var productStr = JSON.stringify(products);
        window.localStorage.setItem('cartItems', productStr);
        /* updating the quantity in localStorage */
        var quantity = parseInt(window.localStorage.getItem('cartQuantity'), 10) || 0;
        console.log(quantity);
        var intQty = this.selectedQty + quantity;
        console.log(intQty);
        var strQty = JSON.stringify(this.selectedQty + quantity);
        window.localStorage.setItem('cartQuantity', strQty);
        this.dataBus.updateCartQuantity(intQty);
    };
    DetailsComponent.prototype.bookInShop = function () {
        var selectedProduct = {
            'product': this.product.label,
            'quantity': this.selectedQty,
            'dynamicPrice': this.product.dynamicPrice,
            'regularPrice': this.product.regularPrice
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */], {
            data: { product: selectedProduct },
            disableClose: true,
            width: '60%'
        });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__(499),
        styles: [__webpack_require__(410)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */], __WEBPACK_IMPORTED_MODULE_6__services_translator_service__["a" /* TranslatorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_translator_service__["a" /* TranslatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_translator_service__["a" /* TranslatorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]) === "function" && _e || Object])
], DetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcranVeilleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EcranVeilleComponent = (function () {
    function EcranVeilleComponent(router) {
        this.router = router;
    }
    EcranVeilleComponent.prototype.ngOnInit = function () {
        window.localStorage.clear();
    };
    EcranVeilleComponent.prototype.goToLanguage = function () {
        this.router.navigate(['/language']);
    };
    return EcranVeilleComponent;
}());
EcranVeilleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-ecran-veille',
        template: __webpack_require__(500),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], EcranVeilleComponent);

var _a;
//# sourceMappingURL=ecran-veille.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItineraryComponent = (function () {
    function ItineraryComponent(router) {
        this.router = router;
        this.myDatePickerOptions = {
            dateFormat: 'dd.mm.yyyy',
        };
    }
    ItineraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/']);
        }, 40000);
    };
    ItineraryComponent.prototype.goToMenu = function () {
        window.history.back();
    };
    return ItineraryComponent;
}());
ItineraryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-itinerary',
        template: __webpack_require__(502),
        styles: [__webpack_require__(413)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ItineraryComponent);

var _a;
//# sourceMappingURL=itinerary.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageComponent = (function () {
    function LanguageComponent(router) {
        var _this = this;
        this.router = router;
        this.setLanguage = function (language) {
            switch (language) {
                case 'US':
                    localStorage.setItem('language', 'en');
                    break;
                case 'FR':
                    localStorage.setItem('language', 'fr');
                    break;
                case 'ES':
                    localStorage.setItem('language', 'es');
                    break;
            }
            _this.router.navigate(['presentation']);
        };
    }
    return LanguageComponent;
}());
LanguageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-language',
        template: __webpack_require__(503),
        styles: [__webpack_require__(414)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LanguageComponent);

var _a;
//# sourceMappingURL=language.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LPComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LPComponent = (function () {
    function LPComponent(fetcher) {
        this.fetcher = fetcher;
    }
    LPComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetcher.getCarousel().subscribe(function (data) {
            _this.carousel = data;
        });
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 1000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    };
    LPComponent.prototype.carouselTileLoad = function (evt) {
        var len = this.carousel.length;
        for (var i = len; i < len + 10; i++) {
            if (!i.image.includes('https')) {
                this.carousel.push(i);
            }
        }
    };
    return LPComponent;
}());
LPComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-lp',
        template: __webpack_require__(504),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */]) === "function" && _a || Object])
], LPComponent);

var _a;
//# sourceMappingURL=lp.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddToCartComponent = (function () {
    function AddToCartComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AddToCartComponent.prototype.ngOnInit = function () {
    };
    return AddToCartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], AddToCartComponent.prototype, "title", void 0);
AddToCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-add-to-cart',
        template: __webpack_require__(505),
        styles: [__webpack_require__(416)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */]) === "function" && _a || Object])
], AddToCartComponent);

var _a;
//# sourceMappingURL=add-to-cart.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParfumsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ParfumsComponent = (function () {
    function ParfumsComponent(api, dataBus, router, db) {
        var _this = this;
        this.api = api;
        this.dataBus = dataBus;
        this.router = router;
        this.db = db;
        this.allParfums = [];
        this.brandsToDisplay = [];
        this.brands = [];
        this.getDetails = function (product) {
            _this.dataBus.setNewProduct(product);
            _this.router.navigate(['/details']);
        };
        this.filterParfums = function (brand) {
            _this.allParfums = _this.bigArr.filter(function (parfum) {
                return parfum.brand === brand;
            });
        };
    }
    ParfumsComponent.prototype.ngOnInit = function () {
        this.fetchParfums();
    };
    ParfumsComponent.prototype.ngAfterViewChecked = function () {
        this.dataBus.setDataLoadingStatus(false);
    };
    ParfumsComponent.prototype.isNotUrl = function (url) {
        return !url.includes('http');
    };
    ParfumsComponent.prototype.fetchParfums = function () {
        var _this = this;
        this.fireBrands = this.db.list('/brands');
        this.fireBrands.subscribe(function (brand) {
            brand.forEach(function (br) {
                if (br.available) {
                    _this.brandsToDisplay.push(br.name);
                }
                _this.brands = _this.brandsToDisplay.sort();
            });
            _this.parfumsFire = _this.db.list('/parfums');
            _this.parfumsFire.subscribe(function (parfums) {
                _this.bigArr = parfums;
                _this.allParfums = _this.bigArr;
            });
        });
    };
    return ParfumsComponent;
}());
ParfumsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-parfums',
        template: __webpack_require__(506),
        styles: [__webpack_require__(417)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object])
], ParfumsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=parfums.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PresentationComponent = (function () {
    function PresentationComponent(router) {
        var _this = this;
        this.router = router;
        this.orderTuk = function () {
            _this.router.navigate(['tuktuk']);
        };
        this.shopHere = function () {
            _this.router.navigate(['parfums']);
        };
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    return PresentationComponent;
}());
PresentationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-presentation',
        template: __webpack_require__(507),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PresentationComponent);

var _a;
//# sourceMappingURL=presentation.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ElectronService} from '../../providers/electron.service';
var PrintingComponent = (function () {
    function PrintingComponent(route, router, dataBus) {
        this.route = route;
        this.router = router;
        this.dataBus = dataBus;
        /*if (electronService.isElectron()) {
          console.log(electronService.childProcess);
          console.log(electronService.ipcRenderer);
        } else {
          console.log('Mode web');
        }*/
    }
    PrintingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.firstName = params['firstName'] || '';
            _this.lastName = params['name'] || '';
            _this.travelers = params['persons'] || '';
        });
        // this.sendEvent();
        setTimeout(function () {
            window.localStorage.clear();
            _this.dataBus.updateCartQuantity(0);
            _this.router.navigate(['/']);
        }, 15000);
    };
    return PrintingComponent;
}());
PrintingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-printing',
        template: __webpack_require__(508),
        styles: [__webpack_require__(419)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */]) === "function" && _c || Object])
], PrintingComponent);

var _a, _b, _c;
//# sourceMappingURL=printing.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailerService = (function () {
    function MailerService(http) {
        this.http = http;
    }
    MailerService.prototype.sendEmail = function (firstName, lastName, hour, passagers) {
        var mailAddress = "https://beautyscrapr.herokuapp.com/mailer?firstName=" + firstName + "&lastName=" + lastName + "&hour=" + hour + "&passagers=" + passagers;
        return this.http.get(mailAddress)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error,could not send the email'); });
    };
    return MailerService;
}());
MailerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MailerService);

var _a;
//# sourceMappingURL=mailer.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentService = (function () {
    function PaymentService(http) {
        var _this = this;
        this.http = http;
        this.createLead = function (lead) {
            var leadUrl = 'https://beauty-success-db.herokuapp.com/api/lead';
            return _this.http.post(leadUrl, lead);
        };
    }
    PaymentService.prototype.postPayment = function (amount, source, description) {
        var paymentUrl = 'https://beautyscrapr.herokuapp.com/charge';
        return this.http.post(paymentUrl, { amount: amount, source: source, description: description });
    };
    return PaymentService;
}());
PaymentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PaymentService);

var _a;
//# sourceMappingURL=payment.service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessPaymentComponent = (function () {
    function SuccessPaymentComponent(router) {
        this.router = router;
    }
    SuccessPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            window.localStorage.clear();
            _this.router.navigate(['/']);
        }, 15000);
    };
    return SuccessPaymentComponent;
}());
SuccessPaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-success-payment',
        template: __webpack_require__(509),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SuccessPaymentComponent);

var _a;
//# sourceMappingURL=success-payment.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mailer_service__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TuktukComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TuktukComponent = (function () {
    function TuktukComponent(router, mailer) {
        var _this = this;
        this.router = router;
        this.mailer = mailer;
        this.openingHours = ['2PM', '6PM'];
        this.ticketId = false;
        this.isMorning = false;
        this.isAfternoon = false;
        this.travelers = [];
        this.checkHour = function () {
            var currentDate = new Date();
            var currentHour = currentDate.getHours();
            if (currentHour < 12) {
                _this.isAfternoon = true;
                _this.isMorning = true;
            }
            else if (currentHour > 12 && currentHour < 16) {
                _this.isMorning = false;
                _this.isAfternoon = true;
            }
            else {
                _this.isMorning = true;
                _this.isAfternoon = true;
            }
            console.log(currentHour);
        };
        this.populateTravelers = function () {
            for (var i = 1; i < 7; i++) {
                _this.travelers.push(i);
            }
        };
        this.bookTuk = function () {
            _this.ticketId = true;
            _this.mailer.sendEmail(_this.lastName, _this.firstName, _this.selectedHour, _this.numberOfTravelers).subscribe(function (res) {
                console.log(res);
            });
        };
    }
    TuktukComponent.prototype.ngOnInit = function () {
        this.populateTravelers();
        this.checkHour();
    };
    TuktukComponent.prototype.formIsComplete = function () {
        return (this.numberOfTravelers && this.selectedHour && this.lastName && this.firstName);
    };
    TuktukComponent.prototype.print = function () {
        this.router.navigate(['print'], {
            queryParams: {
                firstName: this.firstName,
                name: this.lastName,
                persons: this.numberOfTravelers
            }
        });
    };
    TuktukComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    return TuktukComponent;
}());
TuktukComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-tuktuk',
        template: __webpack_require__(510),
        styles: [__webpack_require__(421)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_mailer_service__["a" /* MailerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_mailer_service__["a" /* MailerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_mailer_service__["a" /* MailerService */]) === "function" && _b || Object])
], TuktukComponent);

var _a, _b;
//# sourceMappingURL=tuktuk.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModel; });
var ProductModel = (function () {
    function ProductModel() {
    }
    return ProductModel;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(dataBus, dialog, router) {
        var _this = this;
        this.dataBus = dataBus;
        this.dialog = dialog;
        this.router = router;
        this.dataIsLoading = false;
        this.paymentPage = false;
        this.pricesUrls = ['/details'];
        this.isNotStoreView = function () {
            var bannedUrl = ['/language', '/presentation', '/tuktuk', '/itinerary', '/ecranVeille'];
            if (bannedUrl.indexOf(_this.router.url) === -1) {
                return true;
            }
            else {
                return false;
            }
        };
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* NavigationEnd */]) {
                _this.currentUrl = event.url;
                if (_this.currentUrl === '/') {
                    console.log('clezarrr');
                }
                _this.paymentPage = (_this.pricesUrls.indexOf(_this.currentUrl) !== -1) ? true : false;
            }
        });
        this.dataBus.dataLoadingStatus.subscribe(function (res) {
            _this.dataIsLoading = res;
        });
        this.dataBus.cartQuantity.subscribe(function (quantity) {
            _this.numberOfCartItems = quantity || _this.getNumberOfItemsFromLS();
            console.log(_this.numberOfCartItems);
        });
    }
    AppComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    AppComponent.prototype.getNumberOfItemsFromLS = function () {
        var qty = 0;
        var items = JSON.parse(window.localStorage.getItem('cartItems')) || [];
        items.forEach(function (item) {
            qty += item.quantity;
        });
        return qty;
    };
    AppComponent.prototype.showCart = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__cart_cart_component__["a" /* CartComponent */]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(495),
        styles: [__webpack_require__(406)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_payment_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__covalent_core__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_carousel__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mydatepicker__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routing__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__parfums_parfums_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__details_details_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_fetcher_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__inscription_inscription_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cart_cart_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__language_language_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__success_payment_success_payment_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__presentation_presentation_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tuktuk_tuktuk_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__itinerary_itinerary_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ecran_veille_ecran_veille_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__cart_inscription_cart_inscription_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__cart_confirm_cart_confirm_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__modals_add_to_cart_add_to_cart_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__printing_printing_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__lp_lp_component__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/*external dependencies*/






/*Routing*/








/*views*/


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__parfums_parfums_component__["a" /* ParfumsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__inscription_inscription_component__["a" /* InscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_22__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_23__language_language_component__["a" /* LanguageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__success_payment_success_payment_component__["a" /* SuccessPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_25__presentation_presentation_component__["a" /* PresentationComponent */],
            __WEBPACK_IMPORTED_MODULE_26__tuktuk_tuktuk_component__["a" /* TuktukComponent */],
            __WEBPACK_IMPORTED_MODULE_32__printing_printing_component__["a" /* PrintingComponent */],
            __WEBPACK_IMPORTED_MODULE_27__itinerary_itinerary_component__["a" /* ItineraryComponent */],
            __WEBPACK_IMPORTED_MODULE_28__ecran_veille_ecran_veille_component__["a" /* EcranVeilleComponent */],
            __WEBPACK_IMPORTED_MODULE_29__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_30__cart_confirm_cart_confirm_component__["a" /* CartConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_31__modals_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */],
            __WEBPACK_IMPORTED_MODULE_33__lp_lp_component__["a" /* LPComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_carousel__["a" /* NgxCarouselModule */],
            __WEBPACK_IMPORTED_MODULE_12_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__covalent_core__["a" /* CovalentLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__covalent_core__["b" /* CovalentStepsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_data_bus_service__["a" /* DataBusService */], __WEBPACK_IMPORTED_MODULE_20__services_fetcher_service__["a" /* FetcherService */], __WEBPACK_IMPORTED_MODULE_7__services_http_service__["a" /* CustomHttpService */], __WEBPACK_IMPORTED_MODULE_8__services_payment_service__["a" /* PaymentService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_22__cart_cart_component__["a" /* CartComponent */], __WEBPACK_IMPORTED_MODULE_21__inscription_inscription_component__["a" /* InscriptionComponent */], __WEBPACK_IMPORTED_MODULE_29__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */], __WEBPACK_IMPORTED_MODULE_31__modals_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Countries; });
var Countries = (function () {
    function Countries() {
    }
    return Countries;
}());

Countries.countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Satellite',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'St. Lucia',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor L\'Este',
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
Countries.euCountries = ['Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bosnia and Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'The Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
    'United Kingdom',
    'Vatican City'
];
//# sourceMappingURL=countries.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parfums_parfums_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__language_language_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__success_payment_success_payment_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__presentation_presentation_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tuktuk_tuktuk_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__itinerary_itinerary_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ecran_veille_ecran_veille_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cart_confirm_cart_confirm_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__printing_printing_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lp_lp_component__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', redirectTo: 'parfums', pathMatch: 'full' },
    { path: 'parfums', component: __WEBPACK_IMPORTED_MODULE_2__parfums_parfums_component__["a" /* ParfumsComponent */] },
    { path: 'lp', component: __WEBPACK_IMPORTED_MODULE_13__lp_lp_component__["a" /* LPComponent */] },
    { path: 'presentation', component: __WEBPACK_IMPORTED_MODULE_7__presentation_presentation_component__["a" /* PresentationComponent */] },
    { path: 'tuktuk', component: __WEBPACK_IMPORTED_MODULE_8__tuktuk_tuktuk_component__["a" /* TuktukComponent */] },
    { path: 'print', component: __WEBPACK_IMPORTED_MODULE_12__printing_printing_component__["a" /* PrintingComponent */] },
    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_3__details_details_component__["a" /* DetailsComponent */] },
    { path: 'inscription', component: __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__["a" /* InscriptionComponent */] },
    { path: 'language', component: __WEBPACK_IMPORTED_MODULE_5__language_language_component__["a" /* LanguageComponent */] },
    { path: 'valid_payment', component: __WEBPACK_IMPORTED_MODULE_6__success_payment_success_payment_component__["a" /* SuccessPaymentComponent */] },
    { path: 'itinerary', component: __WEBPACK_IMPORTED_MODULE_9__itinerary_itinerary_component__["a" /* ItineraryComponent */] },
    { path: 'ecranVeille', component: __WEBPACK_IMPORTED_MODULE_10__ecran_veille_ecran_veille_component__["a" /* EcranVeilleComponent */] },
    { path: 'confirmCart', component: __WEBPACK_IMPORTED_MODULE_11__cart_confirm_cart_confirm_component__["a" /* CartConfirmComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=routing.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslatorService = (function () {
    function TranslatorService(http) {
        this.http = http;
        this.translateUrl = 'https://beautyscrapr.herokuapp.com/translate';
    }
    TranslatorService.prototype.translateContent = function (description, language) {
        return this.http.post(this.translateUrl, { description: description, language: language })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw('Server error,could not translate the description'); });
    };
    return TranslatorService;
}());
TranslatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* CustomHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* CustomHttpService */]) === "function" && _a || Object])
], TranslatorService);

var _a;
//# sourceMappingURL=translator.service.js.map

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".topBar{\n  background-color: #FF0085;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index:100;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 14px;\n}\n.pink-btn{\n  background-color: #ff0085 !important;\n  color: white !important;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.bs-link{\n  color: white;\n  text-underline: none !important;\n}\n.bs-link:focus{\n  text-underline: none !important;\n}\n.page-active{\n  color: #E6007E;\n  text-underline: none !important;\n}\n.page-active:focus{\n  text-underline: none !important;\n}\n.cart-items{\n  color: #E6007E;\n  font-weight: 700;\n  margin-bottom: 0 !important;\n}\n.cart-icon{\n  max-height: 25px !important;\n}\n\nbody{\n  font-family: \"Lato\",georgia,serif !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".pink-btn{\n  background-color: #ff0085 !important;\n  color: white !important;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#form {\n  background-color: white;\n  border-radius: 4px;\n  padding: 2em;\n  box-shadow: 5px 5px 5px lightgray;\n  border: solid 2px lightpink;\n}\n\n#submit-btn {\n  background-color: #E6007E;\n  color: white;\n}\n\nlabel {\n  color: #E6007E;\n}\n\ninput {\n  color: lightslategray;\n}\n\n.disabled {\n  background-color: #999999 !important;\n}\n\n#card-element {\n  margin-top: 2em;\n  margin-bottom: 1em;\n}\n\n#card-errors {\n  color: red;\n}\n\n.price {\n  font-size: 150px;\n}\n\n.spinner {\n  margin: 50px;\n  height: 28px;\n  width: 28px;\n  -webkit-animation: rotate 0.8s infinite linear;\n          animation: rotate 0.8s infinite linear;\n  border: 8px solid lightcoral;\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.price-alert {\n  color: #009688;\n  margin-bottom: 0.7em;\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".delete-btn:focus{\n  outline: none !important;\n}\n.delete-btn{\n  background-color: #E6007E !important;\n  color: white !important;\n  margin-left: 1em;\n}\n.cart-btn{\n  text-transform: uppercase;\n  font-size: 14px;\n}\n#cart-summary{\n  color: #999999;\n  text-align: center;\n  margin-top: 0.7em;\n  margin-bottom: 1.3em;\n}\n.add-btn{\n  color: white !important;\n  margin-left: 1em;\n  background-color: #a167ce;\n}\n.add-btn:focus{\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\n#product-big-img {\n  display: block;\n  width: 90% !important;\n  height: auto !important;\n}\n\n.main-holder {\n  width: 70%;\n}\n\n#brand-img {\n  margin: 0 auto;\n}\n\n#label, #description {\n  margin-top: 1em !important;\n  margin-bottom: 1em !important;\n}\n\n.cart-btn{\n  text-transform: uppercase;\n  background-color: #ff0085 !important;\n  font-size: 13px;\n  color: white !important;\n  margin-bottom: 10px;\n}\n\n.store-btn{\n  background-color: #7E57C2;\n  font-size: 13px;\n  color: white;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#tuk-btn{\n  height: 50px;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#form{\n  background-color: white;\n  border-radius: 4px;\n  padding: 2em;\n  box-shadow: 5px 5px 5px lightgray;\n  border: solid 2px lightpink;\n}\n#submit-btn{\n  background-color: #E6007E;\n  color: white;\n}\nlabel{\n  color: #E6007E;\n}\ninput{\n  color: lightslategray;\n}\n.disabled{\n  background-color: #999999 !important;\n}\n#card-element{\n  margin-top: 2em;\n  margin-bottom: 1em;\n}\n#card-errors{\n  color: red;\n}\n.price{\n  font-size: 150px;\n}\n\n\n.spinner {\n  margin: 50px;\n  height: 28px;\n  width: 28px;\n  -webkit-animation: rotate 0.8s infinite linear;\n          animation: rotate 0.8s infinite linear;\n  border: 8px solid lightcoral;\n  border-right-color: transparent;\n  border-radius: 50%;\n  text-transform: uppercase;\n}\n\n@-webkit-keyframes rotate {\n  0%    { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100%  { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes rotate {\n  0%    { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100%  { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n.price-alert {\n  color: #009688;\n  margin-bottom: 0.7em;\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".example-header-image {\n  background-image: url(" + __webpack_require__(764) + ");\n  background-size: cover;\n}\n.icon-direction{\n  height: 20px;\n  margin-right: 15px;\n}\n.pink-btn{\n  background-color: #ff0085 !important;\n  color: white !important;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#language-wrapper {\n  height: 100vh;\n  width: 100vh;\n}\n\n#us {\n  background: url(" + __webpack_require__(423) + ");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#close-btn{\n  background-color: #ff0085;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".img-holder{\n  width: 120px;\n  height: 120px;\n  margin: 0 auto;\n}\n.cart-btn{\n  background-color: #ff0085 !important;\n  color: white !important;\n  margin-bottom: 10px;\n}\n.store-btn{\n  background-color: white;\n  color: #DC6695;\n  border: solid 2px #DC6695;\n  margin-bottom: 10px;\n}\n\n.store-btn:hover{\n  background-color: #333;\n  color: white;\n  border: solid 2px #333;\n}\n.product-card{\n  width: 320px;\n  height: 360px !important;\n}\n\n.title{\n  font-weight: 700;\n}\n.desc{\n  color: #999;\n}\n\n.action-center{\n  position: absolute;\n  bottom: 10px;\n}\n#parfumBrands{\n  list-style-type: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-top: 5px;\n  margin-right: 2em;\n}\n#parfumBrands li{\n  margin-bottom: 1em;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#tuktuk-btn{\n  background-color: #FFB04C;\n  width: 40px;\n  color: white;\n}\n.wrapper{\n  margin-top: 5em !important;\n}\n#options{\n  margin-top: 3em;\n}\n#classic{\n  margin-right: 3em;\n  height: 675px;\n}\n#shop-here-btn{\n  background-color: #303E48;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".conf{\n  margin-top: 2em;\n  font-weight: 400 !important;\n  color: #333333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "US.87de9e126782b9c98185.svg";

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_product__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataBusService = (function () {
    function DataBusService() {
        this._selectedProduct = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_2__Models_product__["a" /* ProductModel */]());
        this._dataIsLoading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this._cartQuantity = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
    }
    DataBusService.prototype.setNewProduct = function (product) {
        this._selectedProduct.next(product);
        window.localStorage.setItem('currentProductUrl', product.url);
    };
    Object.defineProperty(DataBusService.prototype, "currentProduct", {
        get: function () {
            return this._selectedProduct.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DataBusService.prototype.setDataLoadingStatus = function (status) {
        this._dataIsLoading.next(status);
    };
    Object.defineProperty(DataBusService.prototype, "dataLoadingStatus", {
        get: function () {
            return this._dataIsLoading.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DataBusService.prototype.updateCartQuantity = function (value) {
        console.log('new value ', value);
        this._cartQuantity.next(value);
    };
    Object.defineProperty(DataBusService.prototype, "cartQuantity", {
        get: function () {
            return this._cartQuantity.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return DataBusService;
}());
DataBusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataBusService);

//# sourceMappingURL=data-bus.service.js.map

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" color=\"primary\" *ngIf=\"dataIsLoading\"></md-progress-bar>\n\n<div *ngIf=\"isNotStoreView()\" style=\"margin-top: 120px\">\n  <div layout=\"row\" class=\"topBar mb-5\" layout-align=\"space-between center\">\n    <div flex=\"10\">\n      <button *ngIf=\"paymentPage\" md-mini-fab style=\"background-color: #a167ce\" class=\"ml-3\" (click)=\"goBack()\">\n        <img src=\"../assets/img/arrow-back.svg\" style=\"height: 14px\">\n      </button>\n    </div>\n    <div layout=\"row\" flex=\"50\" layout-align=\"center center\">\n      <p style=\"color: white; margin-bottom: 0px;\">Beauty Success</p>\n    </div>\n    <div class=\"mr-4\" (click)=\"showCart()\" flex=\"10\">\n      <div *ngIf=\"numberOfCartItems > 0\" layout=\"row\">\n        <img class=\"cart-icon\" src=\"assets/images/cart.svg\">\n        <p class=\"cart-items ml-2\" style=\"color: white\">{{numberOfCartItems}} items</p>\n      </div>\n    </div>\n  </div>\n\n  <div layout=\"row\" layout-align=\"center center\" class=\"mb-5 mt-5\">\n    <img src=\"assets/images/logo.png\">\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\">\n  <div class=\"wrapper-with-shadow\" style=\"width: 550px\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/images/valid_payment.svg\" style=\"height: 60px\">\n    <p class=\"mt-3\">Your Order has been successfully placed</p>\n    <div layout=\"row\" layout-align=\"space-between center\" class=\"mt-3\">\n      <button md-raised-button (click)=\"seeItinerary()\" class=\"mr-2 pink-btn\">\n        Come with Metro / by Foot\n      </button>\n      <button md-raised-button class=\"pink-btn\" (click)=\"gotoTuktuk()\">Come by Tuktuk</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>CONFIRM YOUR ORDER</h1>\n<div md-dialog-content>\n  <form #form=\"ngForm\" id=\"form\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" aria-describedby=\"firstName\"\n             placeholder=\"First Name\" [(ngModel)]=\"firstName\" required name=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" aria-describedby=\"lastName\"\n             placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required name=\"lastName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\"\n             placeholder=\"+ ...\" [(ngModel)]=\"phone\" required name=\"phone\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"email\"\n             placeholder=\"Email\" [(ngModel)]=\"email\" required name=\"email\">\n    </div>\n    <div class=\"form-inline mt-4\">\n      <input type=\"text\" class=\"form-control mr-3\" aria-describedby=\"helperI1\"\n             [(ngModel)]=\"HN1\" name=\"helperI1\" style=\"width: 40px\">\n      <input type=\"text\" class=\"form-control\" aria-describedby=\"helperI2\"\n             [(ngModel)]=\"HN2\" name=\"helperI2\" style=\"width: 40px\">\n    </div>\n  </form>\n</div>\n<div md-dialog-actions layout=\"row\" layout-align=\"center center\">\n  <button md-raised-button [md-dialog-close] class=\"mr-3\">CANCEL</button>\n  <button md-raised-button [md-dialog-close] color=\"primary\"\n          (click)=\"confirm()\" [disabled]=\"!form.valid\">CONFIRM\n  </button>\n</div>\n\n"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"end\">\n  <p>X</p>\n</div>\n<md-list>\n  <h3 id=\"cart-summary\">{{numberOfProducts}} items</h3>\n  <md-list-item *ngFor=\"let prod of existentProds()\">\n    <img md-list-avatar src=\"{{prod.image}}\">\n    <h3 md-line>{{prod.quantity}} x {{prod.label}} </h3>\n    <button md-icon-button class=\"delete-btn\" (click)=\"decreaseQty(prod)\" [disabled]=\"productIsDeleted(prod)\">-</button>\n    <button md-icon-button class=\"add-btn\" (click)=\"increaseQty(prod)\">+</button>\n  </md-list-item>\n  <div layout=\"row\" layout-align=\"center center\" class=\"mt-5\">\n    <h3>{{totalPrice}} €</h3>\n  </div>\n</md-list>\n<div layout=\"row\" layout-align=\"center center\" class=\"mt-2\">\n  <button md-raised-button color=\"primary\" class=\"mr-2 cart-btn\" (click)=\"bookInShop()\">Book in Shop</button>\n  <button md-raised-button color=\"accent\" class=\"ml-2 cart-btn\" (click)=\"goToSignUp()\">Delivery by the concierge</button>\n</div>\n"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center center\">\n  <div *ngIf=\"!contentHasLoaded; else productDetail\">\n    <md-progress-spinner\n      class=\"example-margin\"\n      [color]=\"spinnerColor\"\n      [mode]=\"mode\">\n    </md-progress-spinner>\n  </div>\n  <ng-template #productDetail layout=\"row\" class=\"mt-5 main-holder\">\n    <div flex=\"45\">\n      <img src=\"{{product.productBigImage}}\" id=\"product-big-img\">\n    </div>\n    <div layout=\"column\" layout-align=\"center\" flex=\"50\">\n      <img src=\"{{product.featuredImage}}\" id=\"brand-img\">\n      <h4 id=\"label\">{{product.label}}</h4>\n      <p id=\"description\">{{product.fullDescription}}</p>\n      <div layout=\"column\" class=\"mt-5\">\n        <div layout=\"row\" layout-align=\"center center\">\n          <p class=\"mb-0 mr-5 price\" flex=\"15\">{{product.dynamicPrice |  number:'2.1-5'}} €</p>\n          <md-select placeholder=\"Quantité\" [(ngModel)]=\"selectedVolume\" color=\"accent\" class=\"ml-2\"\n                     *ngIf=\"multipleVolumes\" (change)=\"updateVolumePrice(selectedVolume)\" flex>\n            <md-option *ngFor=\"let volume of prices\" [value]=\"volume.price\">\n              {{volume.label}}\n            </md-option>\n          </md-select>\n          <md-select placeholder=\"Quantité\" [(ngModel)]=\"selectedQty\" color=\"accent\" class=\"ml-5\"\n                     (change)=\"updateValue(selectedQty)\" flex=\"20\">\n            <md-option *ngFor=\"let qty of quantities\" [value]=\"qty\">\n              {{qty}}\n            </md-option>\n          </md-select>\n        </div>\n        <div layout=\"row\" layout-align=\"center center\" class=\"mt-5\">\n          <!--<button md-raised-button class=\"cart-btn mr-2\" (click)=\"bookInShop()\">Book in Shop</button>\n          <button md-raised-button class=\"store-btn mr-2\" (click)=\"goToSignUp()\">Delivery to Concierge Hotel</button>-->\n          <button md-raised-button class=\"cart-btn ml-2\" (click)=\"addProductToCart()\">Add To Cart</button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%\">\n  <img src=\"assets/img/tuktuk.svg\">\n  <button id=\"tuk-btn\" md-raised-button (click)=\"goToLanguage()\" color=\"warn\" class=\"mt-5\">Click Here and Book your trip</button>\n</div>\n"

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{data.product.product}}</h1>\n<div md-dialog-content>\n  <p class=\"price-alert\" *ngIf=\"isEligibleForRefund()\">16.6% of tax refund applied to all NON EU residents ! </p>\n  <p style=\"color: red\">If the selected product is not available, you will be refunded</p>\n  <p>Price: {{data.product.dynamicPrice | number:'1.0-2'}} €</p>\n  <form #form=\"ngForm\" id=\"form\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" aria-describedby=\"firstName\"\n             placeholder=\"First Name\" [(ngModel)]=\"firstName\" required name=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" aria-describedby=\"lastName\"\n             placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required name=\"lastName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\"\n             placeholder=\"+ ...\" [(ngModel)]=\"phone\" required name=\"phone\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"email\"\n             placeholder=\"Email\" [(ngModel)]=\"email\" required name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passport\">Passport Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"passport\" aria-describedby=\"passport\"\n             placeholder=\"Passport Number\" [(ngModel)]=\"passportNumber\" required name=\"passport\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passport\">Date of Birth</label>\n      <my-date-picker name=\"dob\" [options]=\"myDatePickerOptions\"\n                      [(ngModel)]=\"model\" required></my-date-picker>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sel1\">Nationality:</label>\n      <select class=\"form-control\" id=\"sel1\" name=\"sel1\" [(ngModel)]=\"country\" (change)=\"checkContinent(country)\">\n        <option *ngFor=\"let country of allCountries\">{{country}}</option>\n      </select>\n    </div>\n    <div class=\"form-inline mt-4\">\n      <input type=\"text\" class=\"form-control mr-3\" aria-describedby=\"helperI1\"\n             [(ngModel)]=\"HN1\" name=\"helperI1\" style=\"width: 40px\">\n      <input type=\"text\" class=\"form-control\" aria-describedby=\"helperI2\"\n             [(ngModel)]=\"HN2\" name=\"helperI2\" style=\"width: 40px\">\n    </div>\n    <div>\n      <div id=\"card-element\"></div>\n      <div id=\"card-errors\"></div>\n    </div>\n  </form>\n</div>\n<div md-dialog-actions layout=\"row\" layout-align=\"center center\">\n  <div layout=\"row\" *ngIf=\"notPaying; else payingLoader\">\n    <button md-raised-button type=\"submit\" id=\"submit-btn\"  [class.disabled]=\"!form.valid\"\n            (click)=\"handlePayment()\">\n      PAY\n    </button>\n    <button md-button [md-dialog-close] class=\"ml-3\">Cancel</button>\n  </div>\n  <ng-template #payingLoader layout=\"row\" layout-align=\"center center\">\n    <div class=\"spinner\"></div>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\" layout=\"column\" layout-align=\"center center\">\n  <h3 class=\"mb-4 mt-4\" style=\"color: #D81B60\">Tip: Take a picture of this screen with your phone so that you don't get lost</h3>\n  <div layout=\"row\" layout-align=\"space-between center\">\n    <md-card style=\"width: 626px\">\n      <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>Beauty Success Shop</md-card-title>\n        <md-card-subtitle>Directions By Foot: 13 Minutes</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"assets/images/map.png\" alt=\"Photo of map\">\n      <md-card-content>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/up.svg\" class=\"icon-direction\">\n          <p>Prendre la direction nord sur Rue Cambronne</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Tourner à gauche pour rester sur Rue Cambronne</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/round.svg\" class=\"icon-direction\">\n          <p>Au rond-point, prendre la 3e sortie sur Boulevard Garibaldi</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Prendre légèrement à gauche sur Place Henri Queuille</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/up.svg\" class=\"icon-direction\">\n          <p>Continuer sur Rue de Sèvres</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Prendre à gauche sur Boulevard des Invalides<br>\n            Votre destination se trouvera sur la droite.</p>\n        </div>\n      </md-card-content>\n    </md-card>\n    <md-card style=\"width: 626px; height: 690px\">\n      <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>Beauty Success Shop</md-card-title>\n        <md-card-subtitle>Directions By Subway: 7 minutes</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"assets/images/map2.png\" alt=\"Photo of map\">\n      <md-card-content>\n        <p>Prendre la ligne 10 à la station gare d'Austerlitz</p>\n\n        <p>Montez à la station La Motte-Picquet Grenelle</p>\n\n        <p>Sortez à la station Duroc</p>\n\n        <p>Marchez jusqu'au magasin Sèvre Corner situé au 67 Boulevard des invalides</p>\n      </md-card-content>\n\n    </md-card>\n  </div>\n  <div class=\"mt-3 mb-3\" layout=\"row\" layout-align=\"center center\">\n    <button md-raised-button (click)=\"goToMenu()\" class=\"pink-btn\">NO, I WANT TO COME BY TUKTUK</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%\">\n  <h3 class=\"mb-3\">Pick a Language</h3>\n  <div layout=\"row\" layout-align=\"center center\">\n    <button md-raised-button color=\"primary\" class=\"mr-2\" (click)=\"setLanguage('US')\">US</button>\n    <button md-raised-button color=\"primary\" class=\"mr-2\" (click)=\"setLanguage('FR')\">FR</button>\n    <button md-raised-button color=\"primary\" (click)=\"setLanguage('ES')\">ES</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

module.exports = "<ngx-carousel\n  [inputs]=\"carouselOne\"\n  (carouselLoad)=\"carouselTileLoad($event)\">\n  <ngx-item NgxCarouselItem *ngFor=\"let data of carousel\">\n    <img src=\"../../assets/{{data.image}}\">\n  </ngx-item>\n  <button NgxCarouselPrev class='leftRs'>&lt;</button>\n  <button NgxCarouselNext class='rightRs'>&gt;</button>\n</ngx-carousel>\n"

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>AWESOME</h1>\n<div md-dialog-content>\n  <p>This product was Successfully added to your cart</p>\n</div>\n<div md-dialog-actions>\n  <button md-raised-button id=\"close-btn\" [md-dialog-close]=\"true\">COOL</button>\n</div>\n"

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"space-between start\">\n  <ul id=\"parfumBrands\">\n    <li *ngFor=\"let brand of brands\" (click)=\"filterParfums(brand)\">{{brand}}</li>\n  </ul>\n  <div layout=\"row\" layout-wrap layout-align=\"start start\" style=\"width: 80%\">\n    <div *ngFor=\"let parfum of allParfums\">\n      <md-card class=\"product-card\" *ngIf=\"isNotUrl(parfum.image) && parfum.available\">\n        <md-card-header>\n          <md-card-title class=\"title\">{{parfum.brand}}</md-card-title>\n          <md-card-subtitle class=\"desc\">{{parfum.name}}</md-card-subtitle>\n        </md-card-header>\n        <div class=\"img-holder\">\n          <img md-card-image src=\"assets/{{parfum.image}}\">\n        </div>\n        <md-card-content>\n          <p class=\"price\">\n            {{parfum.price}} €\n          </p>\n        </md-card-content>\n        <md-card-footer layout=\"row\" layout-align=\"center center\">\n          <button md-button class=\"cart-btn\" (click)=\"getDetails(parfum)\">See More</button>\n        </md-card-footer>\n      </md-card>\n    </div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"row\" layout-align=\"space-around center\" class=\" wrapper\">\n  <div id=\"classic\" flex=\"45\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/img/options.svg\">\n    <p class=\"mt-5\">When shopping through this computer, you will have access to a wide variety of products, you may\n      either :</p>\n    <ul id=\"options\">\n      <li>Buy the products directly here via a secured payment using your credit card, your products will be shipped at\n        the hotel within 5 hours\n      </li>\n      <li>Order the items here and pick them up in the nearby store (500 meters)</li>\n    </ul>\n  </div>\n  <div class=\"tuktuk\" flex=\"45\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/img/tuktuk.svg\">\n    <p class=\"mt-5 mb-3\">Come as you are, our tuk tuk will give you a tour of the most beautiful monuments in Paris,\n      <strong>you'll\n        end the visit\n        by\n        our boutique</strong></p>\n  </div>\n</div>\n<div layout=\"row\" class=\"mt-5\" layout-align=\"space-around center\">\n  <button md-raised-button id=\"shop-here-btn\" (click)=\"shopHere()\">Shop Here</button>\n  <button id=\"tuktuk-btn\" md-raised-button (click)=\"orderTuk()\">TUKTUK</button>\n</div>\n"

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\" layout=\"column\" layout-align=\"center center\">\n  <div>\n    <h2>Welcome on Board ! </h2>\n    <h5>First Name : </h5>\n    <h6 class=\"mt-3 mb-4\">{{firstName}}</h6>\n    <h5>Last Name : </h5>\n    <h6 class=\"mt-3 mb-4\">{{lastName}}</h6>\n    <h5>Number of Passengers : </h5>\n    <h6 class=\"mt-3 mb-4\">{{travelers}} Passagers</h6>\n    <h6 class=\"mt-3\">Please, <br>\n      present this ticket<br>\n      to the driver.\n      <h2 class=\"mt-4\">Enjoy your trip ! </h2>\n    </h6>\n  </div>\n</div>\n"

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\">\n  <img class=\"mt-5 mb-5\" src=\"assets/images/valid_payment.svg\" style=\"height: 300px\">\n  <h3 class=\"conf\">Your payment has been successfully received, a driver will bring your article(s) by the end of the day..</h3>\n</div>\n"

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%; margin-bottom: 150px\">\n  <div class=\"wrapper-with-shadow\" style=\"width: 650px\">\n    <div class=\"form-group mt-5\">\n      <label for=\"hours\">How many people will travel :</label>\n      <select class=\"form-control\" id=\"travelers\" [(ngModel)]=\"numberOfTravelers\">\n        <option *ngFor=\"let traveler of travelers\">{{traveler}}</option>\n      </select>\n      <p style=\"color: red\" *ngIf=\"numberOfTravelers\" class=\"mt-3\">\n        Warning: only adults above 16 years old are\n        allowed</p>\n      <label for=\"hours\">Pick an hour:</label>\n      <select class=\"form-control\" id=\"hours\" [(ngModel)]=\"selectedHour\">\n        <option *ngIf=\"isMorning\">2PM</option>\n        <option *ngIf=\"isAfternoon\">6PM</option>\n      </select>\n      <div class=\"form-group row mt-3\" >\n        <label for=\"firstName\" class=\"col-3 col-form-label\">First Name</label>\n        <div class=\"col-9\">\n          <input class=\"form-control\" [(ngModel)]=\"firstName\" type=\"text\" value=\"First Name\" id=\"firstName\">\n        </div>\n      </div>\n      <div class=\"form-group row mt-3\">\n        <label for=\"lastName\" class=\"col-3 col-form-label\">Last Name</label>\n        <div class=\"col-9\">\n          <input class=\"form-control\" [(ngModel)]=\"lastName\" type=\"text\" value=\"Last Name\" id=\"lastName\">\n        </div>\n      </div>\n      <div layout=\"row\" layout-align=\"center\" class=\"mt-3\">\n        <button md-raised-button color=\"accent\" (click)=\"goBack()\" class=\"mr-1\">Cancel</button>\n        <button md-raised-button color=\"primary\" class=\"ml-1\" (click)=\"bookTuk()\" [disabled]=\"!formIsComplete()\">Order TUKTUK\n        </button>\n      </div>\n      <div class=\"mt-5\" *ngIf=\"ticketId\" layout=\"row\" layout-align=\"center start\">\n        <img src=\"../../../assets/img/valid.svg\" class=\"mr-4\" style=\"height: 40px; margin-top: 3%\">\n        <div>\n          <p>Hi {{firstName}}, your TukTuk has been ordered </p>\n          <p class=\"mb-4\">He will pick you up at {{selectedHour}} by the reception</p>\n        </div>\n      </div>\n      <div layout=\"row\" layout-align=\"center center\" *ngIf=\"ticketId\">\n        <button md-raised-button class=\"mt-4\" color=\"accent\" (click)=\"print()\">Print Ticket</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.1f462d60eb701e7619e1.png";

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__countries__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_payment_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var InscriptionComponent = (function () {
    function InscriptionComponent(paymentSrv, dialogRef, data, router) {
        var _this = this;
        this.paymentSrv = paymentSrv;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.submitted = false;
        this.notPaying = true;
        this.allCountries = __WEBPACK_IMPORTED_MODULE_1__countries__["a" /* Countries */].countryList;
        this.euCountries = __WEBPACK_IMPORTED_MODULE_1__countries__["a" /* Countries */].euCountries;
        this.postPayment = function (token) {
            var label = "payment from " + _this.lastName + " " + _this.firstName;
            var price = Math.floor(_this.data.product.dynamicPrice * 100);
            _this.paymentSrv.postPayment(price, token, label)
                .subscribe(function (payment) {
                _this.notPaying = !_this.notPaying;
                if (payment.status === 200) {
                    _this.dialogRef.close();
                    _this.router.navigate(['/valid_payment']);
                }
                else {
                    alert('your payment could not be made, please try again');
                }
            }, function (error) {
                alert(error);
                _this.notPaying = !_this.notPaying;
            });
        };
        this.grabCC = function () {
            var anchor = document.getElementById('card-element');
            var inputs = anchor.childNodes;
            console.log(inputs);
        };
        this.submitPayment = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, token, error, errorField;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.notPaying = !this.notPaying;
                        return [4 /*yield*/, this.stripe.createToken(this.card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        errorField = document.getElementById('card-errors');
                        if (error) {
                            this.notPaying = !this.notPaying;
                            errorField.textContent = error.message;
                        }
                        else {
                            this.postPayment(token.id);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.displayPayment = function () {
            _this.stripe = Stripe(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].stripeKey);
            var elements = _this.stripe.elements();
            var style = {
                base: {
                    fontSize: '16px',
                    lineHeight: '24px'
                },
            };
            _this.card = elements.create('card', { style: style });
            _this.card.addEventListener('change', function (_a) {
                var error = _a.error;
                var displayError = document.getElementById('card-errors');
                if (error) {
                    displayError.textContent = error.message;
                }
                else {
                    displayError.textContent = '';
                }
            });
            var anchor = document.getElementById('card-element');
            _this.card.mount(anchor);
        };
        this.newLead = function () {
            var lead = {
                'firstName': _this.firstName,
                'lastName': _this.lastName,
                'passeport': _this.passportNumber,
                'country': _this.country,
                'email': _this.email,
                'areaCode': _this.areaCode,
                'helperName': _this.HN1 + _this.HN2,
                'phone': _this.phone,
                'amount_spent': _this.data.product.dynamicPrice
            };
            _this.paymentSrv.createLead(lead).subscribe(function (res) {
                console.log(res);
            });
        };
        this.checkContinent = function (country) {
            console.log(_this.data.product);
            _this.isNotEuropeanCountry = _this.euCountries.indexOf(country) > 1;
        };
        this.data.product.dynamicPrice = this.data.product.dynamicPrice ||
            parseInt(window.localStorage.getItem('cartPrice'), 10);
    }
    InscriptionComponent.prototype.ngAfterContentInit = function () {
        this.displayPayment();
    };
    InscriptionComponent.prototype.isEligibleForRefund = function () {
        return (!this.isNotEuropeanCountry && this.data.product.dynamicPrice > 175);
    };
    InscriptionComponent.prototype.handlePayment = function () {
        this.submitted = true;
        this.grabCC();
        //this.router.navigate(['/valid_payment']);
        // this.submitPayment().then((status) => console.log(status));
        //  this.newLead();
    };
    return InscriptionComponent;
}());
InscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-inscription',
        template: __webpack_require__(501),
        styles: [__webpack_require__(412)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MdDialogRef */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], InscriptionComponent);

var _a, _b, _c;
//# sourceMappingURL=inscription.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetcherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetcherService = (function () {
    function FetcherService(http) {
        this.http = http;
        this.parfums = 'assets/jsons/parfums.json';
        this.productDetails = 'https://beautyscrapr.herokuapp.com/price?url=';
    }
    FetcherService.prototype.getProductDetails = function (url) {
        var newUrl = this.productDetails + url;
        return this.http.get(newUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not fetch product details'); });
    };
    FetcherService.prototype.getCarousel = function () {
        var carouselUrl = '../assets/jsons/carousel/carousel.json';
        return this.http.get(carouselUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'could not retrieve local image for carousel'); });
    };
    return FetcherService;
}());
FetcherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* CustomHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* CustomHttpService */]) === "function" && _a || Object])
], FetcherService);

var _a;
//# sourceMappingURL=fetcher.service.js.map

/***/ })

},[766]);
//# sourceMappingURL=main.bundle.js.map