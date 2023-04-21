

document.addEventListener("keypress", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
    
});
function makeSound(key) {
    switch (key) {
        case "a":
                var key1 = new Audio("Sounds/key01.mp3");
                key1.play();
            break;
            case "s":

                var key2 = new Audio("Sounds/key02.mp3");
                key2.play();
            break;
            case "d":

                var key3 = new Audio("Sounds/key03.mp3");
                key3.play();
            break;
            case "f":

                var key4 = new Audio("Sounds/key04.mp3");
                key4.play();
            break;
            case "j":

                var key5 = new Audio("Sounds/key05.mp3");
                key5.play();
            break;
            case "k":

                var key6 = new Audio("Sounds/key06.mp3");
                key6.play();
            break;
            case "l":

                var key7 = new Audio("Sounds/key07.mp3");
                key7.play();
            break;
            case "h":

                var key8 = new Audio("Sounds/key08.mp3");
                key8.play();
            break;
    
        default:
            break;
    }
    
    console.log(key)
};
var numberOfKeys = document.querySelectorAll(".piano").length;
for ( var i = 0; i < numberOfKeys; i++) {
    document.querySelectorAll("input")[i].addEventListener("click", function() {

        var keyNumber = this.getAttribute("value");
        makeSound(keyNumber)
        buttonAnimation(keyNumber)
    }) 
};
function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("."+ currentKey)
    activeKey.classList.add("pressed")
    
    setTimeout(function() {
        activeKey.classList.remove("pressed");
        
    }, 100);
    
}