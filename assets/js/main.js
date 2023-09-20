const glide = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 4,
  dragThreshold: false,
  gap: 10,
  breakpoints: {
    992: {
        perView: 1,
        dragThreshold: true,
    }
  }
});

glide.mount();
