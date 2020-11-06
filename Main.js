var images = [
  "me.jpg",
  "father.jpg",
  "mother.jpg",
  "sister.jpg",
];
var FamilyNames = [
  "Akshit Kaul (me)",
  "Rajesh Kaul (dad)",
  "Anjna Kaul (mom)",
  "Anisha Kaul (sister)"
];

function nextslide() {

    if (i == 9) {
        i = 0;
    }

    document.getElementById("album").src = images[i];
    i++;

}
