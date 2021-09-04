var input = document.getElementById('input');
     
function push(obj) {
     
    var pushed = obj.innerHTML;
     
    if (pushed == '=') {
        // Calculate
        input.innerHTML = eval(input.innerHTML);
         
    } else if (pushed == 'C') {
        // All Clear
        input.innerHTML = '0';
         
    } else {
        if (input.innerHTML == '0') {
            input.innerHTML = pushed;
             
        } else {
            input.innerHTML += pushed;   
        }
    }
}