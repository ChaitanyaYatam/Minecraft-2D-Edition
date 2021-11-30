var canvas = new fabric.Canvas("myCanvas")
var player_x=10;
var player_y=10;

var block_image_width=30;
var block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
    player_object=Img
    
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(player_object)
})
    
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_image_object=Img
    
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(block_image_object)
})
    
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode
    console.log(keyPressed)
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together")

        block_image_width= block_image_width+10;
        block_image_height= block_image_height+10;
        document.getElementById("wob").innerHTML=block_image_width;
        document.getElementById("hob").innerHTML=block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shiftkey pressed together")

        
        block_image_width= block_image_width-10;
        block_image_height= block_image_height-10;
        document.getElementById("wob").innerHTML=block_image_width;
        document.getElementById("hob").innerHTML=block_image_height;
    }

    if(keyPressed == '38'){
        up();
        console.log("up Key pressed")
    }

    if(keyPressed == '40'){
        down();
        console.log("down Key pressed")
    }

    if(keyPressed == '39'){
        right();
        console.log("right Key pressed")
    }

    if(keyPressed == '37'){
        left();
        console.log("left Key pressed")
    }

    if(keyPressed == '87'){
        new_image('log.jpg')
        console.log("wood")
    }

    if(keyPressed == '76'){
        new_image('leaf.png')
        console.log("leaf")
    }

    if(keyPressed == '84'){
        new_image('grass_top.png')
        console.log("Grass Top View")
    }

    if(keyPressed == '71'){
        new_image('grass.png')
        console.log("grass")
    }

    if(keyPressed == '66'){
        new_image('brick.jpg')
        console.log("brick")
    }

    if(keyPressed == '83'){
        new_image('stone.jpg')
        console.log("stone")
    }

    if(keyPressed == '88'){
        new_image('glowstone.png')
        console.log("GlowStone")
    }

    if(keyPressed == '90'){
        new_image('unrealeased_brick.png')
        console.log("Cursed Block")
    }

    if(keyPressed == '78'){
        new_image('TNT.jpg')
        console.log("Boom")
    }

    if(keyPressed == '67'){
        new_image('craft.png')
        console.log("Crafting Table")
    }

    if(keyPressed == '75'){
        new_image('netherack.jpg')
        console.log("Sqshanq")
    }

    if(keyPressed == '75'){
        new_image('bookshelf.png')
        console.log("Knowledge is Power")
    }

    if(keyPressed == '72'){
        new_image('Minecraft-Water.jpg')
        console.log("Water")
    }
}

function up(){

    if (player_y>=0){
        player_y=player_y - block_image_height
        console.log("blockimageHeight = " + block_image_height)
        console.log("x = " + player_x + " y = " + player_y)
        canvas.remove(player_object)
        player_update()
    }
}

function down(){

    if (player_y<=500){
        player_y=player_y + block_image_height
        console.log("blockimageHeight = " + block_image_height)
        console.log("x = " + player_x + " y = " + player_y)
        canvas.remove(player_object)
        player_update()
    }
}

function left(){

    if (player_x>=0){
        player_x=player_x - block_image_width
        console.log("blockimageWidth = " + block_image_width)
        console.log("x = " + player_x + " y = " + player_y)
        canvas.remove(player_object)
        player_update()
    }
}

function right(){

    if (player_x<=900){
        player_x=player_x + block_image_width
        console.log("blockimageWidth = " + block_image_width)
        console.log("x = " + player_x + " y = " + player_y)
        canvas.remove(player_object)
        player_update()
    }
}


