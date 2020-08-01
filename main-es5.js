function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./admin/admin.module": ["./src/app/admin/admin.module.ts", "admin-admin-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- <div>\n  <div class=\"header\" [ngStyle]=\"{'margin-left': (isToggle) ? '250px' : '0px', 'width': (isToggle) ? '250px' : '0px'}\">\n    <span style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\">&#9776; open</span>\n  </div>\n</div> -->\n<nav class=\"navbar justify-content-between navbar-dark bg-dark\">\n  <a class=\"navbar-brand\">\n    <div class=\"header\" *ngIf=\"!isToggle\" [ngStyle]=\"{'margin-left': (isToggle) ? '250px' : '0px', 'width': (isToggle) ? '250px' : '0px'}\">\n      <span style=\"font-size:30px;cursor:pointer;color: #fff\" (click)=\"openNav()\">&#9776;</span>\n    </div>\n  </a>\n  <form class=\"form-inline\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"logout()\">Logout</button>\n  </form>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sidebar/sidebar.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sidebar/sidebar.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"mySidenav\" class=\"sidenav\" [ngStyle]=\"{'width': (isToggle) ? '250px' : '0px'}\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n\n  <ul class=\"menu\">\n    <li (click)=\"navigate('dashboard')\">Dashboard</li>\n    <li (click)=\"navigate('type')\">Type</li>\n    <li (click)=\"navigate('slider')\">Slider</li>\n    <li (click)=\"navigate('feature')\">Featured Product</li>\n    <li (click)=\"navigate('category')\">Category</li>\n    <li (click)=\"navigate('subcategory')\">Sub Category</li>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"container-fluid\" [ngStyle]=\"{'background': (isAdminLogin) ? '#c5cae9' : '#fafafa'}\">\n  <div *ngIf=\"isAdminLogin == true || commonService.isAdminLoggedIn == true\">\n    <app-header></app-header>\n    <app-sidebar></app-sidebar>\n\n  </div>\n  <div [ngStyle]=\"{'margin-left': (isToggle || commonService.isSidebarOpen) ? '250px' : '0px', 'transition' : '0.3s'}\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Loading... </p></ngx-spinner>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category-details/category-details.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category-details/category-details.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryDetailsCategoryDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n<br />\n<br />\n<hr>\n<div class=\"col-md-12\">\n  <h5><a href=\"#\" (click)=\"home()\">Home</a> / {{name}}</h5>\n</div>\n<hr />\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <ngx-image-zoom [thumbImage]=myThumbnail [fullImage]=myFullresImage [magnification]=\"2\"\n    [zoomMode]=\"hover\" [enableScrollZoom]=\"true\" [enableLens]=\"true\" [lensWidth]=\"150\"\n    [lensHeight]=\"150\">\n    </ngx-image-zoom>\n    <!-- <img src=\"{{baseUrl + featureDetails.file}}\" width=\"100%\" /> -->\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>{{featureDetails?.name}}</h2>\n      </div>\n      <hr />\n      <div class=\"col-md-2\" *ngFor=\"let img of subImage\">\n        <img src=\"{{baseUrl + img.file}}\" (click)=\"changeImg(img)\" width=\"100\" height=\"100\" />\n      </div>\n      <div class=\"col-md-12 enquirySection\">\n        <div class=\"review\">\n          <hr>\n          <rating [(ngModel)]=\"starsCount\"></rating>\n          <button class=\"btn btn-success saveRating\" type=\"button\" (click)=\"saverating(starsCount)\">Save Rating</button>\n          <rating class=\"overall-rating\" [(ngModel)]=\"ratingScore\" [readonly]=\"true\"></rating>\n          <hr>\n        </div>\n      </div>\n      <div class=\"col-md-12 reviewSection\">\n        <form [formGroup]=\"review\" (ngSubmit)=\"saveReview(review.value)\">\n          <h2>Review</h2>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Mobile Number</label>\n            <input type=\"number\" formControlName=\"mobile\" class=\"form-control\" placeholder=\"Enter Mobile Number\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Message</label>\n            <textarea class=\"form-control\" formControlName=\"message\" placeholder=\"Enter Message\"></textarea>\n          </div>\n          <div class=\"form-group error\">\n            {{this.errMsg}}\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!review.valid\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8 offset-3 description\">\n\n\n    <tabset #tabset>\n      <tab heading=\"Description\">\n        <div [innerHTML]=\"featureDetails?.description\"></div>\n      </tab>\n\n      <tab heading=\"Features\">\n        <div [innerHTML]=\"featureDetails?.features\"></div>\n      </tab>\n\n      <tab heading=\"Review\">Tab 3 content</tab>\n    </tabset>\n  </div>\n</div>\n\n<section class=\"featureProduct\">\n  <app-feature-product></app-feature-product>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n<br />\n<br />\n<hr>\n<div class=\"col-md-12\">\n  <h5><a href=\"#\" (click)=\"home()\">Home</a> / {{this.name}}</h5>\n</div>\n<hr />\n<section>\n  <div class=\"row\">\n\n    <div class=\"col-md-4\" *ngFor=\"let type of categoryList\" (click)=\"subCategory(type)\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title class=\"title\">{{type.name}}</mat-card-title>\n        </mat-card-header>\n        <img mat-card-image class=\"typeImg\" src=\"{{baseUrl + type.file}}\" alt=\"{{type.name}}\">\n      </mat-card>\n    </div>\n  </div>\n</section>\n<section>\n  <app-feature-product></app-feature-product>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/contact-us/contact-us.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/contact-us/contact-us.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <iframe class=\"map\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.319936249863!2d72.84532161421434!3d19.181223553642592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6fc3f2ddafd%3A0x9689e22108407ba7!2sSahakar%20Villa%2C%20SV%20Rd%2C%20Malad%2C%20Vijaykar%20Wadi%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064!5e0!3m2!1sen!2sin!4v1595073914546!5m2!1sen!2sin\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Mobile</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"mobile\" placeholder=\"Enter Mobile\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">1</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-4\">Logo</div>\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\">\n    <span class=\"contact\" (click)=\"contact()\">Contact Us</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product/feature-details/feature-details.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product/feature-details/feature-details.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeatureProductFeatureDetailsFeatureDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n<br />\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <ngx-image-zoom [thumbImage]=myThumbnail [fullImage]=myFullresImage [magnification]=\"2\"\n    [zoomMode]=\"hover\" [enableScrollZoom]=\"true\" [enableLens]=\"true\" [lensWidth]=\"150\"\n    [lensHeight]=\"150\">\n    </ngx-image-zoom>\n    <!-- <img src=\"{{baseUrl + featureDetails.file}}\" width=\"100%\" /> -->\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>{{featureDetails?.name}}</h2>\n      </div>\n      <hr />\n      <div class=\"col-md-2\" *ngFor=\"let img of subImage\">\n        <img src=\"{{baseUrl + img.file}}\" (click)=\"changeImg(img)\" width=\"100\" height=\"100\" />\n      </div>\n      <div class=\"col-md-12 enquirySection\">\n        <div class=\"review\">\n          <hr>\n          <rating [(ngModel)]=\"starsCount\"></rating>\n          <button class=\"btn btn-success saveRating\" type=\"button\" (click)=\"saverating()\">Save Rating</button>\n          <rating class=\"overall-rating\" [(ngModel)]=\"ratingScore\" [readonly]=\"true\"></rating>\n          <hr>\n        </div>\n      </div>\n      <div class=\"col-md-12 reviewSection\">\n        <form [formGroup]=\"review\" (ngSubmit)=\"saveReview(review.value)\">\n          <h2>Review</h2>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Mobile Number</label>\n            <input type=\"number\" formControlName=\"mobile\" class=\"form-control\" placeholder=\"Enter Mobile Number\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Message</label>\n            <textarea class=\"form-control\" formControlName=\"message\" placeholder=\"Enter Message\"></textarea>\n          </div>\n          <div class=\"form-group error\">\n            {{this.errMsg}}\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!review.valid\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8 offset-3 description\">\n\n\n    <tabset #tabset>\n      <tab heading=\"Description\">{{featureDetails?.description}}</tab>\n\n      <tab heading=\"Features\">{{featureDetails?.features}}</tab>\n\n      <tab heading=\"Review\">Tab 3 content</tab>\n    </tabset>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product/feature-product.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product/feature-product.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeatureProductFeatureProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row feature\" *ngIf=\"featureProduct.length > 0\">\n  <div class=\"col-md-12\">\n    <h2 class=\"title\">Feature Product</h2>\n  </div>\n  <div class=\"col-md-12\">\n    <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n      <div ngxSlickItem *ngFor=\"let slide of featureProduct\" class=\"slide\" (click)=\"feature(slide._id)\">\n        <img src=\"{{ baseUrl + slide.file }}\" alt=\"\" width=\"100%\">\n        <br />\n        <h3>{{slide.name}}</h3>\n      </div>\n    </ngx-slick-carousel>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n\n<!-- Slider -->\n<section>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ngx-slick-carousel class=\"carousel\"\n                        #slickModal=\"slick-carousel\"\n                        [config]=\"slideConfig\">\n        <div ngxSlickItem *ngFor=\"let slide of sliderList\" class=\"slide\">\n              <img class=\"sliderImg\" src=\"{{ baseUrl + slide.file }}\" alt=\"\" width=\"100%\">\n        </div>\n    </ngx-slick-carousel>\n      <!-- <carousel>\n        <slide *ngFor=\"let img of sliderList; let i = index\">\n          <img class=\"sliderImg\" src=\"{{baseUrl + img.file}}\" alt=\"{{i}}\" style=\"display: block; width: 100%;\">\n        </slide>\n      </carousel> -->\n    </div>\n  </div>\n</section>\n<!-- Types -->\n<br />\n<br />\n<br />\n<section>\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let type of typeList\" (click)=\"categoryType(type)\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title class=\"title\">{{type.name}}</mat-card-title>\n        </mat-card-header>\n        <img mat-card-image class=\"typeImg\" src=\"{{baseUrl + type.file}}\" alt=\"{{type.name}}\">\n      </mat-card>\n    </div>\n  </div>\n</section>\n<section>\n  <app-feature-product></app-feature-product>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/sub-category.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/sub-category.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubCategorySubCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n\n<br />\n<br />\n<hr>\n<div class=\"col-md-12\">\n  <h5><a href=\"#\" (click)=\"home()\">Home</a> / {{name}}</h5>\n</div>\n<hr />\n<section>\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let type of categoryList\" (click)=\"subCategory(type)\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title class=\"title\">{{type.name}}</mat-card-title>\n        </mat-card-header>\n        <img mat-card-image class=\"typeImg\" src=\"{{baseUrl + type.file}}\" alt=\"{{type.name}}\">\n      </mat-card>\n    </div>\n  </div>\n</section>\n<section>\n  <app-feature-product></app-feature-product>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubscribeSubscribeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"subscribe(form.value)\">\n  <h2 class=\"text-center\">Subscribe</h2>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email</label>\n    <input type=\"text\"  class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Mobile Number\">\n  </div>\n  <p class=\"text-center\">Or</p>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Mobile Number</label>\n    <input type=\"number\" formControlName=\"mobile\"  class=\"form-control\" placeholder=\"Enter Mobile Number\">\n  </div>\n  <div class=\"form-group error\">\n    {{errMsg}}\n  </div>\n  <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary submit\">Send</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toaster/toaster.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toaster/toaster.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToasterToasterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"text-success success\">\n  <b>Successfully Save...</b>\n</span>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/header/header.component.styl":
  /*!****************************************************!*\
    !*** ./src/app/admin/header/header.component.styl ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminHeaderHeaderComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  height: 60px;\n}\n/*# sourceMappingURL=src/app/admin/header/header.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaGVhZGVyL3NyYy9hcHAvYWRtaW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWRtaW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQU87QUNDVDtBQUNBLG9FQUFvRSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZcclxuICBoZWlnaHQgNjBweFxyXG4iLCJuYXYge1xuICBoZWlnaHQ6IDYwcHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2FkbWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/header/header.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/header/header.component.ts ***!
    \**************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppAdminHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(commonService, router) {
        _classCallCheck(this, HeaderComponent);

        this.commonService = commonService;
        this.router = router;
        this.isToggle = false;
        this.isCollapsed = true;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.commonService.getEmitter(_service_constant__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR"]).subscribe(function (arg) {
            _this.isToggle = arg;

            _this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["MAIN_CONTAINER"], false);
          });
        }
      }, {
        key: "openNav",
        value: function openNav() {
          this.isToggle = true;
          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["HEADER"], true);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isToggle = false;
          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["ADMIN_LOGIN"], false);
          localStorage.clear();
          this.router.navigate(['/admin']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.styl */
      "./src/app/admin/header/header.component.styl"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/admin/sidebar/sidebar.component.styl":
  /*!******************************************************!*\
    !*** ./src/app/admin/sidebar/sidebar.component.styl ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSidebarSidebarComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n#main {\n  transition: margin-left 0.5s;\n  padding: 16px;\n}\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n.menu {\n  list-style: none;\n  cursor: pointer;\n  color: #fff;\n  margin-top: 15vh;\n}\n.menu li {\n  font-size: 18px;\n  line-height: 40px;\n  margin-left: -17px;\n}\n/*# sourceMappingURL=src/app/admin/sidebar/sidebar.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2lkZWJhci9zcmMvYXBwL2FkbWluL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWRtaW4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBUTtFQUNSLFFBQU87RUFDUCxlQUFVO0VBQ1YsVUFBUztFQUNULE1BQUs7RUFDTCxPQUFNO0VBQ04sc0JBQWtCO0VBQ2xCLGtCQUFZO0VBQ1osZ0JBQVk7RUFDWixpQkFBYTtBQ0NmO0FERUE7RUFDRSx5QkFBUztFQUNULHFCQUFpQjtFQUNqQixlQUFXO0VBQ1gsY0FBTztFQUNQLGNBQVM7RUFDVCxnQkFBWTtBQ0FkO0FER0E7RUFDRSxjQUFPO0FDRFQ7QURJQTtFQUNFLGtCQUFVO0VBQ1YsTUFBSztFQUNMLFdBQU87RUFDUCxlQUFXO0VBQ1gsaUJBQWE7QUNGZjtBREtBO0VBQ0UsNEJBQVk7RUFDWixhQUFTO0FDSFg7QURNb0M7RUFDbEM7SUFBVSxpQkFBYTtFQ0h2QjtFRElBO0lBQVksZUFBVztFQ0R2QjtBQUNGO0FER0E7RUFDRSxnQkFBWTtFQUNaLGVBQVE7RUFDUixXQUFPO0VBQ1AsZ0JBQVk7QUNEZDtBREdFO0VBQ0UsZUFBVztFQUNYLGlCQUFhO0VBQ2Isa0JBQWE7QUNEakI7QUFDQSxzRUFBc0UiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOiAxNXZoO1xyXG5cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTdweDtcclxuICB9XHJcbn1cclxuIiwiLnNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5zaWRlbmF2IGEge1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnNpZGVuYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuI21haW4ge1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxuICAuc2lkZW5hdiBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTV2aDtcbn1cbi5tZW51IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9hZG1pbi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/sidebar/sidebar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/sidebar/sidebar.component.ts ***!
    \****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppAdminSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(commonService, router) {
        _classCallCheck(this, SidebarComponent);

        this.commonService = commonService;
        this.router = router;
        this.isToggle = false;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.commonService.getEmitter(_service_constant__WEBPACK_IMPORTED_MODULE_3__["HEADER"]).subscribe(function (arg) {
            _this2.isToggle = arg;

            _this2.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["MAIN_CONTAINER"], true);
          });
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          this.isToggle = false;
          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR"], false);
        }
      }, {
        key: "navigate",
        value: function navigate(name) {
          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["ADMIN_LOGIN"], true);
          this.router.navigate(['/admin/' + name]);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.styl */
      "./src/app/admin/sidebar/sidebar.component.styl"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/shared.module */
    "./src/app/service/shared.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _feature_product_feature_details_feature_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./feature-product/feature-details/feature-details.component */
    "./src/app/feature-product/feature-details/feature-details.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/category/category.component.ts");
    /* harmony import */


    var _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./category-details/category-details.component */
    "./src/app/category-details/category-details.component.ts");
    /* harmony import */


    var _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sub-category/sub-category.component */
    "./src/app/sub-category/sub-category.component.ts");
    /* harmony import */


    var _common_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./common/contact-us/contact-us.component */
    "./src/app/common/contact-us/contact-us.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'feature/:id',
      component: _feature_product_feature_details_feature_details_component__WEBPACK_IMPORTED_MODULE_5__["FeatureDetailsComponent"]
    }, {
      path: 'category/:id',
      component: _category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]
    }, {
      path: 'subcategory/:id',
      component: _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_8__["SubCategoryComponent"]
    }, {
      path: 'category/details/:id',
      component: _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_7__["CategoryDetailsComponent"]
    }, {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule'
    }, {
      path: 'contact',
      component: _common_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        anchorScrolling: 'enabled'
      }), _service_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.styl":
  /*!************************************!*\
    !*** ./src/app/app.component.styl ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var _service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(commonService, spinner) {
        _classCallCheck(this, AppComponent);

        this.commonService = commonService;
        this.spinner = spinner;
        this.title = 'fashion';
        this.isAdminLogin = false;
        this.isToggle = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
          // Add 'implements OnInit' to the class.
          var url = window.location.hash.split('/');
          var isAdmin = url.find(function (name) {
            return name === 'admin';
          });

          if (isAdmin && url.length > 2) {
            this.isAdminLogin = true;
            this.commonService.isAdminLoggedIn = true;
          }

          this.commonService.getEmitter(_service_constant__WEBPACK_IMPORTED_MODULE_2__["ADMIN_LOGIN"]).subscribe(function (arg) {
            _this3.isAdminLogin = arg;
            _this3.commonService.isAdminLoggedIn = arg;
          });
          this.commonService.getEmitter(_service_constant__WEBPACK_IMPORTED_MODULE_2__["MAIN_CONTAINER"]).subscribe(function (arg) {
            _this3.isToggle = arg;
            _this3.commonService.isSidebarOpen = arg;
          });
          this.commonService.getEmitter(_service_constant__WEBPACK_IMPORTED_MODULE_2__["LOADER"]).subscribe(function (arg) {
            if (arg) {
              _this3.spinner.show();
            } else {
              _this3.spinner.hide();
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.styl */
      "./src/app/app.component.styl"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _service_http_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/http-interceptor.service */
    "./src/app/service/http-interceptor.service.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./service/auth-guard.guard */
    "./src/app/service/auth-guard.guard.ts");
    /* harmony import */


    var _service_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./service/shared.module */
    "./src/app/service/shared.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _feature_product_feature_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./feature-product/feature-product.component */
    "./src/app/feature-product/feature-product.component.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _feature_product_feature_details_feature_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./feature-product/feature-details/feature-details.component */
    "./src/app/feature-product/feature-details/feature-details.component.ts");
    /* harmony import */


    var _common_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./common/header/header.component */
    "./src/app/common/header/header.component.ts");
    /* harmony import */


    var _common_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./common/contact-us/contact-us.component */
    "./src/app/common/contact-us/contact-us.component.ts");
    /* harmony import */


    var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-image-zoom */
    "./node_modules/ngx-image-zoom/ngx-image-zoom.umd.js");
    /* harmony import */


    var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_image_zoom__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var ngx_rating__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-rating */
    "./node_modules/ngx-rating/index.js");
    /* harmony import */


    var ngx_rating__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_rating__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/category/category.component.ts");
    /* harmony import */


    var _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./category-details/category-details.component */
    "./src/app/category-details/category-details.component.ts");
    /* harmony import */


    var _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./sub-category/sub-category.component */
    "./src/app/sub-category/sub-category.component.ts");
    /* harmony import */


    var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./subscribe/subscribe.component */
    "./src/app/subscribe/subscribe.component.ts");
    /* harmony import */


    var _toaster_toaster_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./toaster/toaster.component */
    "./src/app/toaster/toaster.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _feature_product_feature_product_component__WEBPACK_IMPORTED_MODULE_13__["FeatureProductComponent"], _feature_product_feature_details_feature_details_component__WEBPACK_IMPORTED_MODULE_15__["FeatureDetailsComponent"], _common_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _common_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_20__["CategoryComponent"], _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_21__["CategoryDetailsComponent"], _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_22__["SubCategoryComponent"], _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_23__["SubscribeComponent"], _toaster_toaster_component__WEBPACK_IMPORTED_MODULE_24__["ToasterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _service_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__["SlickCarouselModule"], ngx_image_zoom__WEBPACK_IMPORTED_MODULE_18__["NgxImageZoomModule"].forRoot(), ngx_rating__WEBPACK_IMPORTED_MODULE_19__["RatingModule"]],
      providers: [_service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuardGuard"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _service_http_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["HttpInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
      entryComponents: [_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_23__["SubscribeComponent"], _toaster_toaster_component__WEBPACK_IMPORTED_MODULE_24__["ToasterComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/category-details/category-details.component.styl":
  /*!******************************************************************!*\
    !*** ./src/app/category-details/category-details.component.styl ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryDetailsCategoryDetailsComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".enquirySection {\n  display: flex;\n}\n.review .saveRating {\n  position: relative;\n  left: 45px;\n  top: -4px;\n}\n.review .overall-rating {\n  margin-left: 90px;\n}\n.enquiry {\n  width: 50%;\n  text-align: center;\n}\n.enquiry button {\n  position: relative;\n  top: 8px;\n}\n.description {\n  top: 20px;\n  padding-bottom: 29px;\n}\n.featureProduct {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=src/app/category-details/category-details.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktZGV0YWlscy9zcmMvYXBwL2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvY2F0ZWdvcnktZGV0YWlscy9jYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBUTtBQ0NWO0FEQ0U7RUFDRSxrQkFBUztFQUNULFVBQUs7RUFDTCxTQUFJO0FDQ1I7QURBRTtFQUNFLGlCQUFZO0FDRWhCO0FEREE7RUFDRSxVQUFNO0VBQ04sa0JBQVc7QUNHYjtBREZFO0VBQ0ksa0JBQVM7RUFDVCxRQUFJO0FDSVY7QURIQTtFQUNFLFNBQUk7RUFDSixvQkFBZTtBQ0tqQjtBREpBO0VBQ0UsZ0JBQVc7QUNNYjtBQUNBLGtGQUFrRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5lbnF1aXJ5U2VjdGlvblxyXG4gIGRpc3BsYXkgZmxleFxyXG4ucmV2aWV3XHJcbiAgLnNhdmVSYXRpbmdcclxuICAgIHBvc2l0aW9uIHJlbGF0aXZlXHJcbiAgICBsZWZ0IDQ1cHhcclxuICAgIHRvcCAtNHB4XHJcbiAgLm92ZXJhbGwtcmF0aW5nXHJcbiAgICBtYXJnaW4tbGVmdCA5MHB4XHJcbi5lbnF1aXJ5XHJcbiAgd2lkdGggNTAlXHJcbiAgdGV4dC1hbGlnbiBjZW50ZXJcclxuICBidXR0b25cclxuICAgICAgcG9zaXRpb24gcmVsYXRpdmVcclxuICAgICAgdG9wIDhweFxyXG4uZGVzY3JpcHRpb25cclxuICB0b3AgMjBweFxyXG4gIHBhZGRpbmctYm90dG9tIDI5cHhcclxuLmZlYXR1cmVQcm9kdWN0XHJcbiAgbWFyZ2luLXRvcCA2MHB4XHJcbiIsIi5lbnF1aXJ5U2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucmV2aWV3IC5zYXZlUmF0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA0NXB4O1xuICB0b3A6IC00cHg7XG59XG4ucmV2aWV3IC5vdmVyYWxsLXJhdGluZyB7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuLmVucXVpcnkge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW5xdWlyeSBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjlweDtcbn1cbi5mZWF0dXJlUHJvZHVjdCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/category-details/category-details.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/category-details/category-details.component.ts ***!
    \****************************************************************/

  /*! exports provided: CategoryDetailsComponent */

  /***/
  function srcAppCategoryDetailsCategoryDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function () {
      return CategoryDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _toaster_toaster_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../toaster/toaster.component */
    "./src/app/toaster/toaster.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var CategoryDetailsComponent = /*#__PURE__*/function () {
      function CategoryDetailsComponent(activeRoute, router, _snackBar, commonService, cdr) {
        _classCallCheck(this, CategoryDetailsComponent);

        this.activeRoute = activeRoute;
        this.router = router;
        this._snackBar = _snackBar;
        this.commonService = commonService;
        this.cdr = cdr;
        this.myThumbnail = '';
        this.myFullresImage = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.starsCount = 0;
        this.name = '';
        this.pid = '';
        this.ratingScore = 0;
        this.reviewList = [];
        this.durationInSeconds = 5;
        this.errMsg = '';
      }

      _createClass(CategoryDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activeRoute.params.subscribe(function (params) {
            if (params.id) {
              _this4.pid = params.id;

              _this4.getFeatureDetails(params.id);
            }
          });
          this.name = this.commonService.path;

          if (!localStorage.getItem('subscribe')) {
            this.router.navigate(['/']);
          }

          this.review = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
          });
        }
      }, {
        key: "getFeatureDetails",
        value: function getFeatureDetails(id) {
          var _this5 = this;

          this.commonService.getData('subCategory/details/' + id).subscribe(function (res) {
            _this5.featureDetails = res;

            if (!(res && res.file)) {
              _this5.router.navigate(['/']);
            }

            _this5.myThumbnail = _this5.baseUrl + res.file;
            _this5.myFullresImage = _this5.baseUrl + res.file;

            _this5.getSubImages(id);

            _this5.getRatingScore();

            _this5.getReview();

            _this5.cdr.detectChanges();
          });
        }
      }, {
        key: "getSubImages",
        value: function getSubImages(id) {
          var _this6 = this;

          this.commonService.getData('subCategory/image/' + id).subscribe(function (res) {
            _this6.subImage = res;

            _this6.cdr.detectChanges();
          });
        }
      }, {
        key: "changeImg",
        value: function changeImg(obj) {
          this.myThumbnail = this.baseUrl + obj.file1;
          this.myFullresImage = this.baseUrl + obj.file2;
        }
      }, {
        key: "saverating",
        value: function saverating() {
          var _this7 = this;

          var user = JSON.parse(localStorage.getItem('subscribe'));
          var obj = {
            email: user && user.email ? user.email : '',
            mobile: user && user.mobile ? user.mobile : '',
            rating: this.starsCount,
            pID: this.pid
          };
          this.commonService.postData('rating', obj).subscribe(function (res) {
            _this7.starsCount = 0;

            _this7.openSnackBar();

            _this7.getRatingScore();
          });
        }
      }, {
        key: "getRatingScore",
        value: function getRatingScore() {
          var _this8 = this;

          this.ratingScore = 0;
          this.commonService.getData('rating/' + this.pid).subscribe(function (res) {
            if (res && res.length > 0) {
              res.forEach(function (rat) {
                _this8.ratingScore = Number(_this8.ratingScore + rat.rating);
              });
              _this8.ratingScore = _this8.ratingScore / res.length;
            }
          });
        }
      }, {
        key: "goto",
        value: function goto(id) {
          this.tabset.tabs[id].active = true;
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/']);
        }
      }, {
        key: "getReview",
        value: function getReview() {
          var _this9 = this;

          this.commonService.getData('review/' + this.pid).subscribe(function (res) {
            if (res && res.length > 0) {
              _this9.reviewList = res;
            }
          });
        }
      }, {
        key: "saveReview",
        value: function saveReview(formData) {
          var _this10 = this;

          if (formData.mobile.toString().length !== 10) {
            this.errMsg = 'Please enter valid mobile number';
            return false;
          }

          this.errMsg = '';
          formData.pID = this.pid;
          this.commonService.postData('review', formData).subscribe(function (res) {
            _this10._snackBar.openFromComponent(_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_6__["ToasterComponent"], {
              duration: _this10.durationInSeconds * 1000,
              panelClass: 'success'
            });

            _this10.review = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
            });
          });
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.openFromComponent(_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_6__["ToasterComponent"], {
            duration: this.durationInSeconds * 1000,
            panelClass: 'success'
          });
        }
      }]);

      return CategoryDetailsComponent;
    }();

    CategoryDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
      }, {
        type: _service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabset', {
      "static": true
    })], CategoryDetailsComponent.prototype, "tabset", void 0);
    CategoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category-details/category-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-details.component.styl */
      "./src/app/category-details/category-details.component.styl"))["default"]]
    })], CategoryDetailsComponent);
    /***/
  },

  /***/
  "./src/app/category/category.component.styl":
  /*!**************************************************!*\
    !*** ./src/app/category/category.component.styl ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryCategoryComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".typeImg {\n  height: 550px;\n}\n.title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: 'Libre Baskerville', serif;\n}\nmat-card {\n  box-shadow: none !important;\n  background: transparent;\n}\nmat-card-header {\n  text-align: center;\n}\n::ng-deep .mat-card-header-text {\n  width: 100%;\n}\n.example-card {\n  max-width: 400px;\n}\n/*# sourceMappingURL=src/app/category/category.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvc3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFPO0FDQ1Q7QURBQTtFQUNFLGVBQVU7RUFDVixpQkFBWTtFQUNaLHVDQUErQjtBQ0VqQztBRERBO0VBQ0UsMkJBQVc7RUFDWCx1QkFBVztBQ0diO0FERkE7RUFDRSxrQkFBVztBQ0liO0FERkU7RUFDRSxXQUFNO0FDSVY7QURIQTtFQUNFLGdCQUFXO0FDS2I7QUFDQSxrRUFBa0UiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi50eXBlSW1nXHJcbiAgaGVpZ2h0IDU1MHB4XHJcbi50aXRsZVxyXG4gIGZvbnQtc2l6ZSAyMHB4XHJcbiAgZm9udC13ZWlnaHQgYm9sZFxyXG4gIGZvbnQtZmFtaWx5ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmXHJcbm1hdC1jYXJkXHJcbiAgYm94LXNoYWRvdyBub25lICFpbXBvcnRhbnRcclxuICBiYWNrZ3JvdW5kIHRyYW5zcGFyZW50XHJcbm1hdC1jYXJkLWhlYWRlclxyXG4gIHRleHQtYWxpZ24gY2VudGVyXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtY2FyZC1oZWFkZXItdGV4dFxyXG4gICAgd2lkdGggMTAwJVxyXG4uZXhhbXBsZS1jYXJkXHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuIiwiLnR5cGVJbWcge1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xufVxubWF0LWNhcmQge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxubWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MubWFwICovIl19 */";
    /***/
  },

  /***/
  "./src/app/category/category.component.ts":
  /*!************************************************!*\
    !*** ./src/app/category/category.component.ts ***!
    \************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(activeRoute, router, commonService, cdr) {
        _classCallCheck(this, CategoryComponent);

        this.activeRoute = activeRoute;
        this.router = router;
        this.commonService = commonService;
        this.cdr = cdr;
        this.categoryList = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.name = '';
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.activeRoute.params.subscribe(function (params) {
            if (params.id) {
              _this11.name = params.id === '0' ? 'Mens' : params.id === '1' ? 'Womens' : 'Kids';

              _this11.getCategoryDetails(_this11.name);
            }
          });
        }
      }, {
        key: "getCategoryDetails",
        value: function getCategoryDetails(name) {
          var _this12 = this;

          this.commonService.getData('category/list/' + name).subscribe(function (res) {
            _this12.categoryList = res;

            if (_this12.categoryList.length === 0) {
              _this12.router.navigate(['/']);
            }

            _this12.cdr.detectChanges();
          });
        }
      }, {
        key: "subCategory",
        value: function subCategory(type) {
          this.commonService.path = this.name + ' / ' + type.name;
          this.router.navigate(['subcategory/' + type._id]);
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/']);
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.component.styl */
      "./src/app/category/category.component.styl"))["default"]]
    })], CategoryComponent);
    /***/
  },

  /***/
  "./src/app/common/contact-us/contact-us.component.styl":
  /*!*************************************************************!*\
    !*** ./src/app/common/contact-us/contact-us.component.styl ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonContactUsContactUsComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map {\n  width: 100%;\n}\n/*# sourceMappingURL=src/app/common/contact-us/contact-us.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbnRhY3QtdXMvc3JjL2FwcC9jb21tb24vY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zdHlsIiwic3JjL2FwcC9jb21tb24vY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBTTtBQ0NSO0FBQ0EsNkVBQTZFIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5tYXBcclxuICB3aWR0aCAxMDAlXHJcbiIsIi5tYXAge1xuICB3aWR0aDogMTAwJTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvY29tbW9uL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/contact-us/contact-us.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/common/contact-us/contact-us.component.ts ***!
    \***********************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppCommonContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);

        this.errMsg = '';
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "saveContact",
        value: function saveContact(formData) {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/contact-us/contact-us.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-us.component.styl */
      "./src/app/common/contact-us/contact-us.component.styl"))["default"]]
    })], ContactUsComponent);
    /***/
  },

  /***/
  "./src/app/common/header/header.component.styl":
  /*!*****************************************************!*\
    !*** ./src/app/common/header/header.component.styl ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonHeaderHeaderComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact {\n  font-size: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=src/app/common/header/header.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9zcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zdHlsIiwic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQVU7RUFDVixlQUFPO0FDQ1Q7QUFDQSxxRUFBcUUiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0XHJcbiAgZm9udC1zaXplIDIwcHhcclxuICBjdXJzb3IgcG9pbnRlclxyXG4iLCIuY29udGFjdCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCommonHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "contact",
        value: function contact() {
          this.router.navigate(['contact']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.styl */
      "./src/app/common/header/header.component.styl"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/feature-product/feature-details/feature-details.component.styl":
  /*!********************************************************************************!*\
    !*** ./src/app/feature-product/feature-details/feature-details.component.styl ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeatureProductFeatureDetailsFeatureDetailsComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".enquirySection {\n  display: flex;\n}\n.review .saveRating {\n  position: relative;\n  left: 45px;\n  top: -4px;\n}\n.review .overall-rating {\n  margin-left: 90px;\n}\n.enquiry {\n  width: 50%;\n  text-align: center;\n}\n.enquiry button {\n  position: relative;\n  top: 8px;\n}\n.description {\n  top: 20px;\n  padding-bottom: 29px;\n}\n/*# sourceMappingURL=src/app/feature-product/feature-details/feature-details.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1wcm9kdWN0L2ZlYXR1cmUtZGV0YWlscy9zcmMvYXBwL2ZlYXR1cmUtcHJvZHVjdC9mZWF0dXJlLWRldGFpbHMvZmVhdHVyZS1kZXRhaWxzLmNvbXBvbmVudC5zdHlsIiwic3JjL2FwcC9mZWF0dXJlLXByb2R1Y3QvZmVhdHVyZS1kZXRhaWxzL2ZlYXR1cmUtZGV0YWlscy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVE7QUNDVjtBRENFO0VBQ0Usa0JBQVM7RUFDVCxVQUFLO0VBQ0wsU0FBSTtBQ0NSO0FEQUU7RUFDRSxpQkFBWTtBQ0VoQjtBRERBO0VBQ0UsVUFBTTtFQUNOLGtCQUFXO0FDR2I7QURGRTtFQUNJLGtCQUFTO0VBQ1QsUUFBSTtBQ0lWO0FESEE7RUFDRSxTQUFJO0VBQ0osb0JBQWU7QUNLakI7QUFDQSxnR0FBZ0ciLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlLXByb2R1Y3QvZmVhdHVyZS1kZXRhaWxzL2ZlYXR1cmUtZGV0YWlscy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5lbnF1aXJ5U2VjdGlvblxyXG4gIGRpc3BsYXkgZmxleFxyXG4ucmV2aWV3XHJcbiAgLnNhdmVSYXRpbmdcclxuICAgIHBvc2l0aW9uIHJlbGF0aXZlXHJcbiAgICBsZWZ0IDQ1cHhcclxuICAgIHRvcCAtNHB4XHJcbiAgLm92ZXJhbGwtcmF0aW5nXHJcbiAgICBtYXJnaW4tbGVmdCA5MHB4XHJcbi5lbnF1aXJ5XHJcbiAgd2lkdGggNTAlXHJcbiAgdGV4dC1hbGlnbiBjZW50ZXJcclxuICBidXR0b25cclxuICAgICAgcG9zaXRpb24gcmVsYXRpdmVcclxuICAgICAgdG9wIDhweFxyXG4uZGVzY3JpcHRpb25cclxuICB0b3AgMjBweFxyXG4gIHBhZGRpbmctYm90dG9tIDI5cHhcclxuIiwiLmVucXVpcnlTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yZXZpZXcgLnNhdmVSYXRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDQ1cHg7XG4gIHRvcDogLTRweDtcbn1cbi5yZXZpZXcgLm92ZXJhbGwtcmF0aW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG59XG4uZW5xdWlyeSB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbnF1aXJ5IGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG4uZGVzY3JpcHRpb24ge1xuICB0b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyOXB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9mZWF0dXJlLXByb2R1Y3QvZmVhdHVyZS1kZXRhaWxzL2ZlYXR1cmUtZGV0YWlscy5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/feature-product/feature-details/feature-details.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/feature-product/feature-details/feature-details.component.ts ***!
    \******************************************************************************/

  /*! exports provided: FeatureDetailsComponent */

  /***/
  function srcAppFeatureProductFeatureDetailsFeatureDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureDetailsComponent", function () {
      return FeatureDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var src_app_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/toaster/toaster.component */
    "./src/app/toaster/toaster.component.ts");

    var FeatureDetailsComponent = /*#__PURE__*/function () {
      function FeatureDetailsComponent(activeRoute, router, _snackBar, commonService, cdr) {
        _classCallCheck(this, FeatureDetailsComponent);

        this.activeRoute = activeRoute;
        this.router = router;
        this._snackBar = _snackBar;
        this.commonService = commonService;
        this.cdr = cdr;
        this.myThumbnail = '';
        this.myFullresImage = '';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.starsCount = 0;
        this.pid = '';
        this.ratingScore = 0;
        this.reviewList = [];
        this.durationInSeconds = 5;
        this.errMsg = '';
      }

      _createClass(FeatureDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.activeRoute.params.subscribe(function (params) {
            if (params.id) {
              _this13.pid = params.id;

              _this13.getFeatureDetails(params.id);
            }
          });

          if (!localStorage.getItem('subscribe')) {
            this.router.navigate(['/']);
          }

          this.review = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
          });
        }
      }, {
        key: "getFeatureDetails",
        value: function getFeatureDetails(id) {
          var _this14 = this;

          this.commonService.getData('features/' + id).subscribe(function (res) {
            _this14.featureDetails = res;
            _this14.myThumbnail = _this14.baseUrl + res.file;
            _this14.myFullresImage = _this14.baseUrl + res.file;

            _this14.getSubImages(id);

            _this14.getRatingScore();

            _this14.getReview();

            _this14.cdr.detectChanges();
          });
        }
      }, {
        key: "getSubImages",
        value: function getSubImages(id) {
          var _this15 = this;

          this.commonService.getData('features/image/' + id).subscribe(function (res) {
            _this15.subImage = res;

            _this15.cdr.detectChanges();
          });
        }
      }, {
        key: "changeImg",
        value: function changeImg(obj) {
          this.myThumbnail = this.baseUrl + obj.file1;
          this.myFullresImage = this.baseUrl + obj.file2;
        }
      }, {
        key: "saverating",
        value: function saverating() {
          var _this16 = this;

          var user = JSON.parse(localStorage.getItem('subscribe'));
          var obj = {
            email: user && user.email ? user.email : '',
            mobile: user && user.mobile ? user.mobile : '',
            rating: this.starsCount,
            pID: this.pid
          };
          this.commonService.postData('rating', obj).subscribe(function (res) {
            _this16.starsCount = 0;

            _this16.openSnackBar();

            _this16.getRatingScore();
          });
        }
      }, {
        key: "getRatingScore",
        value: function getRatingScore() {
          var _this17 = this;

          this.ratingScore = 0;
          this.commonService.getData('rating/' + this.pid).subscribe(function (res) {
            if (res && res.length > 0) {
              res.forEach(function (rat) {
                _this17.ratingScore = Number(_this17.ratingScore + rat.rating);
              });
              _this17.ratingScore = _this17.ratingScore / res.length;
            }
          });
        }
      }, {
        key: "goto",
        value: function goto(id) {
          this.tabset.tabs[id].active = true;
        }
      }, {
        key: "getReview",
        value: function getReview() {
          var _this18 = this;

          this.commonService.getData('review/' + this.pid).subscribe(function (res) {
            if (res && res.length > 0) {
              _this18.reviewList = res;
            }

            _this18.review = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
            });
          });
        }
      }, {
        key: "saveReview",
        value: function saveReview(formData) {
          var _this19 = this;

          if (formData.mobile.toString().length !== 10) {
            this.errMsg = 'Please enter valid mobile number';
            return false;
          }

          this.errMsg = '';
          formData.pID = this.pid;
          this.commonService.postData('review', formData).subscribe(function (res) {
            _this19._snackBar.openFromComponent(src_app_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_7__["ToasterComponent"], {
              duration: _this19.durationInSeconds * 1000,
              panelClass: 'success'
            });
          });
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.openFromComponent(src_app_toaster_toaster_component__WEBPACK_IMPORTED_MODULE_7__["ToasterComponent"], {
            duration: this.durationInSeconds * 1000,
            panelClass: 'success'
          });
        }
      }]);

      return FeatureDetailsComponent;
    }();

    FeatureDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabset', {
      "static": true
    })], FeatureDetailsComponent.prototype, "tabset", void 0);
    FeatureDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feature-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feature-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product/feature-details/feature-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feature-details.component.styl */
      "./src/app/feature-product/feature-details/feature-details.component.styl"))["default"]]
    })], FeatureDetailsComponent);
    /***/
  },

  /***/
  "./src/app/feature-product/feature-product.component.styl":
  /*!****************************************************************!*\
    !*** ./src/app/feature-product/feature-product.component.styl ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeatureProductFeatureProductComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".feature .title {\n  text-align: center;\n}\n.feature h3 {\n  text-align: center;\n}\nimg {\n  height: 300px;\n  width: 300px;\n}\n.slide {\n  width: 310px !important;\n}\n/*# sourceMappingURL=src/app/feature-product/feature-product.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1wcm9kdWN0L3NyYy9hcHAvZmVhdHVyZS1wcm9kdWN0L2ZlYXR1cmUtcHJvZHVjdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZmVhdHVyZS1wcm9kdWN0L2ZlYXR1cmUtcHJvZHVjdC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFXO0FDQWY7QURDRTtFQUNFLGtCQUFXO0FDQ2Y7QURBQTtFQUNFLGFBQU87RUFDUCxZQUFNO0FDRVI7QUREQTtFQUNFLHVCQUFNO0FDR1I7QUFDQSxnRkFBZ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlLXByb2R1Y3QvZmVhdHVyZS1wcm9kdWN0LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVcclxuICAudGl0bGVcclxuICAgIHRleHQtYWxpZ24gY2VudGVyXHJcbiAgaDNcclxuICAgIHRleHQtYWxpZ24gY2VudGVyXHJcbmltZ1xyXG4gIGhlaWdodCAzMDBweFxyXG4gIHdpZHRoIDMwMHB4XHJcbi5zbGlkZVxyXG4gIHdpZHRoIDMxMHB4ICFpbXBvcnRhbnRcclxuIiwiLmZlYXR1cmUgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZlYXR1cmUgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG4uc2xpZGUge1xuICB3aWR0aDogMzEwcHggIWltcG9ydGFudDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvZmVhdHVyZS1wcm9kdWN0L2ZlYXR1cmUtcHJvZHVjdC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/feature-product/feature-product.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/feature-product/feature-product.component.ts ***!
    \**************************************************************/

  /*! exports provided: FeatureProductComponent */

  /***/
  function srcAppFeatureProductFeatureProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureProductComponent", function () {
      return FeatureProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FeatureProductComponent = /*#__PURE__*/function () {
      function FeatureProductComponent(commonService, router) {
        _classCallCheck(this, FeatureProductComponent);

        this.commonService = commonService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.featureProduct = [];
        this.slideConfig = {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          speed: 300
        };
      }

      _createClass(FeatureProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFeature();
        }
      }, {
        key: "getFeature",
        value: function getFeature() {
          var _this20 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["LOADER"], true);
          this.commonService.getData('features/0').subscribe(function (res) {
            if (res.length > 0) {
              _this20.featureProduct = res;

              _this20.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["LOADER"], false);
            }
          });
        }
      }, {
        key: "feature",
        value: function feature(id) {
          this.router.navigate(['/feature/' + id]);
        }
      }]);

      return FeatureProductComponent;
    }();

    FeatureProductComponent.ctorParameters = function () {
      return [{
        type: _service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    FeatureProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feature-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feature-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feature-product/feature-product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feature-product.component.styl */
      "./src/app/feature-product/feature-product.component.styl"))["default"]]
    })], FeatureProductComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.styl":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.styl ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sliderImg {\n  max-width: 100%;\n  height: 350px;\n}\n.slick-list {\n  height: 310px;\n}\n.example-card {\n  max-width: 400px;\n}\n.typeImg {\n  height: 550px;\n}\n.title {\n  font-size: 40px;\n  font-weight: bold;\n  font-family: 'Libre Baskerville', serif;\n}\nmat-card {\n  box-shadow: none !important;\n  background: transparent;\n}\nmat-card-header {\n  text-align: center;\n}\n::ng-deep .mat-card-header-text {\n  width: 100%;\n}\n/*# sourceMappingURL=src/app/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBVTtFQUNWLGFBQU87QUNDVDtBREFBO0VBQ0UsYUFBTztBQ0VUO0FEREE7RUFDRSxnQkFBVztBQ0diO0FEREE7RUFDRSxhQUFPO0FDR1Q7QURGQTtFQUNFLGVBQVU7RUFDVixpQkFBWTtFQUNaLHVDQUErQjtBQ0lqQztBREhBO0VBQ0UsMkJBQVc7RUFDWCx1QkFBVztBQ0tiO0FESkE7RUFDRSxrQkFBVztBQ01iO0FESkU7RUFDRSxXQUFNO0FDTVY7QUFDQSwwREFBMEQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVySW1nXHJcbiAgbWF4LXdpZHRoIDEwMCVcclxuICBoZWlnaHQgMzUwcHhcclxuLnNsaWNrLWxpc3RcclxuICBoZWlnaHQgMzEwcHhcclxuLmV4YW1wbGUtY2FyZFxyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcblxyXG4udHlwZUltZ1xyXG4gIGhlaWdodCA1NTBweFxyXG4udGl0bGVcclxuICBmb250LXNpemUgNDBweFxyXG4gIGZvbnQtd2VpZ2h0IGJvbGRcclxuICBmb250LWZhbWlseSAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZlxyXG5tYXQtY2FyZFxyXG4gIGJveC1zaGFkb3cgbm9uZSAhaW1wb3J0YW50XHJcbiAgYmFja2dyb3VuZCB0cmFuc3BhcmVudFxyXG5tYXQtY2FyZC1oZWFkZXJcclxuICB0ZXh0LWFsaWduIGNlbnRlclxyXG46Om5nLWRlZXBcclxuICAubWF0LWNhcmQtaGVhZGVyLXRleHRcclxuICAgIHdpZHRoIDEwMCVcclxuIiwiLnNsaWRlckltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cbi5zbGljay1saXN0IHtcbiAgaGVpZ2h0OiAzMTBweDtcbn1cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLnR5cGVJbWcge1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xufVxubWF0LWNhcmQge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxubWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../subscribe/subscribe.component */
    "./src/app/subscribe/subscribe.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(commonService, dialog, router) {
        _classCallCheck(this, HomeComponent);

        this.commonService = commonService;
        this.dialog = dialog;
        this.router = router;
        this.sliderList = [];
        this.typeList = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.slideConfig = {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          speed: 300
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlider();

          if (!localStorage.getItem('subscribe')) {
            this.openSubscribe();
          }
        }
      }, {
        key: "getSlider",
        value: function getSlider() {
          var _this21 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_4__["LOADER"], true);
          this.commonService.getData('slider').subscribe(function (res) {
            if (res.length > 0) {
              _this21.sliderList = res;

              _this21.getType();
            }
          });
        }
      }, {
        key: "getType",
        value: function getType() {
          var _this22 = this;

          this.commonService.getData('type/0').subscribe(function (res) {
            if (res.length > 0) {
              _this22.typeList = res;

              _this22.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_4__["LOADER"], false);
            }
          });
        }
      }, {
        key: "categoryType",
        value: function categoryType(type) {
          var id = 0;

          if (type.name === 'Mens') {
            id = 0;
          } else if (type.name === 'Womens') {
            id = 1;
          } else {
            id = 3;
          }

          this.router.navigate(['category/' + id]);
        }
      }, {
        key: "openSubscribe",
        value: function openSubscribe() {
          var dialogRef = this.dialog.open(_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeComponent"], {
            width: '550px',
            data: {},
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {});
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.styl */
      "./src/app/home/home.component.styl"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/service/auth-guard.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/service/auth-guard.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuardGuard */

  /***/
  function srcAppServiceAuthGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function () {
      return AuthGuardGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuardGuard = /*#__PURE__*/function () {
      function AuthGuardGuard(router) {
        _classCallCheck(this, AuthGuardGuard);

        this.router = router;
      }

      _createClass(AuthGuardGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('token')) {
            return true;
          } else {
            this.router.navigate(['admin']);
            return false;
          }
        }
      }]);

      return AuthGuardGuard;
    }();

    AuthGuardGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardGuard);
    /***/
  },

  /***/
  "./src/app/service/auth.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/auth.service.ts ***!
    \*****************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(router) {
        _classCallCheck(this, AuthService);

        this.router = router;
      }

      _createClass(AuthService, [{
        key: "isLogin",
        value: function isLogin() {
          if (localStorage.getItem('token')) {
            return true;
          } else {
            this.router.navigate(['admin']);
          }
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/service/common.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/common.service.ts ***!
    \*******************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppServiceCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CommonService = /*#__PURE__*/function () {
      function CommonService(http, router) {
        _classCallCheck(this, CommonService);

        this.http = http;
        this.router = router; // tslint:disable-next-line: variable-name
        // url = 'http://localhost:4000/';

        this.url = 'http://ec2-18-216-122-50.us-east-2.compute.amazonaws.com:4000/';
        this._observableEmitter = {};
        this.isAdminLoggedIn = false;
        this.isSidebarOpen = false;
        this.path = '';
      }

      _createClass(CommonService, [{
        key: "emitData",
        value: function emitData(key, opts) {
          if (this._observableEmitter[key]) {
            this._observableEmitter[key].emit(opts);
          }
        }
      }, {
        key: "getEmitter",
        value: function getEmitter(key) {
          if (key) {
            this._observableEmitter[key] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            return this._observableEmitter[key];
          }
        }
      }, {
        key: "postData",
        value: function postData(url, formData) {
          var baseurl = this.url + url;
          return this.http.post(baseurl, formData);
        }
      }, {
        key: "patchData",
        value: function patchData(url, formData) {
          var baseurl = this.url + url;
          return this.http.patch(baseurl, formData);
        }
      }, {
        key: "getData",
        value: function getData(url) {
          var baseurl = this.url + url;
          return this.http.get(baseurl);
        }
      }, {
        key: "deleteData",
        value: function deleteData(url) {
          var baseurl = this.url + url;
          return this.http["delete"](baseurl);
        }
      }, {
        key: "convertBase64",
        value: function convertBase64(file) {
          return new Promise(function (resolve) {
            var reader = new FileReader();

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(file);
          });
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/service/constant.ts":
  /*!*************************************!*\
    !*** ./src/app/service/constant.ts ***!
    \*************************************/

  /*! exports provided: SIDEBAR, HEADER, MAIN_CONTAINER, ADMIN_LOGIN, LOADER */

  /***/
  function srcAppServiceConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIDEBAR", function () {
      return SIDEBAR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HEADER", function () {
      return HEADER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAIN_CONTAINER", function () {
      return MAIN_CONTAINER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADMIN_LOGIN", function () {
      return ADMIN_LOGIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOADER", function () {
      return LOADER;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SIDEBAR = 'sidebar';
    var HEADER = 'header';
    var MAIN_CONTAINER = 'main_container';
    var ADMIN_LOGIN = 'ADMIN_LOGIN';
    var LOADER = 'loader';
    /***/
  },

  /***/
  "./src/app/service/http-interceptor.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/service/http-interceptor.service.ts ***!
    \*****************************************************/

  /*! exports provided: HttpInterceptorService */

  /***/
  function srcAppServiceHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function () {
      return HttpInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/service/auth.service.ts");

    var HttpInterceptorService = /*#__PURE__*/function () {
      function HttpInterceptorService(injector) {
        _classCallCheck(this, HttpInterceptorService);

        this.injector = injector;
      }

      _createClass(HttpInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
          var tokenlizeReq = req.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(authService.getToken())
            }
          });
          return next.handle(tokenlizeReq);
        }
      }]);

      return HttpInterceptorService;
    }();

    HttpInterceptorService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpInterceptorService);
    /***/
  },

  /***/
  "./src/app/service/shared.module.ts":
  /*!******************************************!*\
    !*** ./src/app/service/shared.module.ts ***!
    \******************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppServiceSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _admin_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../admin/header/header.component */
    "./src/app/admin/header/header.component.ts");
    /* harmony import */


    var _admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../admin/sidebar/sidebar.component */
    "./src/app/admin/sidebar/sidebar.component.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admin_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(), _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__["AngularEditorModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"].forRoot(), _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"]],
      exports: [_admin_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_14__["AngularEditorModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/sub-category/sub-category.component.styl":
  /*!**********************************************************!*\
    !*** ./src/app/sub-category/sub-category.component.styl ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubCategorySubCategoryComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".typeImg {\n  height: 550px;\n}\n.title {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: 'Libre Baskerville', serif;\n}\nmat-card {\n  box-shadow: none !important;\n  background: transparent;\n}\nmat-card-header {\n  text-align: center;\n}\n::ng-deep .mat-card-header-text {\n  width: 100%;\n}\n.example-card {\n  max-width: 400px;\n}\n/*# sourceMappingURL=src/app/sub-category/sub-category.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLWNhdGVnb3J5L3NyYy9hcHAvc3ViLWNhdGVnb3J5L3N1Yi1jYXRlZ29yeS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvc3ViLWNhdGVnb3J5L3N1Yi1jYXRlZ29yeS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQU87QUNDVDtBREFBO0VBQ0UsZUFBVTtFQUNWLGlCQUFZO0VBQ1osdUNBQStCO0FDRWpDO0FEREE7RUFDRSwyQkFBVztFQUNYLHVCQUFXO0FDR2I7QURGQTtFQUNFLGtCQUFXO0FDSWI7QURGRTtFQUNFLFdBQU07QUNJVjtBREhBO0VBQ0UsZ0JBQVc7QUNLYjtBQUNBLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL3N1Yi1jYXRlZ29yeS9zdWItY2F0ZWdvcnkuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZUltZ1xyXG4gIGhlaWdodCA1NTBweFxyXG4udGl0bGVcclxuICBmb250LXNpemUgMjBweFxyXG4gIGZvbnQtd2VpZ2h0IGJvbGRcclxuICBmb250LWZhbWlseSAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZlxyXG5tYXQtY2FyZFxyXG4gIGJveC1zaGFkb3cgbm9uZSAhaW1wb3J0YW50XHJcbiAgYmFja2dyb3VuZCB0cmFuc3BhcmVudFxyXG5tYXQtY2FyZC1oZWFkZXJcclxuICB0ZXh0LWFsaWduIGNlbnRlclxyXG46Om5nLWRlZXBcclxuICAubWF0LWNhcmQtaGVhZGVyLXRleHRcclxuICAgIHdpZHRoIDEwMCVcclxuLmV4YW1wbGUtY2FyZFxyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiIsIi50eXBlSW1nIHtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbn1cbm1hdC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbm1hdC1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9zdWItY2F0ZWdvcnkvc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MubWFwICovIl19 */";
    /***/
  },

  /***/
  "./src/app/sub-category/sub-category.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/sub-category/sub-category.component.ts ***!
    \********************************************************/

  /*! exports provided: SubCategoryComponent */

  /***/
  function srcAppSubCategorySubCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubCategoryComponent", function () {
      return SubCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/common.service */
    "./src/app/service/common.service.ts");

    var SubCategoryComponent = /*#__PURE__*/function () {
      function SubCategoryComponent(activeRoute, router, commonService, cdr) {
        _classCallCheck(this, SubCategoryComponent);

        this.activeRoute = activeRoute;
        this.router = router;
        this.commonService = commonService;
        this.cdr = cdr;
        this.categoryList = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.name = '';
      }

      _createClass(SubCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.activeRoute.params.subscribe(function (params) {
            if (params.id) {
              _this23.getCategoryDetails(params.id);
            }
          });
          this.name = this.commonService.path;
        }
      }, {
        key: "getCategoryDetails",
        value: function getCategoryDetails(id) {
          var _this24 = this;

          this.commonService.getData('subcategory/list/' + id).subscribe(function (res) {
            _this24.categoryList = res;

            if (_this24.categoryList.length === 0) {
              _this24.router.navigate(['/']);
            }

            _this24.cdr.detectChanges();
          });
        }
      }, {
        key: "subCategory",
        value: function subCategory(type) {
          this.commonService.path = this.commonService.path + ' / ' + type.name;
          this.router.navigate(['category/details/' + type._id]);
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/']);
        }
      }]);

      return SubCategoryComponent;
    }();

    SubCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    SubCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sub-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sub-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/sub-category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sub-category.component.styl */
      "./src/app/sub-category/sub-category.component.styl"))["default"]]
    })], SubCategoryComponent);
    /***/
  },

  /***/
  "./src/app/subscribe/subscribe.component.styl":
  /*!****************************************************!*\
    !*** ./src/app/subscribe/subscribe.component.styl ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubscribeSubscribeComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".submit {\n  float: right;\n}\n/*# sourceMappingURL=src/app/subscribe/subscribe.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaWJlL3NyYy9hcHAvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQU07QUNDUjtBQUNBLG9FQUFvRSIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZS9zdWJzY3JpYmUuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0XHJcbiAgZmxvYXQgcmlnaHRcclxuIiwiLnN1Ym1pdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/subscribe/subscribe.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/subscribe/subscribe.component.ts ***!
    \**************************************************/

  /*! exports provided: SubscribeComponent */

  /***/
  function srcAppSubscribeSubscribeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function () {
      return SubscribeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var SubscribeComponent = /*#__PURE__*/function () {
      function SubscribeComponent(commonService, dialogRef) {
        _classCallCheck(this, SubscribeComponent);

        this.commonService = commonService;
        this.dialogRef = dialogRef;
        this.errMsg = '';
      }

      _createClass(SubscribeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "subscribe",
        value: function subscribe(formData) {
          var _this25 = this;

          if (formData.email === '' && formData.mobile === '') {
            this.errMsg = 'Please enter atleast one field';
            return false;
          }

          if (formData.mobile.toString().length !== 10) {
            this.errMsg = 'Please enter valid mobile number';
            return false;
          }

          this.errMsg = '';
          this.commonService.postData('subscribe', formData).subscribe(function (res) {
            localStorage.setItem('subscribe', JSON.stringify(formData));

            _this25.dialogRef.close();
          });
        }
      }]);

      return SubscribeComponent;
    }();

    SubscribeComponent.ctorParameters = function () {
      return [{
        type: _service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }];
    };

    SubscribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subscribe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subscribe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subscribe.component.styl */
      "./src/app/subscribe/subscribe.component.styl"))["default"]]
    })], SubscribeComponent);
    /***/
  },

  /***/
  "./src/app/toaster/toaster.component.styl":
  /*!************************************************!*\
    !*** ./src/app/toaster/toaster.component.styl ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToasterToasterComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*# sourceMappingURL=src/app/toaster/toaster.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9hc3Rlci90b2FzdGVyLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdFQUFnRSIsImZpbGUiOiJzcmMvYXBwL3RvYXN0ZXIvdG9hc3Rlci5jb21wb25lbnQuc3R5bCJ9 */";
    /***/
  },

  /***/
  "./src/app/toaster/toaster.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/toaster/toaster.component.ts ***!
    \**********************************************/

  /*! exports provided: ToasterComponent */

  /***/
  function srcAppToasterToasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterComponent", function () {
      return ToasterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToasterComponent = /*#__PURE__*/function () {
      function ToasterComponent() {
        _classCallCheck(this, ToasterComponent);
      }

      _createClass(ToasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToasterComponent;
    }();

    ToasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toaster',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toaster.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toaster/toaster.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toaster.component.styl */
      "./src/app/toaster/toaster.component.styl"))["default"]]
    })], ToasterComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://localhost:4000/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\git\aakash\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map