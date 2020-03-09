namespace SpriteKind {
    export const TaggingSpot = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
a a a a a a a a a a a a a a a 8 
b b b b b b b b b b b b b b b 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    tagger.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . f f 9 9 . . . . . . . 
. . . . . f 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    tagger.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . 9 f f 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 3 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
function moveTaggingSpot () {
    tiles.placeOnRandomTile(tagTarget, myTiles.tile4)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    distX = Math.abs(tagger.x) - Math.abs(tagTarget.x)
    distY = Math.abs(tagger.y) - Math.abs(tagTarget.y)
    console.log(`x ${distX} y, ${distY}`)
    if (distX < 20 && distY < 20) {
        tagger.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . 9 . 9 9 9 9 . 9 . . . . . 
. . . . 9 . . . . 9 . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    tagger.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 f f . . . . . . . 
. . . . . 9 9 9 f . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 3 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TaggingSpot, function (sprite, otherSprite) {
    otherSprite.setImage(img`
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
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tagger.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
let tagger: Sprite = null
let tagTarget: Sprite = null
let distX = 0
let distY = 0
tiles.setTilemap(tiles.createTilemap(
            hex`1c00140002020202020202020202020202020202040808080e0303030303030302111111111111111111111102020202040808080e0303030303030302111111111111111111111102020202040808080e0303030303030302121212121212121212121202020202040808080e0303030303030302020202020202020202020202020202070808080e0303030303030302111111111111020202111111111111040808080e0303030303030302111111111111020202111111111111040808080e0303030303030302121212121212020202121212121212040808080e0303030303030302020202020202020202020202020202040808080e0303030303030311111111111111111111111102020202040808080e0303030303030311111111111111111111111102020202070808080e0303030303030312121212121212121212121202020202040808080e0303030303030302020202020202020202020202020202040808080e0303030303030302111111111111110211111111111102040808080e0303030303030302111111111111110211111111111102040808080e0303030303030302121212121212120212121212121202040808080e0303030303030302020202020202020202020202020202070808080e0303030303030302020202111111111111111102020202040808080e0303030303030302020202111111111111111102020202040808080e0303030303030302020202121212121212121202020202040808080e03030303030303`,
            img`
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . . . . . . . . . . 
. 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 . . . . . . . . . . . 
. 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.forestTiles23,myTiles.tile1,sprites.castle.tilePath5,sprites.builtin.brick,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.dungeon.doorOpenNorth,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tilePath2,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.builtin.forestTiles24,myTiles.tile3,myTiles.tile4],
            TileScale.Sixteen
        ))
tagTarget = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 . . . . . . 
. . . 1 1 1 . . . . . . . . 1 1 1 . . . 
. 1 1 . . . . . . . . . . . . . . 1 1 . 
1 . . . . . . . . 1 1 . . . . . . . . 1 
1 . . . . . . . . 1 1 . . . . . . . . 1 
. 1 1 . . . . . . . . . . . . . . 1 1 . 
. . . 1 1 1 . . . . . . . . 1 1 1 . . . 
. . . . . . 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.TaggingSpot)
tagger = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . 9 9 9 9 . . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(tagger)
controller.moveSprite(tagger)
moveTaggingSpot()
