(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-canvas></app-canvas>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/canvas/canvas.component */ "./src/app/components/canvas/canvas.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layers/layers.component */ "./src/app/components/layers/layers.component.ts");
/* harmony import */ var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/splash/splash.component */ "./src/app/components/splash/splash.component.ts");
/* harmony import */ var _components_trails_trails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/trails/trails.component */ "./src/app/components/trails/trails.component.ts");
/* harmony import */ var _directives_layers_layers_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/layers/layers.directive */ "./src/app/directives/layers/layers.directive.ts");
/* harmony import */ var _directives_splash_splash_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/splash/splash.directive */ "./src/app/directives/splash/splash.directive.ts");
/* harmony import */ var _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/layer/layer.service */ "./src/app/services/layer/layer.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_marker_marker_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/marker/marker.service */ "./src/app/services/marker/marker.service.ts");
/* harmony import */ var _services_markerDisplay_markerDisplay_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/markerDisplay/markerDisplay.service */ "./src/app/services/markerDisplay/markerDisplay.service.ts");
/* harmony import */ var _services_splash_splash_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/splash/splash.service */ "./src/app/services/splash/splash.service.ts");
/* harmony import */ var _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/trails/trails.service */ "./src/app/services/trails/trails.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__["CanvasComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_6__["LayersComponent"],
                _directives_layers_layers_directive__WEBPACK_IMPORTED_MODULE_9__["LayersDirective"],
                _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_7__["SplashComponent"],
                _directives_splash_splash_directive__WEBPACK_IMPORTED_MODULE_10__["SplashDirective"],
                _components_trails_trails_component__WEBPACK_IMPORTED_MODULE_8__["TrailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [
                _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_11__["LayerService"],
                _services_map_map_service__WEBPACK_IMPORTED_MODULE_12__["MapService"],
                _services_marker_marker_service__WEBPACK_IMPORTED_MODULE_13__["MarkerService"],
                _services_markerDisplay_markerDisplay_service__WEBPACK_IMPORTED_MODULE_14__["MarkerDisplayService"],
                _services_splash_splash_service__WEBPACK_IMPORTED_MODULE_15__["SplashService"],
                _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_16__["TrailsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/canvas/canvas.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.mapContainer,\r\ndiv#mapContainer {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/canvas/canvas.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class='mapContainer'>\r\n\t<div id='mapContainer'></div>\r\n\t<app-splash></app-splash>\r\n\t<app-layers></app-layers>\r\n\t<app-trails></app-trails>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/canvas/canvas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.ts ***!
  \*******************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_layers_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/layers.config */ "./src/config/layers.config.ts");
/* harmony import */ var _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layer/layer.service */ "./src/app/services/layer/layer.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_marker_marker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/marker/marker.service */ "./src/app/services/marker/marker.service.ts");
/* harmony import */ var _services_splash_splash_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/splash/splash.service */ "./src/app/services/splash/splash.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(httpClient, layerService, mapService, markerService, splashService) {
        this.httpClient = httpClient;
        this.layerService = layerService;
        this.mapService = mapService;
        this.markerService = markerService;
        this.splashService = splashService;
        this.layers = _config_layers_config__WEBPACK_IMPORTED_MODULE_3__["layers"];
        this.biosphere = this.layers.biosphere;
        this.office = this.layers.office;
        this.places = this.layers.places;
        this.trails = this.layers.trails;
    }
    CanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"](this.mapService.mapOptions)
            .addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["NavigationControl"](), this.mapService.navigationControlPosition)
            .on('styledata', function () {
            if (_this.layerService.layers.length === _this.layers.geojsonLayerCount &&
                _this.splashService.splashElement.className === 'active') {
                _this.layerService.createLayersHash();
                _this.splashService.hideSplash();
            }
            return true;
        })
            .on('load', function () {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            params = params.set('fields', _this.biosphere.fields);
            params = params.set('table', _this.biosphere.id);
            _this.httpClient.get(_this.layers.route, { params: params })
                .subscribe(function (data) {
                if (data) {
                    var biosphere = _this.biosphere.layer;
                    biosphere.source.data = data;
                    _this.mapService.map.addLayer(biosphere);
                    _this.layerService.layers.push(biosphere);
                }
                else
                    console.error('Data Error:\n', data);
                return true;
            }, function (err) {
                return console.error('Query Failed:\n', err.error);
            });
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            params = params.set('fields', _this.office.fields);
            params = params.set('table', _this.office.id);
            _this.httpClient.get(_this.layers.route, { params: params })
                .subscribe(function (data) {
                data ?
                    _this.markerService.setMarkers(_this.office.id, data) :
                    console.error('Data Error:\n', data);
                return true;
            }, function (err) {
                return console.error('Query Failed:\n', err.error);
            });
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            params = params.set('fields', _this.places.fields);
            params = params.set('table', _this.places.id);
            _this.httpClient.get(_this.layers.route, { params: params })
                .subscribe(function (data) {
                data ?
                    _this.markerService.setMarkers(_this.places.id, data) :
                    console.error('Data Error:\n', data);
                return true;
            }, function (err) {
                return console.error('Query Failed:\n', err.error);
            });
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            params = params.set('fields', _this.trails.fields);
            params = params.set('table', _this.trails.id);
            _this.httpClient.get(_this.layers.route, { params: params })
                .subscribe(function (data) {
                if (data) {
                    var trails = _this.trails.layer;
                    trails.source.data = data;
                    _this.mapService.map.addLayer(trails);
                    _this.layerService.layers.push(trails);
                    _this.markerService.setMarkers(_this.trails.id, data);
                }
                else
                    console.error('Data Error:\n', data);
                return true;
            }, function (err) {
                return console.error('Query Failed:\n', err.error);
            });
            return true;
        });
    };
    CanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/components/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/components/canvas/canvas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_4__["LayerService"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _services_marker_marker_service__WEBPACK_IMPORTED_MODULE_6__["MarkerService"],
            _services_splash_splash_service__WEBPACK_IMPORTED_MODULE_7__["SplashService"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.headerContainer {\r\n    background: rgb(120,110,100);\r\n    font-family: 'Orbitron', sans-serif;\r\n    height: 45px;\r\n    width: 100%;\r\n}\r\n\r\nsection.headerContainer img.logo {\r\n    margin: 0;\r\n    padding: 4px 0 0 5px;\r\n    float: left;\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\nsection.headerContainer div.name {\r\n    padding: 12px 0 0 8px;\r\n    float: left;\r\n    font-size: 1.25em;\r\n}\r\n\r\nsection.headerContainer div.title {\r\n    padding: 15px 0 0 20px;\r\n    color: rgb(160,0,0);\r\n    float: left;\r\n    font-size: 1em;\r\n}\r\n\r\nsection.headerContainer a.repo {\r\n    padding: 15px 10px 0 0;\r\n    color: rgb(0,0,0);\r\n    float: right;\r\n    font-size: .8em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class='headerContainer'>\r\n\t<img class='logo' src='./assets/logo.png' alt='Geospatial Web'>\r\n\t<div class='name'>Geospatial Web</div>\r\n\t<div class='title'>ES6 | Node | Express | Angular 6 | TypeScript | Mapbox GL | PostGIS | Docker</div>\r\n\t<a class='repo' href='https://github.com/geospatialweb/Angular' target='_blank'>GitHub Repository</a>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layers/layers.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/layers/layers.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.layers {\r\n    position: absolute;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    left: 10px;\r\n    top: 120px;\r\n}\r\n\r\nul.layers div {\r\n    display: block;\r\n    padding: 5px 0 5px 40px;\r\n    background: rgb(160,150,140);\r\n    border: 1px solid rgb(187,187,187);\r\n    border-bottom-width: 0;\r\n    color: rgb(60,75,90);\r\n    cursor: pointer;\r\n    font-size: 0.95em;\r\n    text-decoration: none;\r\n    width: 90px;\r\n}\r\n\r\nul.layers div:hover {\r\n    background: rgb(140,130,120);\r\n}\r\n\r\nul.layers li:first-child div {\r\n    border-radius: 3px 3px 0 0;\r\n    -webkit-border-radius: 3px 3px 0 0;\r\n}\r\n\r\nul.layers li:last-child div {\r\n    border-bottom-width: 1px;\r\n    border-radius: 0 0 3px 3px;\r\n    -webkit-border-radius: 0 0 3px 3px;\r\n}\r\n\r\nul.layers li div.terrain.active,\r\nul.layers li div.biosphere.active,\r\nul.layers li div.office.active,\r\nul.layers li div.places.active,\r\nul.layers li div.trails.active {\r\n    background: rgb(120,110,100);\r\n    color: rgb(216,216,216);\r\n}\r\n\r\ndiv.biosphere-icon {\r\n    position: absolute;\r\n    left: 22px;\r\n    top: 155px;\r\n}\r\n\r\ndiv.office-icon {\r\n    position: absolute;\r\n    left: 22px;\r\n    top: 183px;\r\n}\r\n\r\ndiv.places-icon {\r\n    position: absolute;\r\n    left: 22px;\r\n    top:212px;\r\n}\r\n\r\ndiv.trails-icon {\r\n    position: absolute;\r\n    left: 22px;\r\n    top: 241px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/layers/layers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layers/layers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class='layers'>\r\n\t<li (click)=\"setLayer('terrain', $event)\">\r\n\t\t<div appTerrain class='terrain'>Terrain View</div>\r\n\t</li>\r\n\r\n\t<li (click)=\"setLayer('biosphere', $event)\">\r\n\t\t<div appBiosphere class='biosphere'>Biosphere</div>\r\n\t</li>\r\n\r\n\t<li (click)=\"setLayer('office', $event)\">\r\n\t\t<div appOffice class='office'>Office</div>\r\n\t</li>\r\n\r\n\t<li (click)=\"setLayer('places', $event)\">\r\n\t\t<div appPlaces class='places'>Places</div>\r\n\t</li>\r\n\r\n\t<li (click)=\"setLayer('trails', $event)\">\r\n\t\t<div appTrails class='trails'>Trails</div>\r\n\t</li>\r\n\r\n\t<li (click)=\"setLayer('', $event)\">\r\n\t\t<div>Reset Map</div>\r\n\t</li>\r\n</ul>\r\n\r\n<div class='biosphere-icon' (click)=\"setLayer('biosphere', $event)\">\r\n\t<img src='./assets/biosphere.png' height='18' width='18'>\r\n</div>\r\n\r\n<div class='office-icon' (click)=\"setLayer('office', $event)\">\r\n\t<img src='./assets/office.png' height='20' width='18'>\r\n</div>\r\n\r\n<div class='places-icon' (click)=\"setLayer('places', $event)\">\r\n\t<img src='./assets/places.png' height='20' width='18'>\r\n</div>\r\n\r\n<div class='trails-icon' (click)=\"setLayer('trails', $event)\">\r\n\t<img src='./assets/trails.png' height='20' width='18'>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/layers/layers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layers/layers.component.ts ***!
  \*******************************************************/
/*! exports provided: LayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersComponent", function() { return LayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layer/layer.service */ "./src/app/services/layer/layer.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_markerDisplay_markerDisplay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/markerDisplay/markerDisplay.service */ "./src/app/services/markerDisplay/markerDisplay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayersComponent = /** @class */ (function () {
    function LayersComponent(layerService, mapService, markerDisplayService, rendererFactory) {
        this.layerService = layerService;
        this.mapService = mapService;
        this.markerDisplayService = markerDisplayService;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    LayersComponent.prototype.setLayer = function (layer, event) {
        var _this = this;
        if (event)
            event.stopPropagation();
        if (layer) {
            var layerActive = void 0;
            if (this.layerService.layerElements[this.layerService.layerElementsHash[layer]].className === layer + " active") {
                this.renderer.removeClass(this.layerService.layerElements[this.layerService.layerElementsHash[layer]], 'active');
                layerActive = false;
            }
            else {
                this.renderer.addClass(this.layerService.layerElements[this.layerService.layerElementsHash[layer]], 'active');
                layerActive = true;
            }
            if (layer === 'terrain') {
                /* change between 'dark' and 'outdoors' map styles (basemaps) */
                this.mapService.changeStyle();
                /* hide active markers when changing map styles for aesthetic purposes */
                this.markerDisplayService.hideMarkers();
                /* show active markers after changing map styles for aesthetic purposes */
                setTimeout(function () { return _this.markerDisplayService.showMarkers(); }, 1200);
            }
            else if (layer === 'biosphere' || layer === 'trails') {
                if (layerActive) {
                    this.mapService.map.setLayoutProperty(layer, 'visibility', 'visible');
                    this.layerService.layers[this.layerService.layersHash[layer]].layout.visibility = 'visible';
                    if (layer === 'trails')
                        this.markerDisplayService.addMarkers(layer);
                }
                else {
                    this.mapService.map.setLayoutProperty(layer, 'visibility', 'none');
                    this.layerService.layers[this.layerService.layersHash[layer]].layout.visibility = 'none';
                    if (layer === 'trails')
                        this.markerDisplayService.removeMarkers(layer);
                }
            }
            else if (layer === 'office' || layer === 'places') {
                layerActive ?
                    this.markerDisplayService.addMarkers(layer) :
                    this.markerDisplayService.removeMarkers(layer);
            }
        }
        else
            window.location.reload(true);
    };
    LayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layers',
            template: __webpack_require__(/*! ./layers.component.html */ "./src/app/components/layers/layers.component.html"),
            styles: [__webpack_require__(/*! ./layers.component.css */ "./src/app/components/layers/layers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layer_layer_service__WEBPACK_IMPORTED_MODULE_1__["LayerService"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            _services_markerDisplay_markerDisplay_service__WEBPACK_IMPORTED_MODULE_3__["MarkerDisplayService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]])
    ], LayersComponent);
    return LayersComponent;
}());



/***/ }),

/***/ "./src/app/components/splash/splash.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/splash/splash.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    position: absolute;\r\n    background: rgba(0,0,0,.5);\r\n    visibility: hidden;\r\n    z-index: 2;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\ndiv.active,\r\ndiv.visible {\r\n    visibility: visible;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/splash/splash.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/splash/splash.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appSplash class='active'></div>\r\n"

/***/ }),

