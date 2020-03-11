// Add your code here

namespace GameMusic {

    const bass = `@10,250,50,55 ~3`
    const clap = `@5,25,30,35 ~5 G4`
    const treb = `@25,50,50,15 ~11`

    const gameMusic = `

        // 1
            ${treb} C1:1-180 
            ${bass} A1 
            
            ${treb} A1 
            ${bass} A1 
            
            ${treb} G1 
            ${bass} A1 
            
            
            ${treb} A2 
            ${bass} A1
            
            ${clap}
            ${bass} A1 
            
            ${treb} A1 
            ${bass} A1 
            
            ${treb} G1 
            ${bass} A1 
            
            ${treb} A2 
            ${bass} A1

        // 2
            ${treb} C1:1-180 
            ${bass} A1 
            
            ${treb} A1 
            ${bass} A1 
            
            ${treb} G1 
            ${bass} A1 
            
            ${treb} A2 
            ${bass} A1
            
            ${clap}
            ${bass} A1 
            
            ${treb} A1 
            ${bass} A1 
            
            ${treb} G1 
            ${bass} A1 
            
            ${treb} A2 
            ${bass} A1

        // 3
            ${treb} C1:1-180 
            ${bass} A1 
            
            ${treb} A1 
            ${bass} A1 
            
            ${treb} G1 
            ${bass} A1 
            
            ${treb} A2 
            ${bass} A1
            
            ${clap}
            ${bass} A1 
            
            ${treb} A1 
            ${bass} A1 
            
            ${treb} G1 
            ${bass} A1 
            
            ${treb} A2 
            ${bass} A1

        // 4

        ${treb} C1:1-180 
            ${bass} A1 

            ${treb} A1
            ${bass} A1

            ${treb} G1
            ${bass} A1

            ${treb} E2
            ${bass} A1

            ${clap}
            ${bass} A1

            ${treb} F2
            ${bass} A1

            ${treb} E2
            ${bass} A1

            ${treb} A2
            ${bass} A1
            `


    let playingMusic = false;

    export function startGameMusic() {
        playingMusic = true;
        loopGameMusic();
    }

    function loopGameMusic() {
        if(playingMusic) {
            music.playSoundUntilDone(gameMusic);
            setTimeout(loopGameMusic, 0);
        }
    }

    export function stopGameMusic() {
        playingMusic = false;
        music.stopAllSounds();
    }

}