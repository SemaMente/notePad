function function1() {
  //w1Table isimli class'a w1Table1 isimli değişkeni atıyorum.
  //I assign the variable named w1Table to the class named w1Table.
  var w1Table = document.querySelector(".w1Table");
  var w1TableRow = document.createElement("tr"); //I create new tr and assign it to w1TableRow
  var w1TableCol = document.createElement("td"); // I create new td and assign it to the w1TableCol

  var w2Table = document.querySelector(".w2Table");
  var w2TableRow = document.createElement("tr");
  var w2TableCol = document.createElement("td");

  var w3Table = document.querySelector(".w3Table");
  var w3TableRow = document.createElement("tr");
  var w3TableCol = document.createElement("td");

  //mytextarea id'ye yazılan her şeyi notearea isimli değişkene atıyorum, yani yazılan her şey notearea'ya atancak.
  var notearea = document.querySelector("#myTextarea").value; //Assign everything written to myTextarea id to a variabla named notearea.

  //idsi week1 olan checkbox değişkenini w1checkbox a atıyorum
  //I assign the checkbox variable with id week1 to w1Checbox
  var w1Checkbox = document.getElementById("week1");
  //w1Text değişkenini w1 idli tablea atıyorum(seçilen checkboxa göre tablelara yeleşecekler)
  var w1Text = document.getElementById("w1"); // I assign the table variable with id w1 to w1Text

  //If checkbox is checked and true, the following commands work.
  if (w1Checkbox.checked == true) {
    w1TableCol.innerText = notearea; //The text written by the user is entered in w1TableCol.
    w1TableRow.appendChild(w1TableCol); //Assign w1TableCol to w1TableRow.
  } else {
    //checkbox false olursa innertext kısmına hiçbir şey yazılmayacak
    //If checkbox is false, nothing will be written to innertext
    w1Text.style.display = "none";
  }

  var w2Checkbox = document.getElementById("week2");
  var w2Text = document.getElementById("w2");

  if (w2Checkbox.checked == true) {
    w2TableCol.innerText = notearea;
    w2TableRow.appendChild(w2TableCol);
  } else {
    //hiçbir şey yazılmayacak
    w2Text.style.display = "none";
  }

  var w3Checkbox = document.getElementById("week3");
  var w3Text = document.getElementById("w3");

  if (w3Checkbox.checked == true) {
    w3TableCol.innerText = notearea;
    w3TableRow.appendChild(w3TableCol);
  } else {
    w3Text.style.display = "none";
  }
  //table rowları lgili tablea atıyorum.
  //Assign the table rows to the related table
  w1Table.appendChild(w1TableRow);
  w2Table.appendChild(w2TableRow);
  w3Table.appendChild(w3TableRow);
}
