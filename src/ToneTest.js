import React, { useEffect, useState } from 'react';

import * as Tone from 'tone';

import { init, record } from './AudioHelper';

const ToneTest = () => {

    useEffect(() => {
        init();
    }, []);

    //let playerList = [];

    const [ recording, setRecording ] = useState(false);

    const [playerList, setPlayerList ] = useState([]);

    const recordSegment = async () => {
        setRecording(true);

        const recordedAudioBuffer = await record(5);

        const player = new Tone.Player(recordedAudioBuffer).toDestination();
        //player.loop = true;
       // playerList.push(player);
        setPlayerList([...playerList, player])
        console.log(playerList)

        // Tone.loaded().then(() => {
        //     player.start()
        // })

        /*setInterval(() => {
            const synth = new Tone.MembraneSynth().toMaster();
            synth.triggerAttackRelease("C3", "8n");
        }, 1000)*/

        setRecording(false);
    }

    const SNAPE_DURATION = 3.8

    // For each sound clip, we need an entrance time relative to snape
    // Does duration of each clip affect the offset?????

    const RON_ENTRANCE = 4.2 * SNAPE_DURATION
    const DUMBLEDORE_ENTRANCE = 1.9 * SNAPE_DURATION
    const HERMIONE_ENTRANCE = 6.1 * SNAPE_DURATION
    const HARRY_ENTRANCE = 7.1 * SNAPE_DURATION

    const playAll = () => {


        Tone.Transport.scheduleRepeat((time) => {
            playerList[0].start(time)
        }, SNAPE_DURATION)

        Tone.Transport.scheduleRepeat((time) => {
            playerList[1].start(time + DUMBLEDORE_ENTRANCE)
        }, SNAPE_DURATION)

        Tone.Transport.scheduleRepeat((time) => {
            playerList[2].start(time + RON_ENTRANCE)
        }, SNAPE_DURATION)

        Tone.Transport.scheduleRepeat((time) => {
            playerList[3].start(time + HERMIONE_ENTRANCE)
        }, SNAPE_DURATION / 2)

        Tone.Transport.scheduleRepeat((time) => {
            playerList[4].start(time + HARRY_ENTRANCE)
        }, SNAPE_DURATION / 4)


        //playerList[0].start();
       /* let i = 0;
        for (const player of playerList) {
            Tone.Transport.scheduleRepeat((time) => {
                player.start(time/!* + startDelays[i]*!/)
            }, 1)

            Tone.Transport.scheduleRepeat((time) => {
                player.start(time + 5)
            }, 5)
            i++;
        }
*/
        Tone.Transport.start()
        Tone.start();


       /* console.log(playerList)
        let i = 1
        for (const player of playerList) {
            //Tone.loaded().then(() => {
              //  setInterval(() => player.start(), 1000 * i)
            //})


            Tone.Transport.schedule((time) => {
                player.start(time)
            }, 0)

            i++;
        }

        Tone.Transport.loop = true;
        // Tone.Transport.start();
        Tone.start();*/
    }


    return (
        <div>
            <button onClick={() => recordSegment()}>
                {recording ? "Recording..." : "Start recording"}
            </button>
            <button onClick={() => playAll()}>Play all</button>
        </div>
    );
};

export default ToneTest;