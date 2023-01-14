"use strict";
exports.__esModule = true;
var AutoPause = /** @class */ (function () {
    // Atributos 
    function AutoPause() {
        this.threshold = 0.25;
        // En este punto le asignamos al objeto this.handlerIntersection que su instancia o contexto no sea sí misma
        // sino que sea la clase o la instancia de la clase
        // Para ello usamos el método bind que permite ingresarle a una función su objeto this, por tanto, 
        // como el objeto this es ingresado en el contructor, todo el ámbito o instancia de this.handlerIntersection 
        // será la misma de la clase
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisible = this.handlerVisible.bind(this);
    }
    // Métodos
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });
        // En este punto se le invoca al objeto observer para que utilice su método interno .observe y como argumento recibe lo que va a observar, que es el video
        observer.observe(this.player.media);
        // Visibility Changue
        document.addEventListener("visibilitychange", this.handlerVisible);
    };
    AutoPause.prototype.handlerIntersection = function (entries) {
        var entry = entries[0];
        var enrtyThreshold = entry.intersectionRatio;
        var isVisible = enrtyThreshold >= this.threshold || null;
        if (isVisible) {
            this.player.resume();
        }
        else {
            this.player.pause();
        }
    };
    AutoPause.prototype.handlerVisible = function () {
        var isHidden = document.visibilityState === "hidden" || null;
        if (isHidden) {
            this.player.pause();
        }
        else {
            // this.player.play();
        }
    };
    return AutoPause;
}());
exports["default"] = AutoPause;
