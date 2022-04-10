(function(){
    function _(element){
        return document.querySelector(element)
    }
    let ball = _("[ball]");
    let body = _("body")
    let dark_light_checkBox = _("#dark_light_checkBox");
    let isChecked = false
    dark_light_checkBox.onclick = function(){
        if(dark_light_checkBox.checked){
            isChecked = true;
            ball.classList.add("roll")
            body.classList.add("dark")

        }else{
            isChecked = false;
            ball.classList.remove("roll")
            body.classList.remove("dark")
        }
    }
})()