/***/ "./src/app/components/splash/splash.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/splash/splash.component.ts ***!
  \*******************************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
    }
    SplashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-splash',
            template: __webpack_require__(/*! ./splash.component.html */ "./src/app/components/splash/splash.component.html"),
            styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/components/splash/splash.component.css")]
        })
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "./src/app/components/trails/trails.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/trails/trails.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select.trails {\r\n    position: absolute;\r\n    border-style: none;\r\n    left: 10px;\r\n    top: 310px;\r\n    width: 132px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/trails/trails.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/trails/trails.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select class='trails' (change)='setTrail($event)'>\r\n    <option *ngFor='let trail of appTrails'>{{ trail.name }}</option>\r\n</select>\r\n"

/***/ }),

/***/ "./src/app/components/trails/trails.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/trails/trails.component.ts ***!
  \*******************************************************/
/*! exports provided: TrailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailsComponent", function() { return TrailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/trails/trails.service */ "./src/app/services/trails/trails.service.ts");
/* harmony import */ var _config_trails_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/trails.config */ "./src/config/trails.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrailsComponent = /** @class */ (function () {
    function TrailsComponent(mapService, trailsService) {
        this.mapService = mapService;
        this.trailsService = trailsService;
        this.trails = _config_trails_config__WEBPACK_IMPORTED_MODULE_3__["trails"];
        this.appTrails = this.trails;
    }
    TrailsComponent.prototype.ngOnInit = function () {
        this.trailsService.createTrailsHash(this.trails);
    };
    TrailsComponent.prototype.setTrail = function (event) {
        if (event) {
            event.stopPropagation();
            var trail = event.target.value;
            this.mapService.map.flyTo({
                center: this.trails[this.trailsService.trailsHash[trail]].center,
                zoom: this.trails[this.trailsService.trailsHash[trail]].zoom
            });
        }
    };
    TrailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trails',
            template: __webpack_require__(/*! ./trails.component.html */ "./src/app/components/trails/trails.component.html"),
            styles: [__webpack_require__(/*! ./trails.component.css */ "./src/app/components/trails/trails.component.css")]
        }),
        __metadata("design:paramtypes", [_services_map_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_2__["TrailsService"]])
    ], TrailsComponent);
    return TrailsComponent;
}());



