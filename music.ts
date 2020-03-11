// Add your code here

namespace GameMusic {


    const bass = `@10,250,50,55 ~3`
    const clap = `@5,25,30,35 ~5`
    const treb = `@125,50,50,15 ~11`
    const treb2 = `@25,50,50,15 ~11`
    const sweep = `@605,25,30,35 ~5`
    const drum = `@5,128,50,55 ~3`;
    const bgtone = `@500,50,50,2000 ~1`;

    let bassline = new music.Melody(`${bass} A1:2-180 A1 A1 A1 A2 A1 A1 A1`)
    let perc = new music.Melody(`${clap} A1:1-180 R R R R R R R ${drum} A2 R R R R R R R `);

    let melody = new music.Melody(
        `${treb2} 
        C1:2-180 A1 G1 A2 R A1 G1 A2 
        C1:2-180 A1 G1 A2 R A1 G1 A2 
        C1:2-180 A1 G1 A2 R A1 G1 A2 
        A2 F2 E2 A2 D2 A2 C2 A2 
        `
    )

    export function startGameMusic() {
        bassline.loop()
        perc.loop(128)
        melody.loop()
    }

    export function stopGameMusic() {
        bassline.stop()
        perc.stop()
        melody.stop()
    }

}