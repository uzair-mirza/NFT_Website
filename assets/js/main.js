function userMenuWrapperActive() {
    document.querySelector(".nft-user-menu-wrapper").classList.toggle("active")
}

function singleItemClick(e) {
    document.getElementById(`${e}`).classList.toggle("active")
}

function filterItemClick(e) {
    document.getElementById(`${e}`).classList.toggle("active")
}

function singleItemLoveClick(e) {
    document.getElementById(`${e}`).classList.toggle("active")
}

function openTabContent(e, t) {
    var n, o, i;
    for (o = document.getElementsByClassName("tabcontent"), n = 0; n < o.length; n++) o[n].style.display = "none";
    for (i = document.getElementsByClassName("tablinks"), n = 0; n < i.length; n++) i[n].className = i[n].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
}

function openImgTabContent(e, t) {
    var n, o, i;
    for (o = document.getElementsByClassName("tab-content"), n = 0; n < o.length; n++) o[n].style.display = "none";
    for (i = document.getElementsByClassName("tab-links"), n = 0; n < i.length; n++) i[n].className = i[n].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
}

function dashboardTabContent(e, t) {
    var n, o, i;
    for (console.log(t), o = document.getElementsByClassName("tab-content"), n = 0; n < o.length; n++) o[n].style.display = "none";
    for (i = document.getElementsByClassName("tab-links"), n = 0; n < i.length; n++) i[n].className = i[n].className.replace(" active", "");
    document.querySelector(`${t}`).style.display = "block", e.currentTarget.className += " active"
}

function activeTabForUrl(e, t) {
    var n, o, i;
    for (o = document.getElementsByClassName("tab-content"), n = 0; n < o.length; n++) o[n].style.display = "none";
    for (i = document.getElementsByClassName("tab-links"), n = 0; n < i.length; n++) `#${i[n].classList[1]}` === t && i[n].classList.add("active");
    for (n = 0; n < o.length; n++) `#${o[n].id}` === t && (document.querySelector(`${t}`).style.display = "block")
}
if (window.addEventListener("load", (e => {
        const t = window.location.hash;
        t ? activeTabForUrl(e, t) : document.getElementsByClassName("tab-links")[0].classList.add("active")
    })), mybutton = document.getElementById("scrollTopBtn"), mybutton) {
    function scrollFunction() {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 500 ? mybutton.style.display = "block" : mybutton.style.display = "none"
    }
    window.onscroll = function () {
        scrollFunction()
    }
}

function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}

function nftCountDown() {
    var e = new Date("May 5, 2023 12:37:25").getTime();
    document.querySelector(".nft-promotion-time") && setInterval((function () {
        var t = (new Date).getTime(),
            n = e - t,
            o = Math.floor(n / 864e5),
            i = Math.floor(n % 864e5 / 36e5),
            l = Math.floor(n % 36e5 / 6e4),
            r = Math.floor(n % 6e4 / 1e3),
            a = document.querySelector(".nft-promotion-time p span.days"),
            s = document.querySelector(".nft-promotion-time p span.hours"),
            c = document.querySelector(".nft-promotion-time p span.minutes"),
            d = document.querySelector(".nft-promotion-time p span.seconds");
        a.innerHTML = o, s.innerHTML = i, c.innerHTML = l, d.innerHTML = r
    }), 1e3)
}

function nftProductDetailsCountDown() {
    var e = new Date("May 5, 2023 12:37:25").getTime();
    document.querySelector(".product-counter-timer") && setInterval((function () {
        var t = (new Date).getTime(),
            n = e - t,
            o = Math.floor(n / 864e5),
            i = Math.floor(n % 864e5 / 36e5),
            l = Math.floor(n % 36e5 / 6e4),
            r = Math.floor(n % 6e4 / 1e3),
            a = document.querySelector("ul.product-counter-timer li span.days"),
            s = document.querySelector("ul.product-counter-timer li span.hours"),
            c = document.querySelector("ul.product-counter-timer li span.min"),
            d = document.querySelector("ul.product-counter-timer li span.sec");
        a.innerHTML = o, s.innerHTML = i, c.innerHTML = l, d.innerHTML = r
    }), 1e3)
}

