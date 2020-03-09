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
}
tiles.setTilemap(tiles.createTilemap(
            hex`1c00140002020202020202020202020202020202040808080e0303030303030302111111111111111111111102020202040808080e0303030303030302111111111111111111111102020202040808080e0303030303030302020202020202020202020202020202040808080e0303030303030302020202020202020202020202020202070808080e0303030303030302111111111111020202111111111111040808080e0303030303030302111111111111020202111111111111040808080e0303030303030302020202020202020202020202020202040808080e0303030303030302020202020202020202020202020202040808080e0303030303030311111111111111111111111102020202040808080e0303030303030311111111111111111111111102020202070808080e0303030303030302020202020202020202020202020202040808080e0303030303030302020202020202020202020202020202040808080e0303030303030302111111111111110211111111111102040808080e0303030303030302111111111111110211111111111102040808080e0303030303030302020202020202020202020202020202040808080e0303030303030302020202020202020202020202020202070808080e0303030303030302020202111111111111111102020202040808080e0303030303030302020202111111111111111102020202040808080e0303030303030302020202020202020202020202020202040808080e03030303030303`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.forestTiles23,myTiles.tile1,sprites.castle.tilePath5,sprites.builtin.brick,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.dungeon.doorOpenNorth,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tilePath2,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.builtin.forestTiles24,myTiles.tile3],
            TileScale.Sixteen
        ))
