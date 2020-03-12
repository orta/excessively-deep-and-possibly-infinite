// Add your code here

namespace Tagger {


    export const taggerUp = img`
        . . . . . . . 5
        . 5 4 5 5 4 5 4
        . 4 5 4 5 5 4 .
        4 4 5 5 4 5 4 4
        . 4 4 5 5 4 4 .
        . 4 5 4 4 5 4 .
        . 5 4 4 5 4 5 .
        4 4 b b b c 4 4
        . . b b b c . .
        . . b b b c . .
        . . . . . . . .
        . . 7 7 7 6 . .
        . . 7 7 7 6 . .
        . . 7 7 7 6 . .
    `

    export const  taggerUp2 = img`
        . . . . . . . .
        . . . . . . . 5
        . 5 4 5 5 4 5 4
        . 4 5 4 5 5 4 .
        4 4 5 5 4 5 4 4
        . 4 4 5 5 4 4 .
        . 4 5 4 4 5 4 .
        . 5 4 4 5 4 5 .
        4 4 b b b c 4 c
        . . b b b c c .
        . c b b b c . .
        c . . . . . . .
        . . 7 7 7 6 . .
        . . 7 7 . . . .
    `

    export const  taggerUp3 = img`
        . . . . . . . .
        . . . . . . . 5
        . 5 4 5 5 4 5 4
        . 4 5 4 5 5 4 .
        4 4 5 5 4 5 4 4
        . 4 4 5 5 4 4 .
        . 4 5 4 4 5 4 .
        . 5 4 4 5 4 5 .
        c 4 b b b c 4 4
        . c b b b c . .
        . . b b b c c .
        . . . . . . . c
        . . 7 7 7 6 . .
        . . . . 7 6 . .
    `



    export const taggerLeft = img`
        . . . . . . . .
        5 4 . 4 . . . .
        . 4 5 4 4 4 . .
        . 9 9 9 d 4 . .
        . 9 d d d 5 4 .
        . d d d d 5 4 .
        . d d d d 4 4 .
        . . 4 5 4 5 4 .
        . c b c b 5 4 .
        . c b c b 4 . 4
        . c b c b 4 4 .
        . . . . . . . .
        . 6 7 6 7 . . .
        . 6 7 6 7 . . .
    `
    export const taggerLeft1 = img`
        . . . . . . . .
        . . . . . . . .
        . 4 . 4 . . . .
        . 4 5 4 4 4 . .
        . 9 9 9 d 4 . .
        . 9 d d d 5 4 .
        . d d d d 5 4 .
        . d d d d 4 4 .
        . . 4 5 4 5 4 .
        . c b c b 5 4 .
        c . b c b c 4 .
        . . . . . . c .
        . 6 7 6 7 . . .
        6 7 . . 6 7 . .
    `
    export const taggerRight = img`
        . . . . . . . .
        . . . . . 5 . 5
        . . 5 4 5 5 4 .
        . . 4 9 9 9 d .
        . 4 4 9 d d d .
        . . 5 d d d d .
        . 5 4 d d d d .
        . 4 5 4 4 . . .
        . 4 5 b c b c .
        . 4 4 b c b c .
        4 . . b c b c .
        . . . . . . . .
        . . . 7 6 7 6 .
        . . . 7 6 7 6 .
    `
    export const taggerRight2 = img`
        . . . . . . . .
        . . . . . . . .
        . . . . . 5 . 5
        . . 5 4 5 5 4 .
        . . 4 9 9 9 d .
        . 4 4 9 d d d .
        . . 5 d d d d .
        . 5 4 d d d d .
        . 4 5 4 4 . . .
        . 4 5 b c b c .
        . . c b c b . c
        4 c . . . . . .
        . . . 7 6 7 6 .
        . . 7 6 . . 7 6
    `
    export const taggerFront = img`
        . . . . . . . 5
        . 4 4 5 5 4 5 4
        . 4 9 9 9 9 4 .
        4 4 d d d 9 4 .
        . 5 d d d d 4 .
        . 4 d d d d 4 .
        4 5 4 4 4 4 5 .
        . 4 b c c c 4 4
        4 a b c c c a .
        . a b c c c a .
        . . . . . . . .
        . . 7 6 6 7 . .
        . . 7 6 6 6 . .
        . . 6 6 6 6 . .
    `
    export const taggerFront1 = img`
        . . . . . . . . .
        . . . . . . . 5 .
        . 4 4 5 5 4 5 4 .
        . 4 9 9 9 9 4 . .
        4 4 d d d 9 4 . .
        . 5 d d d d 4 . .
        . 4 d d d d 4 . .
        4 5 4 4 4 4 5 . .
        . 4 b c c c 4 4 .
        4 a a c c c . . .
        . . a c c c a . .
        . . . . . . . a .
        . . 7 6 6 7 . . .
        . . . . 6 6 . . .
    `
    export const taggerFront2 = img`
        . . . . . . . .
        . . . . . . . 5
        . 4 4 5 5 4 5 4
        . 4 9 9 9 9 4 .
        4 4 d d d 9 4 .
        . 5 d d d d 4 .
        . 4 d d d d 4 .
        4 5 4 4 4 4 5 .
        . 4 b c c c 4 4
        4 . c c c a a .
        . a c c c a . .
        a . . . . . . .
        . . 7 6 6 7 . .
        . . 6 6 . . . .
    `

