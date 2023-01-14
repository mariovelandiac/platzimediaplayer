"use strict";
exports.__esModule = true;
var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
    AutoPlay.prototype.run = function (player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.resume();
    };
    return AutoPlay;
}());
exports["default"] = AutoPlay;
