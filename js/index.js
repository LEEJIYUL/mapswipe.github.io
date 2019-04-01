function callFunctions() {
    footerYear();
}

function footerYear(){
    let theDate = new Date();
    
    document.getElementById('year').innerHTML = theDate.getFullYear();
}

