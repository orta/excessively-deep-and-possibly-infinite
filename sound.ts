// Add your code here
namespace SoundEffects {

    let blub = new music.Melody(`@750,250,30,500 ~5 G4:1-180`);
    

    export function playTaggingSoundEffect() {
        blub.play();
        setTimeout(function () {
            blub.play();
            setTimeout(function () {
                blub.play();
                setTimeout(function () {
                    blub.play();
                    setTimeout(function () {
                        blub.play();
                        setTimeout(function () {
                            blub.play();
                        }, 300)
                    }, 300)
                }, 300)
            }, 300)
        }, 300)
    }    
}