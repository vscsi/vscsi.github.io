// nav bar //

var myNav = document.getElementById('mynav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 250) {
        myNav.classList.add("customNav");
        myNav.classList.remove("bg-transparent");
    } else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("customNav");
    }
});

// header //


var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements =$('.typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



// contact me //

$('#github').hover(function () {
    $('.change').text('Head over to my Github page');
})

$('#github').mouseout(function () {
    $('.change').text('Contact Me');
})

$('#linkedin').hover(function () {
    $('.change').text('Head over to my LinkedIn page');
})

$('#linkedin').mouseout(function () {
    $('.change').text('Contact Me');
})

$('#email').hover(function () {
    $('.change').text('Send me an email');
})

$('#email').mouseout(function () {
    $('.change').text('Contact Me');
})