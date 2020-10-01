import React from 'react';
import ToneTest from "./ToneTest";

function App() {
  return (
    <div>
        <ToneTest/>
        <pre>

            How to use:<br/>

            You will need to record five times, each roughly to the rhythm of: <br/>
            1: Snape, Snape, Severus Snape <br/>
            2. Dumbledore <br/>
            3. Ron, Ron ... Ron Weasly <br/>
            4. Hermione <br/>
            5. HarryPotter (fast) <br/>
            <br/>
            Press the "Start recording" button, record the clip, and wait for the button to reset. <br/>
            After doing this five times, press "Play all".<br/><br/>

            Alternatively:<br/>
            1: Heap, heap, heap-ity heap <br/>
            2. BUBBLE SORT<br/>
            3. Merge, Merge, MeRRRge sort <br/>
            4. SelectionSort (fast)<br/>
            5. BinarySearch (fast) <br/>
            <br/>

        </pre>
    </div>
  );
}

export default App;