    export const  taggerTagging = img`
        . . 2 . . . . .
        . . . . . 2 . 5
        2 5 4 5 5 4 5 4
        . 4 5 4 5 5 4 .
        4 4 5 5 4 5 4 4
        . 4 4 5 5 4 4 .
        2 4 5 4 4 5 4 .
        . 5 4 4 5 4 5 .
        4 4 b b b c 4 4
        . . b b b c . .
        . . b b b c . .
        . . . . . . . .
        . . 7 7 7 6 . .
        . . 7 7 7 6 . .
    `


    let lastTaggerVx = 0;
    let lastTaggerVy = 0;

    export function update() {

        if (tagger.vx !== lastTaggerVx || tagger.vy !== lastTaggerVy) {
            updateTaggerAnimation();
        }


    }

    function updateTaggerAnimation() {
        if (tagger.vy < 0 && tagger.vx === 0) {
            tagger.setImage(taggerUp2);
            animation.runImageAnimation(tagger, [taggerUp, taggerUp3, taggerUp, taggerUp2], 250, true);
        } else if (tagger.vy > 0 && tagger.vx === 0) {
            tagger.setImage(taggerFront2);
            animation.runImageAnimation(tagger, [taggerFront, taggerFront1, taggerFront, taggerFront2], 250, true);
        } else if (lastTaggerVx >= 0 && tagger.vx < 0) {
            tagger.setImage(taggerLeft1);
            animation.runImageAnimation(tagger, [taggerLeft, taggerLeft1], 250, true);

        } else if (lastTaggerVx <= 0 && tagger.vx > 0) {
            tagger.setImage(taggerRight2);
            animation.runImageAnimation(tagger, [taggerRight, taggerRight2], 250, true);
        }
        else if (tagger.vx === 0 && tagger.vy === 0) {
            animation.stopAnimation(animation.AnimationTypes.All, tagger);

            if (lastTaggerVy < 0) {
                tagger.setImage(taggerUp);
            }
            if (lastTaggerVy > 0) {
                tagger.setImage(taggerFront);
            }
            if (lastTaggerVx > 0) {
                tagger.setImage(taggerRight);
            }
            if (lastTaggerVx < 0) {
                tagger.setImage(taggerLeft);
            }


        }

        lastTaggerVx = tagger.vx;
        lastTaggerVy = tagger.vy;

    }

}