/***/ }),

/***/ "./src/app/directives/layers/layers.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/layers/layers.directive.ts ***!
  \*******************************************************/
/*! exports provided: LayersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersDirective", function() { return LayersDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layer/layer.service */ "./src/app/services/layer/layer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayersDirective = /** @class */ (function () {
    function LayersDirective(el, layerService) {
        this.el = el;
        this.layerService = layerService;
    }
    LayersDirective.prototype.ngOnInit = function () {
        this.layerService.layerElements.push(this.el.nativeElement);
    };
    LayersDirective.prototype.ngAfterViewInit = function () {
        this.layerService.createLayerElementsHash();
    };
    LayersDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTerrain], [appBiosphere], [appOffice], [appPlaces], [appTrails]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_1__["LayerService"]])
    ], LayersDirective);
    return LayersDirective;
}());



/***/ }),

/***/ "./src/app/directives/splash/splash.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/splash/splash.directive.ts ***!
  \*******************************************************/
/*! exports provided: SplashDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashDirective", function() { return SplashDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_splash_splash_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/splash/splash.service */ "./src/app/services/splash/splash.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashDirective = /** @class */ (function () {
    function SplashDirective(el, splashService) {
        this.el = el;
        this.splashService = splashService;
    }
    SplashDirective.prototype.ngOnInit = function () {
        this.splashService.splashElement = this.el.nativeElement;
    };
    SplashDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSplash]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_splash_splash_service__WEBPACK_IMPORTED_MODULE_1__["SplashService"]])
    ], SplashDirective);
    return SplashDirective;
}());



