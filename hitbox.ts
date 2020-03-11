// Add your code here

namespace HitBox {

    const DEBUG = false;

    const width = 64;
    const height = 64;

    const HIT_CONE_LENGTH = 32;
    const HIT_CONE_WIDTH = 32;

    let hitTestDebug = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `, SpriteKind.HitBox)
    hitTestDebug.setFlag(SpriteFlag.Invisible, !DEBUG);
    hitTestDebug.setFlag(SpriteFlag.Ghost, true);

    const hitboxImageBase: Image = img`
        . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `;
    let transparentHitbox1: Image = image.create(width, height);
    let transparentHitbox2: Image = image.create(width, height);

    transparentHitbox1.copyFrom(hitboxImageBase)
    transparentHitbox2.copyFrom(hitboxImageBase)

    export interface Point2D {
        x: number;
        y: number;
    }

    export interface Polygon {
        edges: Edge[]
    }

    export interface Edge {
        p1: Point2D;
        p2: Point2D;
    }

    function triangle(a: Point2D, b: Point2D, c: Point2D): Polygon {
        return {
            edges: [{ p1: a, p2: b }, { p1: b, p2: c }, { p1: c, p2: a }]
        }
    }


    export class HitBoxSprite {

        static hitboxes: HitBoxSprite[] = [];

        sprite: Sprite;
        rotation: number = 0;

        constructor(private readonly target: Sprite, spawnPoint: tiles.Location) {
            this.sprite = sprites.create(HitBox.hitboxImage, SpriteKind.HitBox);
            //this.sprite.l
            HitBoxSprite.hitboxes.push(this);
            this.sprite.setFlag(SpriteFlag.Ghost, true)
            target.data['hitbox'] = this;
            
            tiles.placeOnTile(this.sprite, spawnPoint)
        }

        update() {

            if (this.target.vx > 0) {
                this.rotation = 90;
            } else if (this.target.vx < 0) {
                this.rotation = -90;
            } else if (this.target.vy < 0) {
                this.rotation = 0;
            } else {
                this.rotation = 180;
            }
            
            const hitboxImage = (this.rotation !== 0) ?
                getCurrentHitbox().rotated(this.rotation) :
                getCurrentHitbox();




            let cone = triangle(
                { x: this.target.x + (this.target.width / 2), y: this.target.y + (this.target.height / 2) },
                { x: this.target.x + (this.target.width / 2) - (HIT_CONE_WIDTH / 2), y: this.target.y + (this.target.height / 2) - HIT_CONE_LENGTH  },
                { x: this.target.x + (this.target.width / 2) + (HIT_CONE_WIDTH / 2), y: this.target.y + (this.target.height / 2) - HIT_CONE_LENGTH }
            );

            let rotatedCone = rotatePoly(cone, cone.edges[0].p1, this.rotation);
            
            const isPlayerHit = polyIntersect(rotatedCone, getRect(tagger));

            if(DEBUG) {
                let center = { x: cone.edges[0].p1.x - (hitboxImage.width / 2), y: cone.edges[0].p1.y - (hitboxImage.height / 2) };
                let zeroedCone = centerPolyAt(rotatedCone, center);
                drawPolyToImage(zeroedCone, hitboxImage, 1);

                if(isPlayerHit) {
                    hitTestDebug.setFlag(SpriteFlag.Invisible, false);
                }

            }
            
            this.sprite.setImage(hitboxImage);
            this.sprite.setPosition(this.target.x, this.target.y);

            if(isPlayerHit) {
                GameMusic.stopGameMusic();
                music.stopAllSounds()
                info.changeLifeBy(-1);

            }
            
        }
    }

    function drawPolyToImage(poly: Polygon, image: Image, color: number): void {
        for(let edge of poly.edges) {
            image.drawLine(edge.p1.x, edge.p1.y, edge.p2.x, edge.p2.y, color);
        }
    }

    function centerPolyAt(poly: Polygon, center: Point2D): Polygon {

        const newEdges: Edge[] = [];

        for(let edge of poly.edges) {
            newEdges.push({ p1: zeroPointAt(edge.p1, center), p2: zeroPointAt(edge.p2, center) });
        }

        return { edges: newEdges };

    }

    function zeroPointAt(point: Point2D, center: Point2D): Point2D {
        return { x: point.x - center.x, y: point.y - center.y };
    }

    function rotatePoly(poly: Polygon, center: Point2D, angle: number) {
        const newEdges: Edge[] = [];

        for(let edge of poly.edges) {
            newEdges.push({ p1: rotatePoint(edge.p1, center, angle), p2: rotatePoint(edge.p2, center, angle) });
        }

        return { edges: newEdges };
    }

    function getRect(sprite: Sprite): Polygon {
        return {
            edges: [
                { p1: { x: sprite.x, y: sprite.y }, p2: { x: sprite.x + sprite.width, y: sprite.y } },
                { p1: { x: sprite.x + sprite.width, y: sprite.y }, p2: { x: sprite.x + sprite.width, y: sprite.y + sprite.height } },
                { p1: { x: sprite.x + sprite.width, y: sprite.y + sprite.height }, p2: { x: sprite.x, y: sprite.y + sprite.height } },
                { p1: { x: sprite.x , y: sprite.y + sprite.height }, p2: { x: sprite.x, y: sprite.y  } },
            ]
        }
    }

    function polyIntersect(poly1: Polygon, poly2: Polygon) {
        for(let poly1Edge of poly1.edges) {
            for(let poly2Edge of poly2.edges) {
                if(linesIntersect(poly1Edge, poly2Edge)) {
                    return true;
                }
            }
        }
        return false;
    }

    function linesIntersect(e1: Edge, e2: Edge) {
        
        let A1 = e1.p2.y - e1.p1.y;
        let B1 = e1.p1.x - e1.p2.x;
        let C1 = A1 * e1.p1.x + B1 * e1.p1.y;

        let A2 = e2.p2.y - e2.p1.y;
        let B2 = e2.p1.x - e2.p2.x;
        let C2 = A2 * e2.p1.x + B2 * e2.p1.y;

        let determinate = A1 * B2 - A2 * B1;

        if (determinate != 0) {
            let x = (B2 * C1 - B1 * C2) / determinate;
            let y = (A1 * C2 - A2 * C1) / determinate;

            let intersect = { x, y };

            if (inBoundedBox(e1.p1, e1.p2, intersect) &&
                inBoundedBox(e2.p1, e2.p2, intersect))
                return true;
            else
                return false;
        }
        else //lines are parrallel
            return false;
    }

    function inBoundedBox(p1: Point2D, p2: Point2D, p3: Point2D) {
        let betweenYs;
        let betweenXs;

        if (p1.y < p2.y)
            betweenYs = (p1.y <= p3.y &&
                p2.y >= p3.y);
        else
            betweenYs = (p1.y >= p3.y &&
                p2.y <= p3.y);

        if (p1.x < p2.x)
            betweenXs = (p1.x <= p3.x &&
                p2.x >= p3.x);
        else
            betweenXs = (p1.x >= p3.x &&
                p2.x <= p3.x);

        return (betweenYs && betweenXs);
    }

    function rotatePoint(point: Point2D, center: Point2D, angle: number): Point2D {
            let s = Math.sin(angle * (Math.PI/180.0));
            let c = Math.cos(angle * (Math.PI/180.0));

            const centeredx = point.x - center.x;
            const centeredy = point.y - center.y;

            let xnew = (centeredx * c) - (centeredy * s);
            let ynew = (centeredx * s) + (centeredy * c);

            return { x: xnew + center.x, y: ynew + center.y };
    }


    let flip = false;
    for (let y = 0; y < width; y++) {
        for (let x = 0; x < height; x++) {
            if (flip) {
                transparentHitbox1.setPixel(x, y, 0)
            }
            else {
                transparentHitbox2.setPixel(x, y, 0)
            }

            flip = !flip;
        }
        flip = !flip;
    }

    export let hitboxImage: Image = image.create(width, height);
    hitboxImage.copyFrom(hitboxImageBase)
    let hitboxState = 0;

    export function update() {
        if(DEBUG) {
            hitTestDebug.setPosition(tagger.x, tagger.y);
            hitTestDebug.setFlag(SpriteFlag.Invisible, true);
        }
        if (hitboxState == 1) {
            hitboxState = 0;

            hitboxImage.copyFrom(transparentHitbox1)
        } else {
            hitboxState = 1;
            hitboxImage.copyFrom(transparentHitbox2)
        }

        HitBoxSprite.hitboxes.forEach(x => x.update())
    }

    export function getCurrentHitbox() {
        return hitboxImage;
    }
}