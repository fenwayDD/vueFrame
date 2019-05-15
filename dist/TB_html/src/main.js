'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _iview = require('iview');

var _iview2 = _interopRequireDefault(_iview);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _util = require('./libs/util');

var _util2 = _interopRequireDefault(_util);

var _app = require('./app.vue');

var _app2 = _interopRequireDefault(_app);

require('iview/dist/styles/iview.css');

require('./assets/css/public.css');

var _store = require('./libs/store');

var _store2 = _interopRequireDefault(_store);

var _ajax = require('./libs/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _vueParticles = require('vue-particles');

var _vueParticles2 = _interopRequireDefault(_vueParticles);

var _veeValidate = require('vee-validate');

var _veeValidate2 = _interopRequireDefault(_veeValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vuex2.default);
_vue2.default.use(_iview2.default);
_vue2.default.use(_ajax2.default);
_vue2.default.use(_vueParticles2.default);
_vue2.default.use(_veeValidate2.default);

var RouterConfig = {
    mode: 'history',
    routes: _router2.default
};
var router = new _vueRouter2.default(RouterConfig);

router.beforeEach(function (to, from, next) {
    _iview2.default.LoadingBar.start();
    _util2.default.title(to.meta.title);
    _store2.default.commit('getMenu', router);
    next();
});

router.afterEach(function () {
    _iview2.default.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new _vue2.default({
    el: '#app',
    router: router,
    store: _store2.default,
    render: function render(h) {
        return h(_app2.default);
    }
});
//# sourceMappingURL=main.js.map