/***/ }),

/***/ "./src/app/services/layer/layer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/layer/layer.service.ts ***!
  \*************************************************/
/*! exports provided: LayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerService", function() { return LayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayerService = /** @class */ (function () {
    function LayerService() {
        this.layers = [];
        this.layersHash = {};
        this.layerElements = [];
        this.layerElementsHash = {};
    }
    LayerService.prototype.createLayersHash = function () {
        var _this = this;
        this.layers.map(function (layer, index) {
            return _this.layersHash[layer.id] = index;
        });
    };
    LayerService.prototype.createLayerElementsHash = function () {
        var _this = this;
        this.layerElements.map(function (el, index) {
            _this.layerElementsHash[el.className] = index;
            return true;
        });
    };
    LayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LayerService);
    return LayerService;
}());



/***/ }),

/***/ "./src/app/services/map/map.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/map/map.service.ts ***!
  \*********************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_canvas_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/canvas.config */ "./src/config/canvas.config.ts");
/* harmony import */ var _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/layer/layer.service */ "./src/app/services/layer/layer.service.ts");
/* harmony import */ var _splash_splash_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../splash/splash.service */ "./src/app/services/splash/splash.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapService = /** @class */ (function () {
    function MapService(layerService, splashService) {
        this.layerService = layerService;
        this.splashService = splashService;
        this.canvas = _config_canvas_config__WEBPACK_IMPORTED_MODULE_2__["canvas"];
        this.navigationControl = _config_canvas_config__WEBPACK_IMPORTED_MODULE_2__["canvas"].navigationControl;
        this.styles = _config_canvas_config__WEBPACK_IMPORTED_MODULE_2__["canvas"].styles;
        this.mapStyle = this.styles.default;
        this.mapOptions = {
            container: this.canvas.container,
            style: this.mapStyle,
            center: this.canvas.center,
            zoom: this.canvas.zoom
        };
        this.navigationControlPosition = this.navigationControl.position;
        mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["accessToken"] = this.canvas.accessToken;
    }
    /* change between 'dark' and 'outdoors' map styles (basemaps) */
    MapService.prototype.changeStyle = function () {
        var _this = this;
        this.splashService.addSplash();
        this.mapStyle === this.styles.default ?
            this.mapStyle = this.styles.outdoors :
            this.mapStyle = this.styles.default;
        this.map.setStyle(this.mapStyle);
        /* add layers to new map style after delay for aesthetic purposes */
        this.layerService.layers.map(function (layer, index) {
            return setTimeout(function () {
                _this.map.addLayer(layer);
                if (layer.layout.visibility === 'visible')
                    _this.map.setLayoutProperty(layer.id, 'visibility', 'visible');
                if (index === _this.layerService.layers.length - 1)
                    _this.splashService.removeSplash();
                return true;
            }, 1000);
        });
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_layer_layer_service__WEBPACK_IMPORTED_MODULE_3__["LayerService"],
            _splash_splash_service__WEBPACK_IMPORTED_MODULE_4__["SplashService"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/marker/marker.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/marker/marker.service.ts ***!
  \***************************************************/
/*! exports provided: MarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerService", function() { return MarkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerService = /** @class */ (function () {
    function MarkerService(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.markers = [];
        this.markersHash = {};
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    MarkerService.prototype.createMarkersHash = function () {
        var _this = this;
        this.markers.map(function (marker, index) {
            var el = marker[0].getElement();
            _this.markersHash[el.id] = index;
            return true;
        });
    };
    MarkerService.prototype.setMarkers = function (layer, data) {
        var _this = this;
        var markers = [];
        data.features.map(function (feature) {
            var el = _this.renderer.createElement('div');
            el.id = layer;
            el.className = el.id + "-marker";
            el.title = feature.properties.name;
            if (layer === 'office' || layer === 'places') {
                markers.push(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"](el)
                    .setLngLat(feature.geometry.coordinates)
                    .setPopup(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Popup"]({
                    offset: 15
                })
                    .setHTML("<b>" + feature.properties.name + "</b><br>" + feature.properties.description)));
            }
            else if (layer === 'trails') {
                markers.push(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"](el)
                    .setLngLat([feature.properties.lng, feature.properties.lat])
                    .setPopup(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Popup"]({
                    offset: 15
                })
                    .setHTML("<b>" + feature.properties.name + "</b><br>" + feature.properties.description)));
            }
            return true;
        });
        this.markers.push(markers);
        this.createMarkersHash();
    };
    MarkerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]])
    ], MarkerService);
    return MarkerService;
}());



