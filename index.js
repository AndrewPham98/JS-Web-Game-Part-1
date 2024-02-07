function newImage() {
    let newImage = document.createElement("img");
    newImage.src = "assets/green-character.gif";
    newImage.style.position = "fixed";
    newImage.style.left = "100px";
    newImage.style.bottom = "100px";
    document.body.append(newImage);
}
newImage();

function newTree() {
    let newTree = document.createElement("img");
    newTree.src = "assets/tree.png";
    newTree.style.position = "fixed";
    newTree.style.left = "200px";
    newTree.style.bottom = "300px";
    document.body.append(newTree);
}
newTree();

function pineTree() {
    let pineTree = document.createElement("img");
    pineTree.src = "assets/pine-tree.png ";
    pineTree.style.position = "fixed";
    pineTree.style.left = "450px";
    pineTree.style.bottom = "200px";
    document.body.append(pineTree);
}
pineTree();

function Pillar() {
    let Pillar = document.createElement("img");
    Pillar.src = " assets/pillar.png";
    Pillar.style.position = "fixed";
    Pillar.style.left = "350px";
    Pillar.style.bottom = "100px";
    document.body.append(Pillar);
}
Pillar();

function Crate() {
    let Crate = document.createElement("img");
    Crate.src = "assets/crate.png";
    Crate.style.position = "fixed";
    Crate.style.left = "150px";
    Crate.style.bottom = "200px";
    document.body.append(Crate);
}
Crate();

function Well() {
    let Well = document.createElement("img");
    Well.src = "assets/well.png ";
    Well.style.position = "fixed";
    Well.style.left = "500px";
    Well.style.bottom = "425px";
    document.body.append(Well);
}
Well();

function newItem() {
    let newItem = document.createElement("img");
    newItem.src = "assets/sword.png";
    newItem.style.position = "fixed";
    newItem.style.left = "500px";
    newItem.style.bottom = "405px";
    document.body.append(newItem);

    newItem.addEventListener("dblclick", function () {
        newItem.remove();
    });
}
newItem();

function shield() {
    let shield = document.createElement("img");
    shield.src = "assets/shield.png ";
    shield.style.position = "fixed";
    shield.style.left = "165px";
    shield.style.bottom = "185px";
    document.body.append(shield);

    shield.addEventListener("dblclick", function () {
        shield.remove();
    });
}
shield();

function staff() {
    let staff = document.createElement("img");
    staff.src = "assets/staff.png";
    staff.style.position = "fixed";
    staff.style.left = "600px";
    staff.style.bottom = "100px";
    document.body.append(staff);

    staff.addEventListener("dblclick", function () {
        staff.remove();
    });
}
staff();
