namespace SpriteKind {
    export const footlong = SpriteKind.create()
}
let enemy_10: Sprite = null
let enemy_2: Sprite = null
scene.setBackgroundImage(assets.image`back ground`)
game.splash("made my liam riordan")
game.splash("please enjoy")
game.setDialogTextColor(15)
game.setDialogFrame(assets.image`frame`)
game.showLongText("MEGOLADON SIMULTOR", DialogLayout.Top)
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    cb11111111111111111111bc
    ccd111111111111111111dc.
    .ccd1111111111111111dcc.
    ..c111111111111111dbcc..
    .b11dcccccccccccccccc...
    cddcccccccccccccccc.....
    ccccc...................
    `)
game.setDialogTextColor(8)
game.showLongText("use w a s d or arow keys to move", DialogLayout.Center)
game.showLongText("eat meat untill you are at 3 score", DialogLayout.Center)
game.showLongText("eat fish that are smaller than you ", DialogLayout.Center)
game.showLongText("when the timer runs down a sub will spawn EAT IT at 250 score", DialogLayout.Center)
game.showLongText("press a to start ", DialogLayout.Top)
music.stopAllSounds()
tiles.setCurrentTilemap(tilemap`waterer`)
let mySprite = sprites.create(assets.image`fish1`, SpriteKind.Player)
info.startCountdown(240)
info.setScore(0)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 50, 50)
tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 70), randint(0, 50)))
let Player_Scale = 0.5
let enemy_2_scale = 0.515
let enemy_10_scale = 0.55
let enemy_50_scale = 0.75
let Jellyboy_scale = 1
let subwayrine = sprites.create(assets.image`subwayrine`, SpriteKind.footlong)
game.onUpdate(function () {
    let list: number[] = []
    for (let value of list) {
        if (enemy_2.vx > 1) {
        	
        } else {
        	
        }
    }
})
game.onUpdateInterval(7000, function () {
    enemy_2 = sprites.create(assets.image`level 2`, SpriteKind.Player)
    tiles.placeOnTile(enemy_2, tiles.getTileLocation(randint(mySprite.y / 16 + 1, mySprite.y / 16 + -10), randint(mySprite.y / 16 + 10, mySprite.y / 16 + -1)))
    enemy_2.setScale(enemy_2_scale, ScaleAnchor.Middle)
    enemy_2.follow(mySprite, 33)
})
game.onUpdateInterval(7000, function () {
    enemy_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
game.onUpdateInterval(7000, function () {
    enemy_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
game.onUpdateInterval(7000, function () {
    enemy_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
game.onUpdateInterval(12500, function () {
    enemy_10 = sprites.create(assets.image`level 10 lefty`, SpriteKind.Player)
})