/***/ }),

/***/ "./src/app/services/markerDisplay/markerDisplay.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/markerDisplay/markerDisplay.service.ts ***!
  \*****************************************************************/
/*! exports provided: MarkerDisplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerDisplayService", function() { return MarkerDisplayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _marker_marker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marker/marker.service */ "./src/app/services/marker/marker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarkerDisplayService = /** @class */ (function () {
    function MarkerDisplayService(mapService, markerService) {
        this.mapService = mapService;
        this.markerService = markerService;
    }
    MarkerDisplayService.prototype.addMarkers = function (layer) {
        var _this = this;
        this.markerService.markers[this.markerService.markersHash[layer]]
            .map(function (marker) { return marker.addTo(_this.mapService.map); });
    };
    MarkerDisplayService.prototype.removeMarkers = function (layer) {
        this.markerService.markers[this.markerService.markersHash[layer]]
            .map(function (marker) { return marker.remove(); });
    };
    MarkerDisplayService.prototype.hideMarkers = function () {
        var _this = this;
        this.markerService.markers.map(function (marker) {
            var id = marker[0].getElement().id;
            var el = document.querySelectorAll("div." + id + "-marker");
            if (el.length) {
                _this.removeMarkers(id);
                marker.hidden = true;
            }
            return true;
        });
    };
    MarkerDisplayService.prototype.showMarkers = function () {
        var _this = this;
        this.markerService.markers.map(function (marker) {
            if (marker.hidden) {
                var id = marker[0].getElement().id;
                _this.addMarkers(id);
                marker.hidden = false;
            }
            return true;
        });
    };
    MarkerDisplayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_map_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _marker_marker_service__WEBPACK_IMPORTED_MODULE_2__["MarkerService"]])
    ], MarkerDisplayService);
    return MarkerDisplayService;
}());



