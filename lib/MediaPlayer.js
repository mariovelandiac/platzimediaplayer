"use strict";
exports.__esModule = true;
// Creación de la clase MediaPlayer()
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.vid; // media es cualquier cosa, en este caso es el video
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugin(); // Marcar con guion bajo quiere decir que el método es privado
    }
    MediaPlayer.prototype.initPlayer = function () {
        this.container = document.createElement("div"); // Acá creamos un elemento de tipo div
        this.container.style.position = "relative";
        this.media.parentNode.insertBefore(this.container, this.media); // acá colocamos el nuevo contenedor al lado del video
        this.container.appendChild(this.media); // aca la decimos al dom que el video es hijo del div
    };
    // Asignación del método play a la clase MediaPlayer()
    MediaPlayer.prototype.resume = function () {
        this.media.play(); // ahora this.media representa cualquier video, al cual le vamos a dar play
    };
    // Asignación del método pause a la clase MediaPlayer()
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    // Asignación del condicional para escoger si pausar o reproducir según el estado del vídeo
    MediaPlayer.prototype.togglePlay = function () {
        if (this.media.paused) {
            this.resume();
        }
        else {
            this.pause();
        }
    };
    // Método de mutear video
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    // Metodo de desmutear video
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    // Asignación del condicional para escoger si mutear o desmutear según el estado del vídeo
    MediaPlayer.prototype.toggleMute = function () {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    };
    // INICIALIZACIÓN DE LOS PLUGINS 
    MediaPlayer.prototype.initPlugin = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
