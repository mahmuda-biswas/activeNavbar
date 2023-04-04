var item = document.querySelectorAll("a");
var currentLocation = location.href;
for (var i = 0; i < item.length; i++) {
  if (item[i].href === currentLocation) {
    item[i].className = "active";
  }
}