/***/ }),

/***/ "./src/app/services/splash/splash.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/splash/splash.service.ts ***!
  \***************************************************/
/*! exports provided: SplashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashService", function() { return SplashService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layer_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layer/layer.service */ "./src/app/services/layer/layer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashService = /** @class */ (function () {
    function SplashService(layerService, rendererFactory) {
        this.layerService = layerService;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    SplashService.prototype.addSplash = function () {
        this.renderer.addClass(this.splashElement, 'visible');
    };
    SplashService.prototype.removeSplash = function () {
        this.renderer.removeClass(this.splashElement, 'visible');
    };
    SplashService.prototype.hideSplash = function () {
        this.renderer.removeClass(this.splashElement, 'active');
        this.renderer.addClass(this.layerService.layerElements[this.layerService.layerElementsHash['biosphere']], 'active');
    };
    SplashService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_layer_layer_service__WEBPACK_IMPORTED_MODULE_1__["LayerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]])
    ], SplashService);
    return SplashService;
}());



/***/ }),

/***/ "./src/app/services/trails/trails.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/trails/trails.service.ts ***!
  \***************************************************/
/*! exports provided: TrailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailsService", function() { return TrailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrailsService = /** @class */ (function () {
    function TrailsService() {
        this.trailsHash = {};
    }
    TrailsService.prototype.createTrailsHash = function (trails) {
        var _this = this;
        trails.map(function (trail, index) {
            _this.trailsHash[trail.name] = index;
            return true;
        });
    };
    TrailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TrailsService);
    return TrailsService;
}());



