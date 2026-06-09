document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("video").forEach(function (video) {
    video.playsInline = true;
  });
});
