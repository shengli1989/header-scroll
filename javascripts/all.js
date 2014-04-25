var myElement = document.querySelector("#header");
var headroom = new Headroom(myElement, {
  "tolerance": 10,
  "offset": 144,
  "classes": {
    "initial": "headroom",
    "pinned": "scroll-up",
    "unpinned": "scroll-down",
    "top": "headroom-top",
    "notTop": "headroom-not-top"
  }
});
headroom.init();

// to destroy
headroom.destroy();