/***/ }),

/***/ "./src/config/canvas.config.ts":
/*!*************************************!*\
  !*** ./src/config/canvas.config.ts ***!
  \*************************************/
/*! exports provided: canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
var canvas = {
    accessToken: 'pk.eyJ1IjoiZ2Vvc3BhdGlhbHdlYiIsImEiOiJ6WGdOUFRvIn0.GoVRwZq5EfVsLNGyCqgZTw',
    center: [-76.3, 44.45],
    container: 'mapContainer',
    navigationControl: {
        position: 'top-left'
    },
    styles: {
        default: 'mapbox://styles/mapbox/dark-v9',
        outdoors: 'mapbox://styles/mapbox/outdoors-v9'
    },
    zoom: 9
};


/***/ }),

/***/ "./src/config/layers.config.ts":
/*!*************************************!*\
  !*** ./src/config/layers.config.ts ***!
  \*************************************/
/*! exports provided: layers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layers", function() { return layers; });
var layers = {
    route: '/layers',
    geojsonLayerCount: 2,
    biosphere: {
        id: 'biosphere',
        fields: 'name, description, ST_AsGeoJSON(geom)',
        layer: {
            id: 'biosphere',
            type: 'fill',
            source: {
                type: 'geojson'
            },
            layout: {
                visibility: 'visible'
            },
            paint: {
                'fill-color': '#090',
                'fill-opacity': .3,
                'fill-outline-color': '#000'
            }
        }
    },
    trails: {
        id: 'trails',
        fields: 'name, description, lat, lng, ST_AsGeoJSON(geom)',
        layer: {
            id: 'trails',
            type: 'line',
            source: {
                type: 'geojson'
            },
            layout: {
                visibility: 'none'
            },
            paint: {
                'line-color': '#aa0000',
                'line-width': 2
            }
        }
    },
    office: {
        id: 'office',
        fields: 'name, description, ST_AsGeoJSON(geom)'
    },
    places: {
        id: 'places',
        fields: 'name, description, ST_AsGeoJSON(geom)'
    }
};


/***/ }),

/***/ "./src/config/trails.config.ts":
/*!*************************************!*\
  !*** ./src/config/trails.config.ts ***!
  \*************************************/
/*! exports provided: trails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trails", function() { return trails; });
var trails = [
    {
        name: 'Select Trail',
        center: null,
        zoom: null
    },
    {
        name: 'Blue Mountain',
        center: [-76.04, 44.508],
        zoom: 12
    },
    {
        name: 'Charleston Lake',
        center: [-76.04, 44.508],
        zoom: 12
    },
    {
        name: 'Lemoine Point',
        center: [-76.61, 44.223],
        zoom: 14
    },
    {
        name: 'Lyn Valley',
        center: [-75.75, 44.575],
        zoom: 12
    },
    {
        name: 'Mac Johnson',
        center: [-75.75, 44.575],
        zoom: 12
    },
    {
        name: 'Seeley\'s Bay',
        center: [-76.22, 44.485],
        zoom: 13
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\John\Documents\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map