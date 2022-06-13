// inform users to get tested if any checkboxes are marked 'yes'

function getResults() {
    let a = document.getElementById("yes1").checked;
    let b = document.getElementById("yes2").checked;
    let c = document.getElementById("yes3").checked;
    let d = document.getElementById("yes4").checked;
    let e = document.getElementById("yes5").checked;
    let f = document.getElementById("yes6").checked;
    let g = document.getElementById("yes7").checked;
    let h = document.getElementById("yes8").checked;

    if (a == true) {
        window.location.assign("positivetest.html");
        return false;
    }
    else if (b == true) { 
        window.location.assign("positivetest.html");
        return false;
    }
    else if (c == true) { 
        window.location.assign("positivetest.html");
        return false;
    }
    else if (d == true) { 
        window.location.assign("positivetest.html");
        return false;
    }
    else if (e == true) { 
        window.location.assign("positivetest.html");
        return false;
    }
    else if (f == true) { 
        window.location.assign("positivetest.html");
        return false;
    }
    else if (g == true) { 
        window.location.assign("positivetest.html");
        return false;
    }
    else if (h == true) { 
        window.location.assign("positivetest.html");
        return false;
    }  
    else { 
        window.location.assign("negativetest.html");
        return false;
    }
};

// Progress bar updates as quiz questions are completed
// Inspired by https://codepen.io/gustitammam/pen/RRXGdj

function progressUpdate() {
    $(function () {
        var current_progress = 0;
        var interval = setInterval(function () {
            current_progress += 12.5;
            $("#dynamic")
                .css("width", current_progress + "%")
            if (current_progress >= 12.5)
                clearInterval(interval);
        }, 100);
    });   
};

function progressUpdate2() {
    $(function () {
        var current_progress = 12.5;
        var interval = setInterval(function () {
            current_progress += 12.5;
            $("#dynamic")
                .css("width", current_progress + "%")
            if (current_progress >= 25)
                clearInterval(interval);
        }, 100);
    });
};

function progressUpdate3() {
    $(function () {
        var current_progress = 25;
        var interval = setInterval(function () {
            current_progress += 12.5;
            $("#dynamic")
                .css("width", current_progress + "%")
            if (current_progress >= 37.5)
                clearInterval(interval);
        }, 100);
    });
};

function progressUpdate4() {
    $(function () {
        var current_progress = 37.5;
        var interval = setInterval(function () {
            current_progress += 12.5;
            $("#dynamic")
                .css("width", current_progress + "%")
            if (current_progress >= 50)
                clearInterval(interval);
        }, 100);
    });
};

function progressUpdate5() {
    $(function () {
        var current_progress = 50;
        var interval = setInterval(function () {
            current_progress += 12.5;
            $("#dynamic")
                .css("width", current_progress + "%")
            if (current_progress >= 62.5)
                clearInterval(interval);
        }, 100);
    });
};

function progressUpdate6() {
    $(function () {
        var current_progress = 62.5;
        var interval = setInterval(function () {
            current_progress += 12.5;
            $("#dynamic")
                .css("width", current_progress + "%")
            if (current_progress >= 75)
                clearInterval(interval);
        }, 100);
    });
};

function progressUpdate7() {
    $(function () {
        var current_progress = 75;
        var interval = setInterval(function () {
            current_progress += 12.5;
            $("#dynamic")
                .css("width", current_progress + "%")
            if (current_progress >= 87.5)
                clearInterval(interval);
        }, 100);
    });
};

function progressUpdate8() {
    $(function () {
        var current_progress = 87.5;
        var interval = setInterval(function () {
            current_progress += 12.5;
            $("#dynamic")
                .css("width", current_progress + "%")
            if (current_progress >= 100)
                clearInterval(interval);
        }, 100);
    });
};