function nftLiveBiddingCountDownOne() {
    var e = new Date("March 25, 2023 16:37:31").getTime();
    document.querySelector(".bidding-duration-box-1") && setInterval((function () {
        var t = (new Date).getTime(),
            n = e - t,
            o = Math.floor(n / 864e5),
            i = Math.floor(n % 864e5 / 36e5),
            l = Math.floor(n % 36e5 / 6e4),
            r = Math.floor(n % 6e4 / 1e3),
            a = document.querySelector(".bidding-duration-box-1 ul li span.days"),
            s = document.querySelector(".bidding-duration-box-1 ul li span.hours"),
            c = document.querySelector(".bidding-duration-box-1 ul li span.minutes"),
            d = document.querySelector(".bidding-duration-box-1 ul li span.seconds");
        a.innerHTML = o, s.innerHTML = i, c.innerHTML = l, d.innerHTML = r
    }), 1e3)
}

function nftLiveBiddingCountDownTwo() {
    var e = new Date("March 25, 2023 14:46:35").getTime();
    document.querySelector(".bidding-duration-box-2") && setInterval((function () {
        var t = (new Date).getTime(),
            n = e - t,
            o = Math.floor(n / 864e5),
            i = Math.floor(n % 864e5 / 36e5),
            l = Math.floor(n % 36e5 / 6e4),
            r = Math.floor(n % 6e4 / 1e3),
            a = document.querySelector(".bidding-duration-box-2 ul li span.days"),
            s = document.querySelector(".bidding-duration-box-2 ul li span.hours"),
            c = document.querySelector(".bidding-duration-box-2 ul li span.minutes"),
            d = document.querySelector(".bidding-duration-box-2 ul li span.seconds");
        a.innerHTML = o, s.innerHTML = i, c.innerHTML = l, d.innerHTML = r
    }), 1e3)
}

function nftLiveBiddingCountDownThree() {
    var e = new Date("March 25, 2023 12:37:50").getTime();
    document.querySelector(".bidding-duration-box-3") && setInterval((function () {
        var t = (new Date).getTime(),
            n = e - t,
            o = Math.floor(n / 864e5),
            i = Math.floor(n % 864e5 / 36e5),
            l = Math.floor(n % 36e5 / 6e4),
            r = Math.floor(n % 6e4 / 1e3),
            a = document.querySelector(".bidding-duration-box-3 ul li span.days"),
            s = document.querySelector(".bidding-duration-box-3 ul li span.hours"),
            c = document.querySelector(".bidding-duration-box-3 ul li span.minutes"),
            d = document.querySelector(".bidding-duration-box-3 ul li span.seconds");
        a.innerHTML = o, s.innerHTML = i, c.innerHTML = l, d.innerHTML = r
    }), 1e3)
}

function nftLiveBiddingCountDownFour() {
    var e = new Date("March 25, 2023 12:37:25").getTime();
    document.querySelector(".bidding-duration-box-4") && setInterval((function () {
        var t = (new Date).getTime(),
            n = e - t,
            o = Math.floor(n / 864e5),
            i = Math.floor(n % 864e5 / 36e5),
            l = Math.floor(n % 36e5 / 6e4),
            r = Math.floor(n % 6e4 / 1e3),
            a = document.querySelector(".bidding-duration-box-4 ul li span.days"),
            s = document.querySelector(".bidding-duration-box-4 ul li span.hours"),
            c = document.querySelector(".bidding-duration-box-4 ul li span.minutes"),
            d = document.querySelector(".bidding-duration-box-4 ul li span.seconds");
        a.innerHTML = o, s.innerHTML = i, c.innerHTML = l, d.innerHTML = r
    }), 1e3)
}
nftCountDown(), nftProductDetailsCountDown(), nftLiveBiddingCountDownOne(), nftLiveBiddingCountDownTwo(), nftLiveBiddingCountDownThree(), nftLiveBiddingCountDownFour();
const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach((e => {
    e.addEventListener("click", (() => {
        e.parentNode.classList.toggle("active")
    }))
})), $(".slider").slick({
    dots: !0,
    infinite: !0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 1e3,
    arrows: !1,
    customPaging: function (e, t) {
        $(e.$slides[t]).data();
        return '<a class="dot">' + t + "</a>"
    },
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            dots: !1,
            arrows: !1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 400,
        settings: {
            dots: !1,
            arrows: !1,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
var b = document.getElementsByTagName("BODY")[0];

function parallaxed(e) {
    var t, n = -.4 * e.clientX / 8,
        o = -.4 * e.clientY / 8,
        i = document.getElementsByClassName("parallaxed");
    for (t = 0; t < i.length; t++) i[t].style.transform = "translate(" + n + "px," + o + "px)"
}
b.addEventListener("mousemove", (function (e) {
    parallaxed(e)
})), $(document).ready((function () {
    $(".carousel").slick({
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        arrows: !1,
        autoplaySpeed: 2e3,
        dots: !0,
        centerMode: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: !0,
                infinite: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 2e3
            }
        }]
    })
}));