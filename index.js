function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
}

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px'
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory() 
newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 150, 450)
newImage('assets/pillar.png', 300, 250)
newImage('assets/pine-tree.png', 400, 350)
newImage('assets/crate.png', 125, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 450, 550)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)





