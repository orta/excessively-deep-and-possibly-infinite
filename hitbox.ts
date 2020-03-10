// Add your code here

namespace HitBox {

    const width = 64;
    const height = 64;

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


    export class HitBoxSprite {

        static hitboxes: HitBoxSprite[] = [];

        sprite: Sprite;
        rotation: number = 0;

        constructor(private readonly target: Sprite, spawnPoint: tiles.Location) {
            this.sprite = sprites.create(HitBox.hitboxImage, SpriteKind.HitBox);
            HitBoxSprite.hitboxes.push(this);
            this.sprite.setFlag(SpriteFlag.Ghost, true)
            target.data['hitbox'] = this;
            this.sprite.follow(target)
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

            if (this.rotation !== 0) {
                this.sprite.setImage(getCurrentHitbox().rotated(this.rotation));
            } else {
                this.sprite.setImage(getCurrentHitbox());
            }
        }
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