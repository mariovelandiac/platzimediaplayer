"use strict";
exports.__esModule = true;
var togglePlaywithK = /** @class */ (function () {
    function togglePlaywithK() {
        this.isKdown = this.isKdown.bind(this);
    }
    togglePlaywithK.prototype.run = function (player) {
        this.player = player;
        document.addEventListener("keydown", this.isKdown);
    };
    togglePlaywithK.prototype.isKdown = function (event) {
        var isKdown = event.code === "KeyK" || null;
        var isPaused = this.player.media.paused;
        if (isKdown) {
            if (isPaused) {
                this.player.resume();
            }
            else {
                this.player.pause();
            }
        }
    };
    return togglePlaywithK;
}());
exports["default"] = togglePlaywithK;
