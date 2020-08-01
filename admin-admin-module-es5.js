function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/@angular/material/esm2015/sort.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/sort.js ***!
    \********************************************************/

  /*! exports provided: MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015SortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
      return MatSortModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
      return MatSortHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
      return MatSortHeaderIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSort", function () {
      return MatSort;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
      return matSortAnimations;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @param {?} id
     * @return {?}
     */


    function getSortDuplicateSortableIdError(id) {
      return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderNotContainedWithinSortError() {
      return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderMissingIdError() {
      return Error("MatSortHeader must be provided with a unique id.");
    }
    /**
     * \@docs-private
     * @param {?} direction
     * @return {?}
     */


    function getSortInvalidDirectionError(direction) {
      return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatSort.

    /**
     * \@docs-private
     */


    var MatSortBase = function MatSortBase() {
      _classCallCheck(this, MatSortBase);
    };
    /** @type {?} */


    var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
    /**
     * Container for MatSortables to manage the sort state and provide default sort parameters.
     */


    var MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
      _inherits(MatSort, _MatSortMixinBase2);

      var _super = _createSuper(MatSort);

      function MatSort() {
        var _this;

        _classCallCheck(this, MatSort);

        _this = _super.apply(this, arguments);
        /**
         * Collection of all registered sortables that this directive manages.
         */

        _this.sortables = new Map();
        /**
         * Used to notify any child components listening to state changes.
         */

        _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * The direction to set when an MatSortable is initially sorted.
         * May be overriden by the MatSortable's sort start.
         */

        _this.start = 'asc';
        _this._direction = '';
        /**
         * Event emitted when the user changes either the active sort or sort direction.
         */

        _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
      }
      /**
       * The sort direction of the currently active MatSortable.
       * @return {?}
       */


      _createClass(MatSort, [{
        key: "register",

        /**
         * Register function to be used by the contained MatSortables. Adds the MatSortable to the
         * collection of MatSortables.
         * @param {?} sortable
         * @return {?}
         */
        value: function register(sortable) {
          if (!sortable.id) {
            throw getSortHeaderMissingIdError();
          }

          if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
          }

          this.sortables.set(sortable.id, sortable);
        }
        /**
         * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
         * collection of contained MatSortables.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(sortable) {
          this.sortables["delete"](sortable.id);
        }
        /**
         * Sets the active sort id and determines the new sort direction.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(sortable) {
          if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
          } else {
            this.direction = this.getNextSortDirection(sortable);
          }

          this.sortChange.emit({
            active: this.active,
            direction: this.direction
          });
        }
        /**
         * Returns the next sort direction of the active sortable, checking for potential overrides.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "getNextSortDirection",
        value: function getNextSortDirection(sortable) {
          if (!sortable) {
            return '';
          } // Get the sort direction cycle with the potential sortable overrides.

          /** @type {?} */


          var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
          /** @type {?} */

          var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

          /** @type {?} */

          var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

          if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
          }

          return sortDirectionCycle[nextDirectionIndex];
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "direction",
        get: function get() {
          return this._direction;
        }
        /**
         * @param {?} direction
         * @return {?}
         */
        ,
        set: function set(direction) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
            throw getSortInvalidDirectionError(direction);
          }

          this._direction = direction;
        }
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         * @return {?}
         */

      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSort;
    }(_MatSortMixinBase);

    MatSort.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matSort]',
        exportAs: 'matSort',
        inputs: ['disabled: matSortDisabled']
      }]
    }];
    MatSort.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortActive']
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortStart']
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortDirection']
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortDisableClear']
      }],
      sortChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['matSortChange']
      }]
    };
    /**
     * Returns the sort direction cycle to use given the provided parameters of order and clear.
     * @param {?} start
     * @param {?} disableClear
     * @return {?}
     */

    function getSortDirectionCycle(start, disableClear) {
      /** @type {?} */
      var sortOrder = ['asc', 'desc'];

      if (start == 'desc') {
        sortOrder.reverse();
      }

      if (!disableClear) {
        sortOrder.push('');
      }

      return sortOrder;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
    /**
     * Animations used by MatSort.
     * \@docs-private
     * @type {?}
     */

    var matSortAnimations = {
      /**
       * Animation that moves the sort indicator.
       */
      indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0px)'
      })), // 10px is the height of the sort indicator, minus the width of the pointers
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(10px)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the left pointer of the indicator based on the sorting direction.
       */
      leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the right pointer of the indicator based on the sorting direction.
       */
      rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that controls the arrow opacity.
       */
      arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: .54
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0
      })), // Transition between all states except for immediate transitions
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation for the translation of the arrow as a whole. States are separated into two
       * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
       * peek, and active. The other states define a specific animation (source-to-destination)
       * and are determined as a function of their prev user-perceived state and what the next state
       * should be.
       */
      arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Below
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      })]))), // Hidden Below => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Above
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      }))]),

      /**
       * Necessary trigger that calls animate on children animations.
       */
      allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), {
        optional: true
      })])])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
     * include it in a custom provider.
     */

    var MatSortHeaderIntl = function MatSortHeaderIntl() {
      _classCallCheck(this, MatSortHeaderIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      /**
       * ARIA label for the sorting button.
       */

      this.sortButtonLabel =
      /**
      * @param {?} id
      * @return {?}
      */
      function (id) {
        return "Change sorting for ".concat(id);
      };
    };

    MatSortHeaderIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatSortHeaderIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MatSortHeaderIntl_Factory() {
        return new MatSortHeaderIntl();
      },
      token: MatSortHeaderIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatSortHeaderIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_SORT_HEADER_INTL_PROVIDER = {
      // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
      provide: MatSortHeaderIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatSortHeaderIntl]],
      useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to the sort header.

    /**
     * \@docs-private
     */

    var MatSortHeaderBase = function MatSortHeaderBase() {
      _classCallCheck(this, MatSortHeaderBase);
    };
    /** @type {?} */


    var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
    /**
     * Applies sorting behavior (click to change sort) and styles to an element, including an
     * arrow to display the current sort direction.
     *
     * Must be provided with an id and contained within a parent MatSort directive.
     *
     * If used on header cells in a CdkTable, it will automatically default its id from its containing
     * column definition.
     */


    var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
      _inherits(MatSortHeader, _MatSortHeaderMixinBa);

      var _super2 = _createSuper(MatSortHeader);

      /**
       * @param {?} _intl
       * @param {?} changeDetectorRef
       * @param {?} _sort
       * @param {?} _columnDef
       */
      function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef) {
        var _this2;

        _classCallCheck(this, MatSortHeader);

        // Note that we use a string token for the `_columnDef`, because the value is provided both by
        // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
        // and we want to avoid having the sort header depending on the CDK table because
        // of this single reference.
        _this2 = _super2.call(this);
        _this2._intl = _intl;
        _this2._sort = _sort;
        _this2._columnDef = _columnDef;
        /**
         * Flag set to true when the indicator should be displayed while the sort is not active. Used to
         * provide an affordance that the header is sortable by showing on focus and hover.
         */

        _this2._showIndicatorHint = false;
        /**
         * The direction the arrow should be facing according to the current state.
         */

        _this2._arrowDirection = '';
        /**
         * Whether the view state animation should show the transition between the `from` and `to` states.
         */

        _this2._disableViewStateAnimation = false;
        /**
         * Sets the position of the arrow that displays when sorted.
         */

        _this2.arrowPosition = 'after';

        if (!_sort) {
          throw getSortHeaderNotContainedWithinSortError();
        }

        _this2._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this2._isSorted()) {
            _this2._updateArrowDirection();
          } // If this header was recently active and now no longer sorted, animate away the arrow.


          if (!_this2._isSorted() && _this2._viewState && _this2._viewState.toState === 'active') {
            _this2._disableViewStateAnimation = false;

            _this2._setAnimationTransitionState({
              fromState: 'active',
              toState: _this2._arrowDirection
            });
          }

          changeDetectorRef.markForCheck();
        });
        return _this2;
      }
      /**
       * Overrides the disable clear value of the containing MatSort for this MatSortable.
       * @return {?}
       */


      _createClass(MatSortHeader, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
          } // Initialize the direction of the arrow and set the view state to be immediately that state.


          this._updateArrowDirection();

          this._setAnimationTransitionState({
            toState: this._isSorted() ? 'active' : this._arrowDirection
          });

          this._sort.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._sort.deregister(this);

          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
         * user showing what the active sort will become. If set to false, the arrow will fade away.
         * @param {?} visible
         * @return {?}
         */

      }, {
        key: "_setIndicatorHintVisible",
        value: function _setIndicatorHintVisible(visible) {
          // No-op if the sort header is disabled - should not make the hint visible.
          if (this._isDisabled() && visible) {
            return;
          }

          this._showIndicatorHint = visible;

          if (!this._isSorted()) {
            this._updateArrowDirection();

            if (this._showIndicatorHint) {
              this._setAnimationTransitionState({
                fromState: this._arrowDirection,
                toState: 'hint'
              });
            } else {
              this._setAnimationTransitionState({
                fromState: 'hint',
                toState: this._arrowDirection
              });
            }
          }
        }
        /**
         * Sets the animation transition view state for the arrow's position and opacity. If the
         * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
         * no animation appears.
         * @param {?} viewState
         * @return {?}
         */

      }, {
        key: "_setAnimationTransitionState",
        value: function _setAnimationTransitionState(viewState) {
          this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
          // remove the fromState so that it jumps right to the toState.

          if (this._disableViewStateAnimation) {
            this._viewState = {
              toState: viewState.toState
            };
          }
        }
        /**
         * Triggers the sort on this sort header and removes the indicator hint.
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick() {
          if (this._isDisabled()) {
            return;
          }

          this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


          if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
          } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
          // the direction it is facing.

          /** @type {?} */


          var viewState = this._isSorted() ? {
            fromState: this._arrowDirection,
            toState: 'active'
          } : {
            fromState: 'active',
            toState: this._arrowDirection
          };

          this._setAnimationTransitionState(viewState);

          this._showIndicatorHint = false;
        }
        /**
         * Whether this MatSortHeader is currently sorted in either ascending or descending order.
         * @return {?}
         */

      }, {
        key: "_isSorted",
        value: function _isSorted() {
          return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        }
        /**
         * Returns the animation state for the arrow direction (indicator and pointers).
         * @return {?}
         */

      }, {
        key: "_getArrowDirectionState",
        value: function _getArrowDirectionState() {
          return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
        }
        /**
         * Returns the arrow position state (opacity, translation).
         * @return {?}
         */

      }, {
        key: "_getArrowViewState",
        value: function _getArrowViewState() {
          /** @type {?} */
          var fromState = this._viewState.fromState;
          return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
        }
        /**
         * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
         * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
         * active sorted direction. The reason this is updated through a function is because the direction
         * should only be changed at specific times - when deactivated but the hint is displayed and when
         * the sort is active and the direction changes. Otherwise the arrow's direction should linger
         * in cases such as the sort becoming deactivated but we want to animate the arrow away while
         * preserving its direction, even though the next sort direction is actually different and should
         * only be changed once the arrow displays again (hint or activation).
         * @return {?}
         */

      }, {
        key: "_updateArrowDirection",
        value: function _updateArrowDirection() {
          this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled() {
          return this._sort.disabled || this.disabled;
        }
        /**
         * Gets the aria-sort attribute that should be applied to this sort header. If this header
         * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
         * says that the aria-sort property should only be present on one header at a time, so removing
         * ensures this is true.
         * @return {?}
         */

      }, {
        key: "_getAriaSortAttribute",
        value: function _getAriaSortAttribute() {
          if (!this._isSorted()) {
            return null;
          }

          return this._sort.direction == 'asc' ? 'ascending' : 'descending';
        }
        /**
         * Whether the arrow inside the sort header should be rendered.
         * @return {?}
         */

      }, {
        key: "_renderArrow",
        value: function _renderArrow() {
          return !this._isDisabled() || this._isSorted();
        }
      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSortHeader;
    }(_MatSortHeaderMixinBase);

    MatSortHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: '[mat-sort-header]',
        exportAs: 'matSortHeader',
        template: "<div class=\"mat-sort-header-container\" [class.mat-sort-header-sorted]=\"_isSorted()\" [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"><button class=\"mat-sort-header-button\" type=\"button\" [attr.disabled]=\"_isDisabled() || null\" [attr.aria-label]=\"_intl.sortButtonLabel(id)\" (focus)=\"_setIndicatorHintVisible(true)\" (blur)=\"_setIndicatorHintVisible(false)\"><ng-content></ng-content></button><div class=\"mat-sort-header-arrow\" *ngIf=\"_renderArrow()\" [@arrowOpacity]=\"_getArrowViewState()\" [@arrowPosition]=\"_getArrowViewState()\" [@allowChildren]=\"_getArrowDirectionState()\" (@arrowPosition.start)=\"_disableViewStateAnimation = true\" (@arrowPosition.done)=\"_disableViewStateAnimation = false\"><div class=\"mat-sort-header-stem\"></div><div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\"><div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-middle\"></div></div></div></div>",
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}@media (-ms-high-contrast:active){.mat-sort-header-stem{width:0;border-left:solid 2px}}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}@media (-ms-high-contrast:active){.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
        host: {
          '(click)': '_handleClick()',
          '(mouseenter)': '_setIndicatorHintVisible(true)',
          '(mouseleave)': '_setIndicatorHintVisible(false)',
          '[attr.aria-sort]': '_getAriaSortAttribute()',
          '[class.mat-sort-header-disabled]': '_isDisabled()'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disabled'],
        animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
      }]
    }];
    /** @nocollapse */

    MatSortHeader.ctorParameters = function () {
      return [{
        type: MatSortHeaderIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: MatSort,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['MAT_SORT_HEADER_COLUMN_DEF']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatSortHeader.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-sort-header']
      }],
      arrowPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSortModule = function MatSortModule() {
      _classCallCheck(this, MatSortModule);
    };

    MatSortModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [MatSort, MatSortHeader],
        declarations: [MatSort, MatSortHeader],
        providers: [MAT_SORT_HEADER_INTL_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=sort.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/category/add-category/add-category.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/category/add-category/add-category.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCategoryAddCategoryAddCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Category Form</h4>\n  </div>\n  <div class=\"col-md-12\">\n    <form [formGroup]=\"uploadForm\" (ngSubmit)=\"submit(uploadForm.value)\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Type</label>\n        <select class=\"form-control\" formControlName=\"type\">\n          <option *ngFor=\"let type of typeList\" [value]=\"type._id\">{{type.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Category</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Category\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Image</label>\n        <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event)\" id=\"exampleFormControlFile1\">\n      </div>\n      <div class=\"col-md-12\">\n        <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" width=\"200\" height=\"150\" />\n      </div>\n      <div class=\"col-md-12 error\">\n        {{errMsg}}\n      </div>\n      <div class=\"col-md-12 text-right\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"uploadForm.invalid\">Save</button>\n\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/category/category.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/category/category.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCategoryCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row category\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Category List</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <mat-form-field class=\"filter\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add New</button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-table table-striped\">\n\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"type\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.typeName}} </td>\n        </ng-container>\n\n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"file\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n          <td mat-cell *matCellDef=\"let row\">\n              <img src=\"{{baseurl + row.file}}\" width=\"100\" height=\"100\" />\n          </td>\n        </ng-container>\n\n        <!-- Color Column -->\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <button class=\"btn btn-secondary\" (click)=\"add(row)\">Update</button>&nbsp;&nbsp;\n            <button class=\"btn btn-danger\" (click)=\"delete(row._id)\">Delete</button>&nbsp;&nbsp;\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>dashboard works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/add-feature/add-feature.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/add-feature/add-feature.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminFeatureAddFeatureAddFeatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <h4>feature Product Form</h4>\n  </div>\n\n    <form [formGroup]=\"featureProduct\" (ngSubmit)=\"submit(featureProduct.value)\">\n      <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Description</label>\n        <angular-editor [placeholder]=\"'Enter text here...'\" formControlName=\"description\"></angular-editor>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Feature</label>\n        <angular-editor [placeholder]=\"'Enter text here...'\" formControlName=\"features\"></angular-editor>\n      </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlFile1\">Image (300 * 300)</label>\n            <input type=\"file\" class=\"form-control-file\" (change)=\"(mode === 'new') ? showPreview($event, 1) : editPreview($event, 1)\" id=\"exampleFormControlFile1\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlFile1\">Image (400 * 500)</label>\n            <input type=\"file\" class=\"form-control-file\" (change)=\"(mode === 'new') ? showPreview($event, 2) : editPreview($event, 2)\" id=\"exampleFormControlFile1\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlFile1\">Image (500 * 600)</label>\n            <input type=\"file\" class=\"form-control-file\" (change)=\"(mode === 'new') ? showPreview($event, 3) : editPreview($event, 3)\" id=\"exampleFormControlFile1\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" width=\"200\" height=\"150\" />\n        </div>\n        <div class=\"col-md-4\">\n          <img *ngIf=\"imageSrc\" [src]=\"imageSrc1\" width=\"200\" height=\"150\" />\n        </div>\n        <div class=\"col-md-4\">\n          <img *ngIf=\"imageSrc\" [src]=\"imageSrc2\" width=\"200\" height=\"150\" />\n        </div>\n      </div>\n      <hr />\n      <div class=\"col-md-12 text-right\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-primary\"\n          [disabled]=\"(imageSrc === '' || imageSrc1 === '' || imageSrc2 === ''\n            || !featureProduct.valid) ? true : false\">Save</button>\n        <div class=\"error\">{{errMsg}}</div>\n      </div>\n    </form>\n  </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/feature-sub-image/feature-sub-image.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/feature-sub-image/feature-sub-image.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminFeatureFeatureSubImageFeatureSubImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlFile1\">Image (300 * 300)</label>\n      <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event, 1)\" id=\"exampleFormControlFile1\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlFile1\">Image (400 * 500)</label>\n      <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event, 2)\" id=\"exampleFormControlFile1\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlFile1\">Image (500 * 600)</label>\n      <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event, 3)\" id=\"exampleFormControlFile1\">\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" width=\"200\" height=\"150\" />\n  </div>\n  <div class=\"col-md-4\">\n    <img *ngIf=\"imageSrc\" [src]=\"imageSrc1\" width=\"200\" height=\"150\" />\n  </div>\n  <div class=\"col-md-4\">\n    <img *ngIf=\"imageSrc\" [src]=\"imageSrc2\" width=\"200\" height=\"150\" />\n  </div>\n</div>\n<br />\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\" >Cancel</button>&nbsp;&nbsp;\n    <button class=\"btn btn-success\" (click)=\"save()\" [disabled]=\"(imageSrc === '' && imageSrc1 === '' && imageSrc2 === '') ? true : false\">Save</button>\n  </div>\n</div>\n<hr />\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"mat-elevation-z8\">\n\n      <table>\n        <tr>\n          <th>Sr. No</th>\n          <th>File 1</th>\n          <th>File 2</th>\n          <th>File 3</th>\n          <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let img of images; let i = index\">\n          <td>{{ i + 1}}</td>\n          <td>\n            <img src=\"{{baseurl + img.file}}\" />\n          </td>\n          <td>\n            <img src=\"{{baseurl + img.file1}}\" />\n          </td>\n          <td>\n            <img src=\"{{baseurl + img.file2}}\" />\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"delete(img._id)\">Delete</button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/feature.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/feature.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminFeatureFeatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row category\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Feature Products List</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add New</button>\n  </div>\n</div>\n<br />\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-table table-striped\">\n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\n          <td mat-cell *matCellDef=\"let row\">\n            {{row.name}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"file\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <img src=\"{{ this.baseurl + row.file}}\" />\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"new\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Sub Image </th>\n          <td mat-cell *matCellDef=\"let row\" class=\"text-center\">\n              <button class=\"btn btn-primary\" (click)=\"addSubImage(row._id)\">Add Sub Image</button>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n          <td mat-cell *matCellDef=\"let row\" class=\"text-center\">\n              <button class=\"btn btn-secondary\" (click)=\"add(row)\">Update</button>&nbsp;&nbsp;\n              <button class=\"btn btn-danger\" (click)=\"delete(row._id)\">Delete</button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row login\">\n    <div class=\"col-md-5 offset-md-3\">\n\n      <mat-card>\n        <mat-card-content>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\" class=\"form-control\"\n               formControlName=\"email\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input type=\"password\"\n              formControlName=\"password\"  class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\n            <div class=\"error\"> {{this.errMsg}}</div>\n          </form>\n        </mat-card-content>\n\n      </mat-card>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/slider/addslider/addslider.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/slider/addslider/addslider.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSliderAddsliderAddsliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Slider Form</h4>\n  </div>\n  <div class=\"col-md-12\">\n    <form (ngSubmit)=\"submit()\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Image</label>\n        <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event)\" id=\"exampleFormControlFile1\">\n      </div>\n      <div class=\"col-md-12\">\n        <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" width=\"200\" height=\"150\" />\n      </div>\n      <div class=\"col-md-12 text-right\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"(imageSrc === '') ? true : false\">Save</button>\n        <div class=\"error\">{{errMsg}}</div>\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/slider/slider.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/slider/slider.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSliderSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row category\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Home Slider List</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add New</button>\n  </div>\n</div>\n<br />\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-table table-striped\">\n        <ng-container matColumnDef=\"file\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <img src=\"{{ this.baseurl + row.file}}\" />\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n          <td mat-cell *matCellDef=\"let row\" class=\"text-center\">\n              <button class=\"btn btn-danger\" (click)=\"delete(row._id)\">Delete</button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/add-sub-category/add-sub-category.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/add-sub-category/add-sub-category.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSubCategoryAddSubCategoryAddSubCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Sub Category Form</h4>\n  </div>\n  <div class=\"col-md-12\">\n    <form [formGroup]=\"uploadForm\" (ngSubmit)=\"submit(uploadForm.value)\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Type</label>\n        <select class=\"form-control\" formControlName=\"cID\">\n          <option *ngFor=\"let category of categoryList\" [disabled]=\"mode === 'edit'\" [value]=\"category._id\">{{category.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Sub Category</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Sub Category\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Description</label>\n        <angular-editor [placeholder]=\"'Enter text here...'\" formControlName=\"description\"></angular-editor>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Feature</label>\n        <angular-editor [placeholder]=\"'Enter text here...'\" formControlName=\"features\"></angular-editor>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlFile1\">Image (300 * 300)</label>\n            <input type=\"file\" class=\"form-control-file\" (change)=\"(mode === 'new') ? showPreview($event, 1) : editPreview($event, 1)\" id=\"exampleFormControlFile1\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlFile1\">Image (400 * 500)</label>\n            <input type=\"file\" class=\"form-control-file\" (change)=\"(mode === 'new') ? showPreview($event, 2) : editPreview($event, 2)\" id=\"exampleFormControlFile1\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlFile1\">Image (500 * 600)</label>\n            <input type=\"file\" class=\"form-control-file\" (change)=\"(mode === 'new') ? showPreview($event, 3) : editPreview($event, 3)\" id=\"exampleFormControlFile1\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" width=\"200\" height=\"150\" />\n        </div>\n        <div class=\"col-md-4\">\n          <img *ngIf=\"imageSrc\" [src]=\"imageSrc1\" width=\"200\" height=\"150\" />\n        </div>\n        <div class=\"col-md-4\">\n          <img *ngIf=\"imageSrc\" [src]=\"imageSrc2\" width=\"200\" height=\"150\" />\n        </div>\n      </div>\n      <hr />\n\n      <div class=\"col-md-12 error\">\n        {{errMsg}}\n      </div>\n      <div class=\"col-md-12 text-right\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"uploadForm.invalid\">Save</button>\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSubCategorySubCatImagesSubCatImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlFile1\">Image (300 * 300)</label>\n      <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event, 1)\" id=\"exampleFormControlFile1\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlFile1\">Image (400 * 500)</label>\n      <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event, 2)\" id=\"exampleFormControlFile1\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlFile1\">Image (500 * 600)</label>\n      <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event, 3)\" id=\"exampleFormControlFile1\">\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" width=\"200\" height=\"150\" />\n  </div>\n  <div class=\"col-md-4\">\n    <img *ngIf=\"imageSrc\" [src]=\"imageSrc1\" width=\"200\" height=\"150\" />\n  </div>\n  <div class=\"col-md-4\">\n    <img *ngIf=\"imageSrc\" [src]=\"imageSrc2\" width=\"200\" height=\"150\" />\n  </div>\n</div>\n<br />\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\" >Cancel</button>&nbsp;&nbsp;\n    <button class=\"btn btn-success\" (click)=\"save()\" [disabled]=\"(imageSrc === '' && imageSrc1 === '' && imageSrc2 === '') ? true : false\">Save</button>\n  </div>\n</div>\n<hr />\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"mat-elevation-z8\">\n\n      <table>\n        <tr>\n          <th>Sr. No</th>\n          <th>File 1</th>\n          <th>File 2</th>\n          <th>File 3</th>\n          <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let img of images; let i = index\">\n          <td>{{ i + 1}}</td>\n          <td>\n            <img src=\"{{baseurl + img.file}}\" />\n          </td>\n          <td>\n            <img src=\"{{baseurl + img.file1}}\" />\n          </td>\n          <td>\n            <img src=\"{{baseurl + img.file2}}\" />\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"delete(img._id)\">Delete</button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/sub-category.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/sub-category.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSubCategorySubCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row category\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Sub Category List</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <mat-form-field class=\"filter\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add New</button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-table table-striped\">\n\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"type\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.typeName}} </td>\n        </ng-container>\n\n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"file\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n          <td mat-cell *matCellDef=\"let row\">\n              <img src=\"{{baseurl + row.file}}\" width=\"100\" height=\"100\" />\n          </td>\n        </ng-container>\n\n        <!-- Color Column -->\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <button class=\"btn btn-primary\" (click)=\"subImage(row._id)\"> Sub Image </button>&nbsp;&nbsp;&nbsp;\n            <button class=\"btn btn-secondary\" (click)=\"add(row)\">Update</button>&nbsp;&nbsp;\n            <button class=\"btn btn-danger\" (click)=\"delete(row._id)\">Delete</button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/type/type.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/type/type.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminTypeTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row category\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Type List</h4>\n  </div>\n</div>\n\n<br />\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-table table-striped\">\n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\n          <td mat-cell *matCellDef=\"let row\">\n            {{row.name}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"file\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <img src=\"{{ this.baseurl + row.file}}\" />\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n          <td mat-cell *matCellDef=\"let row\" class=\"text-center\">\n              <button class=\"btn btn-secondary\" (click)=\"update(row._id)\">Update</button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/type/update-type/update-type.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/type/update-type/update-type.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminTypeUpdateTypeUpdateTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Type Form</h4>\n  </div>\n  <div class=\"col-md-12\">\n    <form [formGroup]=\"type\" (ngSubmit)=\"submit(type.value)\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Type Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlFile1\">Image</label>\n        <input type=\"file\" class=\"form-control-file\" (change)=\"showPreview($event)\" id=\"exampleFormControlFile1\">\n      </div>\n      <div class=\"col-md-12\">\n        <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" width=\"200\" height=\"150\" />\n      </div>\n      <div class=\"col-md-12 text-right\">\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"(imageSrc === '') ? true : false\">Save</button>\n        <div class=\"error\">{{errMsg}}</div>\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/admin/login/login.component.ts");
    /* harmony import */


    var _service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/auth-guard.guard */
    "./src/app/service/auth-guard.guard.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/admin/category/category.component.ts");
    /* harmony import */


    var _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sub-category/sub-category.component */
    "./src/app/admin/sub-category/sub-category.component.ts");
    /* harmony import */


    var _feature_feature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./feature/feature.component */
    "./src/app/admin/feature/feature.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/admin/slider/slider.component.ts");
    /* harmony import */


    var _type_type_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./type/type.component */
    "./src/app/admin/type/type.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
      canActivate: [_service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]]
    }, {
      path: 'category',
      component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
      canActivate: [_service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]]
    }, {
      path: 'subcategory',
      component: _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_8__["SubCategoryComponent"],
      canActivate: [_service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]]
    }, {
      path: 'feature',
      component: _feature_feature_component__WEBPACK_IMPORTED_MODULE_9__["FeatureComponent"],
      canActivate: [_service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]]
    }, {
      path: 'slider',
      component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"],
      canActivate: [_service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]]
    }, {
      path: 'type',
      component: _type_type_component__WEBPACK_IMPORTED_MODULE_11__["TypeComponent"],
      canActivate: [_service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/admin/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _service_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/shared.module */
    "./src/app/service/shared.module.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/admin/category/category.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./category/add-category/add-category.component */
    "./src/app/admin/category/add-category/add-category.component.ts");
    /* harmony import */


    var _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sub-category/sub-category.component */
    "./src/app/admin/sub-category/sub-category.component.ts");
    /* harmony import */


    var _sub_category_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sub-category/add-sub-category/add-sub-category.component */
    "./src/app/admin/sub-category/add-sub-category/add-sub-category.component.ts");
    /* harmony import */


    var _feature_feature_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./feature/feature.component */
    "./src/app/admin/feature/feature.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/admin/slider/slider.component.ts");
    /* harmony import */


    var _slider_addslider_addslider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./slider/addslider/addslider.component */
    "./src/app/admin/slider/addslider/addslider.component.ts");
    /* harmony import */


    var _type_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./type/type.component */
    "./src/app/admin/type/type.component.ts");
    /* harmony import */


    var _type_update_type_update_type_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./type/update-type/update-type.component */
    "./src/app/admin/type/update-type/update-type.component.ts");
    /* harmony import */


    var _feature_add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./feature/add-feature/add-feature.component */
    "./src/app/admin/feature/add-feature/add-feature.component.ts");
    /* harmony import */


    var _feature_feature_sub_image_feature_sub_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./feature/feature-sub-image/feature-sub-image.component */
    "./src/app/admin/feature/feature-sub-image/feature-sub-image.component.ts");
    /* harmony import */


    var _sub_category_sub_cat_images_sub_cat_images_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./sub-category/sub-cat-images/sub-cat-images.component */
    "./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"], _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_10__["SubCategoryComponent"], _sub_category_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_11__["AddSubCategoryComponent"], _feature_feature_component__WEBPACK_IMPORTED_MODULE_12__["FeatureComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"], _slider_addslider_addslider_component__WEBPACK_IMPORTED_MODULE_14__["AddsliderComponent"], _type_type_component__WEBPACK_IMPORTED_MODULE_15__["TypeComponent"], _type_update_type_update_type_component__WEBPACK_IMPORTED_MODULE_16__["UpdateTypeComponent"], _feature_add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_17__["AddFeatureComponent"], _feature_feature_sub_image_feature_sub_image_component__WEBPACK_IMPORTED_MODULE_18__["FeatureSubImageComponent"], _sub_category_sub_cat_images_sub_cat_images_component__WEBPACK_IMPORTED_MODULE_19__["SubCatImagesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"], _service_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      entryComponents: [_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"], _sub_category_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_11__["AddSubCategoryComponent"], _slider_addslider_addslider_component__WEBPACK_IMPORTED_MODULE_14__["AddsliderComponent"], _type_update_type_update_type_component__WEBPACK_IMPORTED_MODULE_16__["UpdateTypeComponent"], _feature_add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_17__["AddFeatureComponent"], _feature_feature_sub_image_feature_sub_image_component__WEBPACK_IMPORTED_MODULE_18__["FeatureSubImageComponent"], _sub_category_sub_cat_images_sub_cat_images_component__WEBPACK_IMPORTED_MODULE_19__["SubCatImagesComponent"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/category/add-category/add-category.component.styl":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/category/add-category/add-category.component.styl ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCategoryAddCategoryAddCategoryComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*# sourceMappingURL=src/app/admin/category/add-category/add-category.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY2F0ZWdvcnkvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RkFBeUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jYXRlZ29yeS9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5zdHlsIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/category/add-category/add-category.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/category/add-category/add-category.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AddCategoryComponent */

  /***/
  function srcAppAdminCategoryAddCategoryAddCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
      return AddCategoryComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AddCategoryComponent = /*#__PURE__*/function () {
      function AddCategoryComponent(dialogRef, commonService, cdr, data, fb) {
        _classCallCheck(this, AddCategoryComponent);

        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.cdr = cdr;
        this.data = data;
        this.fb = fb;
        this.imageSrc = '';
        this.fileExt = '';
        this.errMsg = '';
        this.mode = '';
        this.imgChange = false;
        this.uploadForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getType();
      }

      _createClass(AddCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.data && this.data._id) {
            this.mode = 'edit';
            this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + this.data.file;
            this.uploadForm.patchValue(this.data);
          }
        }
      }, {
        key: "getType",
        value: function getType() {
          var _this3 = this;

          this.commonService.getData('type/0').subscribe(function (res) {
            _this3.typeList = res;

            _this3.cdr.detectChanges();
          });
        }
      }, {
        key: "showPreview",
        value: function showPreview(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.data && this.data._id) {
                      this.imgChange = true;
                    }

                    file = event.target.files[0]; // File Preview

                    this.fileExt = file.name.split('.')[1];
                    _context.next = 5;
                    return this.commonService.convertBase64(file);

                  case 5:
                    fileConvert = _context.sent;
                    this.imageSrc = fileConvert;

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit(formData) {
          var _this4 = this;

          if (this.mode === '') {
            if (this.fileExt === '') {
              this.errMsg = 'Please select file';
              return false;
            }

            var typeName = this.typeList.find(function (el) {
              return el._id === formData.type;
            });
            formData.typeName = typeName.name;
            formData.ext = this.fileExt;
            formData.file = this.imageSrc;
            formData.fileName = '';
            this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_5__["LOADER"], true);
            this.commonService.postData('category', formData).subscribe(function (res) {
              _this4.dialogRef.close();
            });
          } else {
            formData.ext = this.imgChange ? this.fileExt : '';
            formData.file = this.imgChange ? this.imageSrc : '';
            formData.fileName = this.data.file;

            var _typeName = this.typeList.find(function (el) {
              return el._id === formData.type;
            });

            formData.typeName = _typeName.name;
            formData._id = this.data._id;
            this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_5__["LOADER"], true);
            this.commonService.patchData('category', formData).subscribe(function (res) {
              _this4.dialogRef.close();
            });
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }]);

      return AddCategoryComponent;
    }();

    AddCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/category/add-category/add-category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-category.component.styl */
      "./src/app/admin/category/add-category/add-category.component.styl"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AddCategoryComponent);
    /***/
  },

  /***/
  "./src/app/admin/category/category.component.styl":
  /*!********************************************************!*\
    !*** ./src/app/admin/category/category.component.styl ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCategoryCategoryComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ntd,\nth {\n  width: 25%;\n}\n.category {\n  margin-top: 10px;\n}\n.filter {\n  width: 25%;\n  margin-right: 18px;\n}\nimg {\n  width: 150px;\n  height: 150px;\n}\n/*# sourceMappingURL=src/app/admin/category/category.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY2F0ZWdvcnkvc3JjL2FwcC9hZG1pbi9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWRtaW4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFPO0FDQ1Q7QURFQTtFQUNFLGVBQVc7RUFDWCxXQUFPO0FDQVQ7QURHQTs7RUFDRSxVQUFPO0FDQVQ7QURFQTtFQUNFLGdCQUFXO0FDQWI7QURDQTtFQUNFLFVBQU07RUFDTixrQkFBYTtBQ0NmO0FEQ0E7RUFDRSxZQUFNO0VBQ04sYUFBTztBQ0NUO0FBQ0Esd0VBQXdFIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuLmNhdGVnb3J5XHJcbiAgbWFyZ2luLXRvcCAxMHB4XHJcbi5maWx0ZXJcclxuICB3aWR0aCAyNSVcclxuICBtYXJnaW4tcmlnaHQgMThweFxyXG5cclxuaW1nXHJcbiAgd2lkdGggMTUwcHhcclxuICBoZWlnaHQgMTUwcHhcclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG50ZCxcbnRoIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5jYXRlZ29yeSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZmlsdGVyIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9hZG1pbi9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/category/category.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/category/category.component.ts ***!
    \******************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppAdminCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-category/add-category.component */
    "./src/app/admin/category/add-category/add-category.component.ts");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(dialog, router, cdr, commonService) {
        _classCallCheck(this, CategoryComponent);

        this.dialog = dialog;
        this.router = router;
        this.cdr = cdr;
        this.commonService = commonService;
        this.baseurl = '';
        this.displayedColumns = ['type', 'name', 'file', 'action'];
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategory();
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this5 = this;

          setTimeout(function () {
            _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this5.categoryList);
            _this5.dataSource.sort = _this5.sort;
            _this5.dataSource.paginator = _this5.paginator;

            _this5.cdr.detectChanges();
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this6 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_8__["LOADER"], true);
          this.commonService.getData('category/0').subscribe(function (res) {
            _this6.categoryList = res;

            _this6.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_8__["LOADER"], false);

            _this6.loadData();
          }, function (err) {
            if (err.status === 401) {
              _this6.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this7 = this;

          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var dialogRef = this.dialog.open(_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_6__["AddCategoryComponent"], {
            width: '550px',
            data: data,
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this7.getCategory();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this8 = this;

          if (!confirm('Are you sure you want to delete!!!')) {
            return false;
          }

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_8__["LOADER"], true);
          this.commonService.deleteData('category/' + id).subscribe(function (res) {
            console.log(res);

            _this8.getCategory();
          }, function (err) {
            if (err.status === 401) {
              _this8.router.navigate(['/admin']);
            }
          });
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], CategoryComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": true
    })], CategoryComponent.prototype, "sort", void 0);
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/category/category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.component.styl */
      "./src/app/admin/category/category.component.styl"))["default"]]
    })], CategoryComponent);
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.component.styl":
  /*!**********************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.component.styl ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDashboardDashboardComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*# sourceMappingURL=src/app/admin/dashboard/dashboard.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEUiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zdHlsIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.styl */
      "./src/app/admin/dashboard/dashboard.component.styl"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/feature/add-feature/add-feature.component.styl":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/feature/add-feature/add-feature.component.styl ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminFeatureAddFeatureAddFeatureComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*# sourceMappingURL=src/app/admin/feature/add-feature/add-feature.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmVhdHVyZS9hZGQtZmVhdHVyZS9hZGQtZmVhdHVyZS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRkFBc0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9mZWF0dXJlL2FkZC1mZWF0dXJlL2FkZC1mZWF0dXJlLmNvbXBvbmVudC5zdHlsIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/feature/add-feature/add-feature.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/feature/add-feature/add-feature.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddFeatureComponent */

  /***/
  function srcAppAdminFeatureAddFeatureAddFeatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFeatureComponent", function () {
      return AddFeatureComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AddFeatureComponent = /*#__PURE__*/function () {
      function AddFeatureComponent(dialogRef, commonService, router, data) {
        _classCallCheck(this, AddFeatureComponent);

        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.router = router;
        this.data = data;
        this.jsonDoc = 'test';
        this.imageSrc = '';
        this.imageSrc1 = '';
        this.imageSrc2 = '';
        this.editImageSrc = '';
        this.editImageSrc1 = '';
        this.editImageSrc2 = '';
        this.fileExt = '';
        this.fileExt1 = '';
        this.fileExt2 = '';
        this.errMsg = '';
        this.isUpdated = false;
        this.mode = 'new';
      }

      _createClass(AddFeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.featureProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            features: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });

          if (this.data && this.data.file) {
            this.featureProduct.patchValue(this.data);
            this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + this.data.file;
            this.imageSrc1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + this.data.file1;
            this.imageSrc2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + this.data.file2;
            this.mode = 'edit';
          }
        }
      }, {
        key: "showPreview",
        value: function showPreview(event, n) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isUpdated = true;
                    file = event.target.files[0]; // File Preview

                    _context2.next = 4;
                    return this.commonService.convertBase64(file);

                  case 4:
                    fileConvert = _context2.sent;

                    if (n === 1) {
                      this.fileExt = file.name.split('.')[1];
                      this.imageSrc = fileConvert;
                    }

                    if (n === 2) {
                      this.fileExt1 = file.name.split('.')[1];
                      this.imageSrc1 = fileConvert;
                    }

                    if (n === 3) {
                      this.fileExt2 = file.name.split('.')[1];
                      this.imageSrc2 = fileConvert;
                    }

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "editPreview",
        value: function editPreview(event, n) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    file = event.target.files[0]; // File Preview

                    _context3.next = 3;
                    return this.commonService.convertBase64(file);

                  case 3:
                    fileConvert = _context3.sent;

                    if (n === 1) {
                      this.fileExt = file.name.split('.')[1];
                      this.editImageSrc = fileConvert;
                      this.imageSrc = fileConvert;
                    }

                    if (n === 2) {
                      this.fileExt1 = file.name.split('.')[1];
                      this.editImageSrc1 = fileConvert;
                      this.imageSrc1 = fileConvert;
                    }

                    if (n === 3) {
                      this.fileExt2 = file.name.split('.')[1];
                      this.editImageSrc2 = fileConvert;
                      this.imageSrc2 = fileConvert;
                    }

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit(formData) {
          var _this9 = this;

          var data = {
            file: this.mode === 'new' ? this.imageSrc : this.editImageSrc !== '' ? this.editImageSrc : '',
            file1: this.mode === 'new' ? this.imageSrc1 : this.editImageSrc1 !== '' ? this.editImageSrc1 : '',
            file2: this.mode === 'new' ? this.imageSrc2 : this.editImageSrc2 !== '' ? this.editImageSrc2 : '',
            fileName: this.data && this.data.file ? this.data.file : '',
            fileName1: this.data && this.data.file1 ? this.data.file1 : '',
            fileName2: this.data && this.data.file2 ? this.data.file2 : '',
            ext: this.fileExt,
            ext1: this.fileExt1,
            ext2: this.fileExt2,
            name: formData.name,
            _id: this.data && this.data._id ? this.data._id : 0
          };
          data = Object.assign({}, data, formData);

          if (data._id === 0) {
            this.commonService.postData('features', data).subscribe(function (res) {
              _this9.dialogRef.close();
            }, function (err) {
              if (err.status === 401) {
                _this9.router.navigate(['/admin']);
              } else if (err.status === 400) {
                _this9.errMsg = err.error.message;
              }
            });
          } else {
            this.commonService.patchData('features', data).subscribe(function (res) {
              _this9.dialogRef.close();
            }, function (err) {
              if (err.status === 401) {
                _this9.router.navigate(['/admin']);
              } else if (err.status === 400) {
                _this9.errMsg = err.error.message;
              }
            });
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }]);

      return AddFeatureComponent;
    }();

    AddFeatureComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddFeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-feature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-feature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/add-feature/add-feature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-feature.component.styl */
      "./src/app/admin/feature/add-feature/add-feature.component.styl"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], AddFeatureComponent);
    /***/
  },

  /***/
  "./src/app/admin/feature/feature-sub-image/feature-sub-image.component.styl":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin/feature/feature-sub-image/feature-sub-image.component.styl ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminFeatureFeatureSubImageFeatureSubImageComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 100px;\n  height: 100px;\n}\ntable {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ntd,\nth {\n  width: 25%;\n  text-align: center;\n}\n/*# sourceMappingURL=src/app/admin/feature/feature-sub-image/feature-sub-image.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmVhdHVyZS9mZWF0dXJlLXN1Yi1pbWFnZS9zcmMvYXBwL2FkbWluL2ZlYXR1cmUvZmVhdHVyZS1zdWItaW1hZ2UvZmVhdHVyZS1zdWItaW1hZ2UuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2FkbWluL2ZlYXR1cmUvZmVhdHVyZS1zdWItaW1hZ2UvZmVhdHVyZS1zdWItaW1hZ2UuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFNO0VBQ04sYUFBTztBQ0NUO0FEQUE7RUFDRSxXQUFPO0FDRVQ7QURDQTtFQUNFLGVBQVc7RUFDWCxXQUFPO0FDQ1Q7QURFQTs7RUFDRSxVQUFPO0VBQ1Asa0JBQVk7QUNDZDtBQUNBLGtHQUFrRyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ZlYXR1cmUvZmVhdHVyZS1zdWItaW1hZ2UvZmVhdHVyZS1zdWItaW1hZ2UuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbWdcclxuICB3aWR0aCAxMDBweFxyXG4gIGhlaWdodCAxMDBweFxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsImltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxudGQsXG50aCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvYWRtaW4vZmVhdHVyZS9mZWF0dXJlLXN1Yi1pbWFnZS9mZWF0dXJlLXN1Yi1pbWFnZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/feature/feature-sub-image/feature-sub-image.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/feature/feature-sub-image/feature-sub-image.component.ts ***!
    \********************************************************************************/

  /*! exports provided: FeatureSubImageComponent */

  /***/
  function srcAppAdminFeatureFeatureSubImageFeatureSubImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureSubImageComponent", function () {
      return FeatureSubImageComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var FeatureSubImageComponent = /*#__PURE__*/function () {
      function FeatureSubImageComponent(dialogRef, commonService, router, cdr, data) {
        _classCallCheck(this, FeatureSubImageComponent);

        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.router = router;
        this.cdr = cdr;
        this.data = data;
        this.images = [];
        this.fileExt = '';
        this.fileExt1 = '';
        this.fileExt2 = '';
        this.imageSrc = '';
        this.imageSrc1 = '';
        this.imageSrc2 = '';
        this.baseurl = '';
      }

      _createClass(FeatureSubImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSubImage(this.data.id);
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        }
      }, {
        key: "getSubImage",
        value: function getSubImage(id) {
          var _this10 = this;

          this.commonService.getData('features/image/' + id).subscribe(function (res) {
            _this10.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_5__["LOADER"], false);

            var images = res;
            _this10.images = images;
            console.log(_this10.images);

            _this10.cdr.detectChanges();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this11 = this;

          if (!confirm('Are you sure you want delete!!!')) {
            return false;
          }

          this.commonService.deleteData('features/image/' + id).subscribe(function (res) {
            _this11.getSubImage(_this11.data.id);
          });
        }
      }, {
        key: "showPreview",
        value: function showPreview(event, n) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    file = event.target.files[0]; // File Preview

                    _context4.next = 3;
                    return this.commonService.convertBase64(file);

                  case 3:
                    fileConvert = _context4.sent;

                    if (n === 1) {
                      this.fileExt = file.name.split('.')[1];
                      this.imageSrc = fileConvert;
                    }

                    if (n === 2) {
                      this.fileExt1 = file.name.split('.')[1];
                      this.imageSrc1 = fileConvert;
                    }

                    if (n === 3) {
                      this.fileExt2 = file.name.split('.')[1];
                      this.imageSrc2 = fileConvert;
                    }

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          var _this12 = this;

          var data = {
            file: this.imageSrc,
            file1: this.imageSrc1,
            file2: this.imageSrc2,
            ext: this.fileExt,
            ext1: this.fileExt1,
            ext2: this.fileExt2,
            fID: this.data.id
          };
          this.commonService.postData('features/image', data).subscribe(function (res) {
            _this12.dialogRef.close();
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }]);

      return FeatureSubImageComponent;
    }();

    FeatureSubImageComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    FeatureSubImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feature-sub-image',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feature-sub-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/feature-sub-image/feature-sub-image.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feature-sub-image.component.styl */
      "./src/app/admin/feature/feature-sub-image/feature-sub-image.component.styl"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], FeatureSubImageComponent);
    /***/
  },

  /***/
  "./src/app/admin/feature/feature.component.styl":
  /*!******************************************************!*\
    !*** ./src/app/admin/feature/feature.component.styl ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminFeatureFeatureComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ntd,\nth {\n  width: 25%;\n}\n.category {\n  margin-top: 10px;\n}\n.filter {\n  width: 25%;\n  margin-right: 18px;\n}\nimg {\n  width: 150px;\n  height: 150px;\n}\n/*# sourceMappingURL=src/app/admin/feature/feature.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmVhdHVyZS9zcmMvYXBwL2FkbWluL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWRtaW4vZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBTztBQ0NUO0FERUE7RUFDRSxlQUFXO0VBQ1gsV0FBTztBQ0FUO0FER0E7O0VBQ0UsVUFBTztBQ0FUO0FERUE7RUFDRSxnQkFBVztBQ0FiO0FEQ0E7RUFDRSxVQUFNO0VBQ04sa0JBQWE7QUNDZjtBRENBO0VBQ0UsWUFBTTtFQUNOLGFBQU87QUNDVDtBQUNBLHNFQUFzRSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4uY2F0ZWdvcnlcclxuICBtYXJnaW4tdG9wIDEwcHhcclxuLmZpbHRlclxyXG4gIHdpZHRoIDI1JVxyXG4gIG1hcmdpbi1yaWdodCAxOHB4XHJcblxyXG5pbWdcclxuICB3aWR0aCAxNTBweFxyXG4gIGhlaWdodCAxNTBweFxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbnRkLFxudGgge1xuICB3aWR0aDogMjUlO1xufVxuLmNhdGVnb3J5IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5maWx0ZXIge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2FkbWluL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/feature/feature.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/feature/feature.component.ts ***!
    \****************************************************/

  /*! exports provided: FeatureComponent */

  /***/
  function srcAppAdminFeatureFeatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureComponent", function () {
      return FeatureComponent;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var _add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./add-feature/add-feature.component */
    "./src/app/admin/feature/add-feature/add-feature.component.ts");
    /* harmony import */


    var _feature_sub_image_feature_sub_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./feature-sub-image/feature-sub-image.component */
    "./src/app/admin/feature/feature-sub-image/feature-sub-image.component.ts");

    var FeatureComponent = /*#__PURE__*/function () {
      function FeatureComponent(dialog, router, cdr, commonService) {
        _classCallCheck(this, FeatureComponent);

        this.dialog = dialog;
        this.router = router;
        this.cdr = cdr;
        this.commonService = commonService;
        this.displayedColumns = ['name', 'file', 'new', 'action'];
        this.type = [];
        this.baseurl = '';
      }

      _createClass(FeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFeatures();
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this13 = this;

          setTimeout(function () {
            _this13.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this13.type);
            _this13.dataSource.sort = _this13.sort;
            _this13.dataSource.paginator = _this13.paginator;

            _this13.cdr.detectChanges();
          });
        }
      }, {
        key: "getFeatures",
        value: function getFeatures() {
          var _this14 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_9__["LOADER"], true);
          this.commonService.getData('features/0').subscribe(function (res) {
            _this14.type = res;

            _this14.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_9__["LOADER"], false);

            _this14.loadData();
          }, function (err) {
            if (err.status === 401) {
              _this14.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this15 = this;

          var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var dialogRef = this.dialog.open(_add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_10__["AddFeatureComponent"], {
            width: '850px',
            panelClass: 'modalpopup',
            data: obj,
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this15.getFeatures();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this16 = this;

          if (!confirm('Are you sure you want to delete!!!')) {
            return false;
          }

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_9__["LOADER"], true);
          this.commonService.deleteData('features/' + id).subscribe(function (res) {
            _this16.getFeatures();
          }, function (err) {
            if (err.status === 401) {
              _this16.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "addSubImage",
        value: function addSubImage(id) {
          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_9__["LOADER"], true);
          var dialogRef = this.dialog.open(_feature_sub_image_feature_sub_image_component__WEBPACK_IMPORTED_MODULE_11__["FeatureSubImageComponent"], {
            width: '850px',
            panelClass: 'modalpopup',
            data: {
              id: id
            },
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {});
        }
      }]);

      return FeatureComponent;
    }();

    FeatureComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], FeatureComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": true
    })], FeatureComponent.prototype, "sort", void 0);
    FeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feature/feature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feature.component.styl */
      "./src/app/admin/feature/feature.component.styl"))["default"]]
    })], FeatureComponent);
    /***/
  },

  /***/
  "./src/app/admin/login/login.component.styl":
  /*!**************************************************!*\
    !*** ./src/app/admin/login/login.component.styl ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLoginLoginComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  margin-top: 28vh;\n  padding-bottom: 56px;\n}\nbutton {\n  float: right;\n}\n/*# sourceMappingURL=src/app/admin/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4vc3JjL2FwcC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBVztFQUNYLG9CQUFlO0FDQ2pCO0FEQUE7RUFDRSxZQUFNO0FDRVI7QUFDQSxrRUFBa0UiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkXHJcbiAgbWFyZ2luLXRvcCAyOHZoXHJcbiAgcGFkZGluZy1ib3R0b20gNTZweFxyXG5idXR0b25cclxuICBmbG9hdCByaWdodFxyXG4iLCJtYXQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDI4dmg7XG4gIHBhZGRpbmctYm90dG9tOiA1NnB4O1xufVxuYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAdminLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(commonService, router) {
        _classCallCheck(this, LoginComponent);

        this.commonService = commonService;
        this.router = router;
        this.errMsg = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
          });

          if (localStorage.getItem('token')) {
            this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["ADMIN_LOGIN"], true);
            this.router.navigate(['admin/dashboard']);
          }
        }
      }, {
        key: "login",
        value: function login(formData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this17 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    url = 'login';
                    this.commonService.postData(url, formData).subscribe(function (res) {
                      if (res.success) {
                        localStorage.setItem('token', res.token);

                        _this17.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_3__["ADMIN_LOGIN"], true);

                        _this17.router.navigate(['admin/dashboard']);
                      }
                    }, function (err) {
                      if (err.status === 401) {
                        _this17.router.navigate(['admin']);
                      } else if (err.status === 400) {
                        _this17.errMsg = err.error.message;
                      }
                    }); // data
                    // console.log(data);
                    // console.log(data.error);
                    // localStorage.setItem('token', '123');
                    // this.commonService.emitData(EmitterKeys.ADMIN_LOGIN, true);
                    // this.router.navigate(['admin/dashboard']);

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.styl */
      "./src/app/admin/login/login.component.styl"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/admin/slider/addslider/addslider.component.styl":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/slider/addslider/addslider.component.styl ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSliderAddsliderAddsliderComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*# sourceMappingURL=src/app/admin/slider/addslider/addslider.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2xpZGVyL2FkZHNsaWRlci9hZGRzbGlkZXIuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQWlGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2xpZGVyL2FkZHNsaWRlci9hZGRzbGlkZXIuY29tcG9uZW50LnN0eWwifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/slider/addslider/addslider.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin/slider/addslider/addslider.component.ts ***!
    \***************************************************************/

  /*! exports provided: AddsliderComponent */

  /***/
  function srcAppAdminSliderAddsliderAddsliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddsliderComponent", function () {
      return AddsliderComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddsliderComponent = /*#__PURE__*/function () {
      function AddsliderComponent(dialogRef, commonService, router, data) {
        _classCallCheck(this, AddsliderComponent);

        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.router = router;
        this.data = data;
        this.imageSrc = '';
        this.fileExt = '';
        this.errMsg = '';
      }

      _createClass(AddsliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
        }
      }, {
        key: "showPreview",
        value: function showPreview(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    file = event.target.files[0]; // File Preview

                    _context6.next = 3;
                    return this.convertBase64(file);

                  case 3:
                    fileConvert = _context6.sent;
                    this.imageSrc = fileConvert;

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "convertBase64",
        value: function convertBase64(file) {
          console.log(file.name);
          this.fileExt = file.name.split('.')[1];
          return new Promise(function (resolve) {
            var reader = new FileReader();

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(file);
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this18 = this;

          var data = {
            file: this.imageSrc,
            ext: this.fileExt
          };
          this.commonService.postData('slider', data).subscribe(function (res) {
            console.log(res);

            _this18.dialogRef.close();
          }, function (err) {
            if (err.status === 401) {
              _this18.router.navigate(['/admin']);
            } else if (err.status === 400) {
              _this18.errMsg = err.error.message;
            }
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }]);

      return AddsliderComponent;
    }();

    AddsliderComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddsliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addslider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addslider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/slider/addslider/addslider.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addslider.component.styl */
      "./src/app/admin/slider/addslider/addslider.component.styl"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AddsliderComponent);
    /***/
  },

  /***/
  "./src/app/admin/slider/slider.component.styl":
  /*!****************************************************!*\
    !*** ./src/app/admin/slider/slider.component.styl ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSliderSliderComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ntd,\nth {\n  width: 25%;\n}\n.category {\n  margin-top: 10px;\n}\n.filter {\n  width: 25%;\n  margin-right: 18px;\n}\nimg {\n  width: 100vh;\n  height: 274px;\n}\n/*# sourceMappingURL=src/app/admin/slider/slider.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2xpZGVyL3NyYy9hcHAvYWRtaW4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWRtaW4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQU87QUNDVDtBREVBO0VBQ0UsZUFBVztFQUNYLFdBQU87QUNBVDtBREdBOztFQUNFLFVBQU87QUNBVDtBREVBO0VBQ0UsZ0JBQVc7QUNBYjtBRENBO0VBQ0UsVUFBTTtFQUNOLGtCQUFhO0FDQ2Y7QURDQTtFQUNFLFlBQU07RUFDTixhQUFPO0FDQ1Q7QUFDQSxvRUFBb0UiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5jYXRlZ29yeVxyXG4gIG1hcmdpbi10b3AgMTBweFxyXG4uZmlsdGVyXHJcbiAgd2lkdGggMjUlXHJcbiAgbWFyZ2luLXJpZ2h0IDE4cHhcclxuXHJcbmltZ1xyXG4gIHdpZHRoIDEwMHZoXHJcbiAgaGVpZ2h0IDI3NHB4XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxudGQsXG50aCB7XG4gIHdpZHRoOiAyNSU7XG59XG4uY2F0ZWdvcnkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmZpbHRlciB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbn1cbmltZyB7XG4gIHdpZHRoOiAxMDB2aDtcbiAgaGVpZ2h0OiAyNzRweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvYWRtaW4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/slider/slider.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/slider/slider.component.ts ***!
    \**************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppAdminSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _addslider_addslider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addslider/addslider.component */
    "./src/app/admin/slider/addslider/addslider.component.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent(dialog, router, cdr, commonService) {
        _classCallCheck(this, SliderComponent);

        this.dialog = dialog;
        this.router = router;
        this.cdr = cdr;
        this.commonService = commonService;
        this.displayedColumns = ['file', 'action'];
        this.slider = [];
        this.baseurl = '';
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlider();
          this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].baseUrl;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this19 = this;

          setTimeout(function () {
            _this19.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this19.slider);
            _this19.dataSource.sort = _this19.sort;
            _this19.dataSource.paginator = _this19.paginator;

            _this19.cdr.detectChanges();
          });
        }
      }, {
        key: "getSlider",
        value: function getSlider() {
          var _this20 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_7__["LOADER"], true);
          this.commonService.getData('slider').subscribe(function (res) {
            _this20.slider = res;

            _this20.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_7__["LOADER"], false);

            _this20.loadData();
          }, function (err) {
            if (err.status === 401) {
              _this20.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this21 = this;

          if (!confirm('Are you sure you want to delete!!!')) {
            return false;
          }

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_7__["LOADER"], true);
          this.commonService.deleteData('slider/' + id).subscribe(function (res) {
            _this21.getSlider();
          }, function (err) {
            if (err.status) {
              _this21.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this22 = this;

          var dialogRef = this.dialog.open(_addslider_addslider_component__WEBPACK_IMPORTED_MODULE_6__["AddsliderComponent"], {
            width: '550px',
            data: {
              name: 'Harish',
              animal: 'Dog'
            },
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this22.getSlider();
          });
        }
      }]);

      return SliderComponent;
    }();

    SliderComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], SliderComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": true
    })], SliderComponent.prototype, "sort", void 0);
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/slider/slider.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slider.component.styl */
      "./src/app/admin/slider/slider.component.styl"))["default"]]
    })], SliderComponent);
    /***/
  },

  /***/
  "./src/app/admin/sub-category/add-sub-category/add-sub-category.component.styl":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin/sub-category/add-sub-category/add-sub-category.component.styl ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSubCategoryAddSubCategoryAddSubCategoryComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*# sourceMappingURL=src/app/admin/sub-category/add-sub-category/add-sub-category.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3ViLWNhdGVnb3J5L2FkZC1zdWItY2F0ZWdvcnkvYWRkLXN1Yi1jYXRlZ29yeS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxR0FBcUciLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zdWItY2F0ZWdvcnkvYWRkLXN1Yi1jYXRlZ29yeS9hZGQtc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5zdHlsIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/sub-category/add-sub-category/add-sub-category.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/admin/sub-category/add-sub-category/add-sub-category.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AddSubCategoryComponent */

  /***/
  function srcAppAdminSubCategoryAddSubCategoryAddSubCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSubCategoryComponent", function () {
      return AddSubCategoryComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AddSubCategoryComponent = /*#__PURE__*/function () {
      function AddSubCategoryComponent(dialogRef, commonService, router, data, fb) {
        _classCallCheck(this, AddSubCategoryComponent);

        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.router = router;
        this.data = data;
        this.fb = fb;
        this.imageSrc = '';
        this.imageSrc1 = '';
        this.imageSrc2 = '';
        this.editImageSrc = '';
        this.editImageSrc1 = '';
        this.editImageSrc2 = '';
        this.fileExt = '';
        this.fileExt1 = '';
        this.fileExt2 = '';
        this.mode = 'new';
        this.isUpdated = false;
        this.errMsg = '';
        this.uploadForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          cID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          features: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(AddSubCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.data && this.data._id) {
            this.uploadForm.patchValue(this.data);
            this.mode = 'edit';
            this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + this.data.file;
            this.imageSrc1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + this.data.file1;
            this.imageSrc2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + this.data.file2;
            console.log(this.data);
          }

          this.getCategory();
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this23 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_5__["LOADER"], true);
          this.commonService.getData('category/0').subscribe(function (res) {
            _this23.categoryList = res;

            _this23.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_5__["LOADER"], false);
          }, function (err) {
            if (err.status === 401) {
              _this23.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "showPreview",
        value: function showPreview(event, n) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.isUpdated = true;
                    file = event.target.files[0]; // File Preview

                    _context7.next = 4;
                    return this.commonService.convertBase64(file);

                  case 4:
                    fileConvert = _context7.sent;

                    if (n === 1) {
                      this.fileExt = file.name.split('.')[1];
                      this.imageSrc = fileConvert;
                    }

                    if (n === 2) {
                      this.fileExt1 = file.name.split('.')[1];
                      this.imageSrc1 = fileConvert;
                    }

                    if (n === 3) {
                      this.fileExt2 = file.name.split('.')[1];
                      this.imageSrc2 = fileConvert;
                    }

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "editPreview",
        value: function editPreview(event, n) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    file = event.target.files[0]; // File Preview

                    _context8.next = 3;
                    return this.commonService.convertBase64(file);

                  case 3:
                    fileConvert = _context8.sent;

                    if (n === 1) {
                      this.fileExt = file.name.split('.')[1];
                      this.editImageSrc = fileConvert;
                      this.imageSrc = fileConvert;
                    }

                    if (n === 2) {
                      this.fileExt1 = file.name.split('.')[1];
                      this.editImageSrc1 = fileConvert;
                      this.imageSrc1 = fileConvert;
                    }

                    if (n === 3) {
                      this.fileExt2 = file.name.split('.')[1];
                      this.editImageSrc2 = fileConvert;
                      this.imageSrc2 = fileConvert;
                    }

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit(formData) {
          var _this24 = this;

          if (this.mode === 'new') {
            if (this.imageSrc === '' && this.imageSrc1 === '' && this.imageSrc2 === '') {
              this.errMsg = 'Please select images';
              return false;
            }

            var catName = this.categoryList.find(function (el) {
              return el._id === formData.cID;
            });
            formData.typeName = catName.name;
            formData.ext = this.fileExt;
            formData.ext1 = this.fileExt1;
            formData.ext2 = this.fileExt2;
            formData.file = this.imageSrc;
            formData.file1 = this.imageSrc1;
            formData.file2 = this.imageSrc2;
            formData.fileName = '';
            formData.fileName1 = '';
            formData.fileName2 = '';
            console.log(formData);
            this.commonService.postData('subCategory', formData).subscribe(function (res) {
              _this24.dialogRef.close();
            }, function (err) {
              if (err.status === 401) {
                _this24.router.navigate(['/admin']);
              } else if (err.status === 400) {
                _this24.errMsg = err.error.message;
              }
            });
          } else {
            formData.typeName = this.data.typeName;
            formData.ext = this.fileExt;
            formData.ext1 = this.fileExt1;
            formData.ext2 = this.fileExt2;
            formData.file = this.editImageSrc;
            formData.file1 = this.editImageSrc1;
            formData.file2 = this.editImageSrc2;
            formData.fileName = this.data.file;
            formData.fileName1 = this.data.file1;
            formData.fileName2 = this.data.file2;
            formData._id = this.data._id;
            this.commonService.patchData('subCategory', formData).subscribe(function (res) {
              _this24.dialogRef.close();
            }, function (err) {
              if (err.status === 401) {
                _this24.router.navigate(['/admin']);
              } else if (err.status === 400) {
                _this24.errMsg = err.error.message;
              }
            });
          } // this.dialogRef.close();

        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }]);

      return AddSubCategoryComponent;
    }();

    AddSubCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    AddSubCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-sub-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-sub-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/add-sub-category/add-sub-category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-sub-category.component.styl */
      "./src/app/admin/sub-category/add-sub-category/add-sub-category.component.styl"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], AddSubCategoryComponent);
    /***/
  },

  /***/
  "./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.styl":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.styl ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSubCategorySubCatImagesSubCatImagesComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 100px;\n  height: 100px;\n}\ntable {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ntd,\nth {\n  width: 25%;\n  text-align: center;\n}\n/*# sourceMappingURL=src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3ViLWNhdGVnb3J5L3N1Yi1jYXQtaW1hZ2VzL3NyYy9hcHAvYWRtaW4vc3ViLWNhdGVnb3J5L3N1Yi1jYXQtaW1hZ2VzL3N1Yi1jYXQtaW1hZ2VzLmNvbXBvbmVudC5zdHlsIiwic3JjL2FwcC9hZG1pbi9zdWItY2F0ZWdvcnkvc3ViLWNhdC1pbWFnZXMvc3ViLWNhdC1pbWFnZXMuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFNO0VBQ04sYUFBTztBQ0NUO0FEQUE7RUFDRSxXQUFPO0FDRVQ7QURDQTtFQUNFLGVBQVc7RUFDWCxXQUFPO0FDQ1Q7QURFQTs7RUFDRSxVQUFPO0VBQ1Asa0JBQVk7QUNDZDtBQUNBLGlHQUFpRyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1Yi1jYXRlZ29yeS9zdWItY2F0LWltYWdlcy9zdWItY2F0LWltYWdlcy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbImltZ1xyXG4gIHdpZHRoIDEwMHB4XHJcbiAgaGVpZ2h0IDEwMHB4XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG50ZCxcbnRoIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9hZG1pbi9zdWItY2F0ZWdvcnkvc3ViLWNhdC1pbWFnZXMvc3ViLWNhdC1pbWFnZXMuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SubCatImagesComponent */

  /***/
  function srcAppAdminSubCategorySubCatImagesSubCatImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubCatImagesComponent", function () {
      return SubCatImagesComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../service/constant */
    "./src/app/service/constant.ts");

    var SubCatImagesComponent = /*#__PURE__*/function () {
      function SubCatImagesComponent(dialogRef, commonService, router, cdr, data) {
        _classCallCheck(this, SubCatImagesComponent);

        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.router = router;
        this.cdr = cdr;
        this.data = data;
        this.images = [];
        this.fileExt = '';
        this.fileExt1 = '';
        this.fileExt2 = '';
        this.imageSrc = '';
        this.imageSrc1 = '';
        this.imageSrc2 = '';
        this.baseurl = '';
      }

      _createClass(SubCatImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSubImage(this.data.id);
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        }
      }, {
        key: "getSubImage",
        value: function getSubImage(id) {
          var _this25 = this;

          this.commonService.getData('subCategory/image/' + id).subscribe(function (res) {
            _this25.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_6__["LOADER"], false);

            var images = res;
            _this25.images = images;

            _this25.cdr.detectChanges();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this26 = this;

          if (!confirm('Are you sure you want delete!!!')) {
            return false;
          }

          this.commonService.deleteData('subCategory/image/' + id).subscribe(function (res) {
            _this26.getSubImage(_this26.data.id);
          });
        }
      }, {
        key: "showPreview",
        value: function showPreview(event, n) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    file = event.target.files[0]; // File Preview

                    _context9.next = 3;
                    return this.commonService.convertBase64(file);

                  case 3:
                    fileConvert = _context9.sent;

                    if (n === 1) {
                      this.fileExt = file.name.split('.')[1];
                      this.imageSrc = fileConvert;
                    }

                    if (n === 2) {
                      this.fileExt1 = file.name.split('.')[1];
                      this.imageSrc1 = fileConvert;
                    }

                    if (n === 3) {
                      this.fileExt2 = file.name.split('.')[1];
                      this.imageSrc2 = fileConvert;
                    }

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          var _this27 = this;

          var data = {
            file: this.imageSrc,
            file1: this.imageSrc1,
            file2: this.imageSrc2,
            ext: this.fileExt,
            ext1: this.fileExt1,
            ext2: this.fileExt2,
            sCID: this.data.id
          };
          this.commonService.postData('subCategory/image', data).subscribe(function (res) {
            _this27.dialogRef.close();
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }]);

      return SubCatImagesComponent;
    }();

    SubCatImagesComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SubCatImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sub-cat-images',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sub-cat-images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sub-cat-images.component.styl */
      "./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.styl"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SubCatImagesComponent);
    /***/
  },

  /***/
  "./src/app/admin/sub-category/sub-category.component.styl":
  /*!****************************************************************!*\
    !*** ./src/app/admin/sub-category/sub-category.component.styl ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSubCategorySubCategoryComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ntd,\nth {\n  width: 25%;\n}\n.category {\n  margin-top: 10px;\n}\n.filter {\n  width: 25%;\n  margin-right: 18px;\n}\n/*# sourceMappingURL=src/app/admin/sub-category/sub-category.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3ViLWNhdGVnb3J5L3NyYy9hcHAvYWRtaW4vc3ViLWNhdGVnb3J5L3N1Yi1jYXRlZ29yeS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWRtaW4vc3ViLWNhdGVnb3J5L3N1Yi1jYXRlZ29yeS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQU87QUNDVDtBREVBO0VBQ0UsZUFBVztFQUNYLFdBQU87QUNBVDtBREdBOztFQUNFLFVBQU87QUNBVDtBREVBO0VBQ0UsZ0JBQVc7QUNBYjtBRENBO0VBQ0UsVUFBTTtFQUNOLGtCQUFhO0FDQ2Y7QUFDQSxnRkFBZ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zdWItY2F0ZWdvcnkvc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5jYXRlZ29yeVxyXG4gIG1hcmdpbi10b3AgMTBweFxyXG4uZmlsdGVyXHJcbiAgd2lkdGggMjUlXHJcbiAgbWFyZ2luLXJpZ2h0IDE4cHhcclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG50ZCxcbnRoIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5jYXRlZ29yeSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZmlsdGVyIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9hZG1pbi9zdWItY2F0ZWdvcnkvc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MubWFwICovIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/sub-category/sub-category.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/sub-category/sub-category.component.ts ***!
    \**************************************************************/

  /*! exports provided: SubCategoryComponent */

  /***/
  function srcAppAdminSubCategorySubCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-sub-category/add-sub-category.component */
    "./src/app/admin/sub-category/add-sub-category/add-sub-category.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../service/constant */
    "./src/app/service/constant.ts");
    /* harmony import */


    var _sub_cat_images_sub_cat_images_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sub-cat-images/sub-cat-images.component */
    "./src/app/admin/sub-category/sub-cat-images/sub-cat-images.component.ts");

    var SubCategoryComponent = /*#__PURE__*/function () {
      function SubCategoryComponent(dialog, router, cdr, commonService) {
        _classCallCheck(this, SubCategoryComponent);

        this.dialog = dialog;
        this.router = router;
        this.cdr = cdr;
        this.commonService = commonService;
        this.baseurl = '';
        this.displayedColumns = ['type', 'name', 'file', 'action'];
      }

      _createClass(SubCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSubCategory();
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this28 = this;

          setTimeout(function () {
            _this28.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this28.categoryList);
            _this28.dataSource.sort = _this28.sort;
            _this28.dataSource.paginator = _this28.paginator;

            _this28.cdr.detectChanges();
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getSubCategory",
        value: function getSubCategory() {
          var _this29 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_10__["LOADER"], true);
          this.commonService.getData('subCategory').subscribe(function (res) {
            _this29.categoryList = res;

            _this29.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_10__["LOADER"], false);

            _this29.loadData();
          }, function (err) {
            if (err.status === 401) {
              _this29.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this30 = this;

          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var dialogRef = this.dialog.open(_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_2__["AddSubCategoryComponent"], {
            width: '1050px',
            data: data,
            disableClose: true,
            panelClass: 'modalpopup'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this30.getSubCategory();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this31 = this;

          if (!confirm('Are you sure you want to delete!!!')) {
            return false;
          }

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_10__["LOADER"], true);
          this.commonService.deleteData('subCategory/' + id).subscribe(function (res) {
            _this31.getSubCategory();
          }, function (err) {
            if (err.status === 401) {
              _this31.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "subImage",
        value: function subImage(id) {
          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_10__["LOADER"], true);
          var dialogRef = this.dialog.open(_sub_cat_images_sub_cat_images_component__WEBPACK_IMPORTED_MODULE_11__["SubCatImagesComponent"], {
            width: '1050px',
            panelClass: 'modalpopup',
            data: {
              id: id
            },
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {});
        }
      }]);

      return SubCategoryComponent;
    }();

    SubCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
      "static": true
    })], SubCategoryComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      "static": true
    })], SubCategoryComponent.prototype, "sort", void 0);
    SubCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sub-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sub-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sub-category/sub-category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sub-category.component.styl */
      "./src/app/admin/sub-category/sub-category.component.styl"))["default"]]
    })], SubCategoryComponent);
    /***/
  },

  /***/
  "./src/app/admin/type/type.component.styl":
  /*!************************************************!*\
    !*** ./src/app/admin/type/type.component.styl ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminTypeTypeComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ntd,\nth {\n  width: 25%;\n}\n.category {\n  margin-top: 10px;\n}\n.filter {\n  width: 25%;\n  margin-right: 18px;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=src/app/admin/type/type.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdHlwZS9zcmMvYXBwL2FkbWluL3R5cGUvdHlwZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvYWRtaW4vdHlwZS90eXBlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBTztBQ0NUO0FERUE7RUFDRSxlQUFXO0VBQ1gsV0FBTztBQ0FUO0FER0E7O0VBQ0UsVUFBTztBQ0FUO0FERUE7RUFDRSxnQkFBVztBQ0FiO0FEQ0E7RUFDRSxVQUFNO0VBQ04sa0JBQWE7QUNDZjtBRENBO0VBQ0UsV0FBTTtFQUNOLFlBQU87QUNDVDtBQUNBLGdFQUFnRSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3R5cGUvdHlwZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4uY2F0ZWdvcnlcclxuICBtYXJnaW4tdG9wIDEwcHhcclxuLmZpbHRlclxyXG4gIHdpZHRoIDI1JVxyXG4gIG1hcmdpbi1yaWdodCAxOHB4XHJcblxyXG5pbWdcclxuICB3aWR0aCAxMDAlXHJcbiAgaGVpZ2h0IGF1dG9cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG50ZCxcbnRoIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5jYXRlZ29yeSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZmlsdGVyIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvYWRtaW4vdHlwZS90eXBlLmNvbXBvbmVudC5jc3MubWFwICovIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/type/type.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/admin/type/type.component.ts ***!
    \**********************************************/

  /*! exports provided: TypeComponent */

  /***/
  function srcAppAdminTypeTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeComponent", function () {
      return TypeComponent;
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


    var _update_type_update_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./update-type/update-type.component */
    "./src/app/admin/type/update-type/update-type.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _service_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../service/constant */
    "./src/app/service/constant.ts");

    var TypeComponent = /*#__PURE__*/function () {
      function TypeComponent(dialog, router, cdr, commonService) {
        _classCallCheck(this, TypeComponent);

        this.dialog = dialog;
        this.router = router;
        this.cdr = cdr;
        this.commonService = commonService;
        this.displayedColumns = ['name', 'file', 'action'];
        this.type = [];
        this.baseurl = '';
      }

      _createClass(TypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTypes();
          this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this32 = this;

          setTimeout(function () {
            _this32.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this32.type);
            _this32.dataSource.sort = _this32.sort;
            _this32.dataSource.paginator = _this32.paginator;

            _this32.cdr.detectChanges();
          });
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          var _this33 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_10__["LOADER"], true);
          this.commonService.getData('type/0').subscribe(function (res) {
            _this33.type = res;

            _this33.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_10__["LOADER"], false);

            _this33.loadData();
          }, function (err) {
            if (err.status === 401) {
              _this33.router.navigate(['/admin']);
            }
          });
        }
      }, {
        key: "add",
        value: function add(data) {
          var _this34 = this;

          var dialogRef = this.dialog.open(_update_type_update_type_component__WEBPACK_IMPORTED_MODULE_2__["UpdateTypeComponent"], {
            width: '550px',
            data: data,
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this34.getTypes();
          });
        }
      }, {
        key: "update",
        value: function update(id) {
          var _this35 = this;

          this.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_10__["LOADER"], true);
          this.commonService.getData('type/' + id).subscribe(function (res) {
            _this35.type = res;

            _this35.commonService.emitData(_service_constant__WEBPACK_IMPORTED_MODULE_10__["LOADER"], false);

            _this35.add(_this35.type);
          }, function (err) {
            if (err.status === 401) {
              _this35.router.navigate(['/admin']);
            }
          });
        }
      }]);

      return TypeComponent;
    }();

    TypeComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
      "static": true
    })], TypeComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      "static": true
    })], TypeComponent.prototype, "sort", void 0);
    TypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-type',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./type.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/type/type.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./type.component.styl */
      "./src/app/admin/type/type.component.styl"))["default"]]
    })], TypeComponent);
    /***/
  },

  /***/
  "./src/app/admin/type/update-type/update-type.component.styl":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/type/update-type/update-type.component.styl ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminTypeUpdateTypeUpdateTypeComponentStyl(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*# sourceMappingURL=src/app/admin/type/update-type/update-type.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdHlwZS91cGRhdGUtdHlwZS91cGRhdGUtdHlwZS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRkFBbUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90eXBlL3VwZGF0ZS10eXBlL3VwZGF0ZS10eXBlLmNvbXBvbmVudC5zdHlsIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/type/update-type/update-type.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/type/update-type/update-type.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateTypeComponent */

  /***/
  function srcAppAdminTypeUpdateTypeUpdateTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateTypeComponent", function () {
      return UpdateTypeComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var UpdateTypeComponent = /*#__PURE__*/function () {
      function UpdateTypeComponent(dialogRef, commonService, router, data) {
        _classCallCheck(this, UpdateTypeComponent);

        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.router = router;
        this.data = data;
        this.imageSrc = '';
        this.fileExt = '';
        this.errMsg = '';
        this.isUpdated = false;
      }

      _createClass(UpdateTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
          this.type = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({
              value: this.data.name,
              disabled: true
            }),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({
              value: this.data._id,
              disabled: true
            })
          });

          if (this.data.file) {
            this.imageSrc = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + this.data.file;
          }
        }
      }, {
        key: "showPreview",
        value: function showPreview(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var file, fileConvert;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.isUpdated = true;
                    file = event.target.files[0]; // File Preview

                    _context10.next = 4;
                    return this.convertBase64(file);

                  case 4:
                    fileConvert = _context10.sent;
                    this.imageSrc = fileConvert;

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "convertBase64",
        value: function convertBase64(file) {
          this.fileExt = file.name.split('.')[1];
          return new Promise(function (resolve) {
            var reader = new FileReader();

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(file);
          });
        }
      }, {
        key: "submit",
        value: function submit(formData) {
          var _this36 = this;

          if (this.isUpdated) {
            var data = {
              file: this.imageSrc,
              fileName: this.data.file,
              ext: this.fileExt,
              name: formData.name,
              _id: this.data._id
            };
            this.commonService.patchData('type', data).subscribe(function (res) {
              _this36.dialogRef.close();
            }, function (err) {
              if (err.status === 401) {
                _this36.router.navigate(['/admin']);
              } else if (err.status === 400) {
                _this36.errMsg = err.error.message;
              }
            });
          } else {
            this.dialogRef.close();
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }]);

      return UpdateTypeComponent;
    }();

    UpdateTypeComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    UpdateTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-type',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-type.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/type/update-type/update-type.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-type.component.styl */
      "./src/app/admin/type/update-type/update-type.component.styl"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], UpdateTypeComponent);
    /***/
  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map