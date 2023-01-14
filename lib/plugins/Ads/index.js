"use strict";
exports.__esModule = true;
var Ads_1 = require("./Ads");
var AdsPlugin = /** @class */ (function () {
    function AdsPlugin() {
        this.ads = Ads_1["default"].getInstance();
        this.adsContainer = document.createElement("div");
        this.handlerTimeUpdate = this.handlerTimeUpdate.bind(this);
    }
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handlerTimeUpdate);
    };
    AdsPlugin.prototype.handlerTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    };
    AdsPlugin.prototype.renderAd = function () {
        var _this = this;
        if (this.currentAd) {
            return; // si ya existe un add cuando lo rendericemos, entonces nos salimos de la función
        }
        var ad = this.ads.getAds();
        this.currentAd = ad;
        this.adsContainer.innerHTML = "\n        <div class=\"ads\">\n            <a  class=\"ads__link\" href=\"".concat(this.currentAd.url, "\" target=\"_blank\">\n                <img class=\"ads__img\" src=\"").concat(this.currentAd.imageUrl, "\" />\n                <div class=\"ads__info\">\n                <h5 class=\"ads__title\">").concat(this.currentAd.title, "</h5>\n                <p class=\"ads__body\">").concat(this.currentAd.body, "</p>\n                </div>\n            </a>\n        </div>\n        ");
        setTimeout(function () {
            _this.currentAd = null;
            _this.adsContainer.innerHTML = "";
        }, 30000);
    };
    return AdsPlugin;
}());
exports["default"] = AdsPlugin;
