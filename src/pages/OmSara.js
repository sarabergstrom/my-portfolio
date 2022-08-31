import { Modal } from "../components/Modal";

export function OmSara() {
  return (
    <div className="backgroundbox">
      <h2>Om Sara</h2>
      <div className="row backgroundbox">
        <div className="col-md-6">
          <h4>En kort beskrivning</h4>
          <p>
            Jag är en lugn och kreativ problemlösare, som tycker om att utmanas 
            och lära mig mer. Jag är ansvarsfull och uppskattar både att jobba i 
            grupp och på egen hand. Blir ibland kallad nörd på grund av min förmåga 
            att djupdyka och lära mig väldigt mycket på kort tid inom områden som 
            intresserar mig.
          </p>
        </div>
        <div className="col-md-6">
        <h4>Intressen</h4>
          <ul className="square-list">
            <li>Personlig utveckling</li>
            <li>Hälsa och träning</li>
            <li>Matlagning och bakning</li>
            <li>Musik och dans</li>
            <li>Språk och geografi</li>
            <li>Odling och skapande</li>
            <li>Vandring och naturupplevelser</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="row backgroundbox">
        <div className="col-md-6">
          <h4>Ambitioner och drömmar</h4>
          <p>
          Jag vill alltid bli bättre på det jag gör och drömmen vore att jobba någonstans 
          där jag känner att jag på något sätt bidrar till en bättre värld. Jag tycker om 
          när mina erfarenheter inom olika områden kan komma till nytta, oavsett om det är 
          genom att arbeta i gränslandet mellan mina kompetenser eller att bidra med nya 
          perspektiv. Jag vill både bredda för fördjupa min kompetens, lära mig nya tekniker 
          och få möjligheten att djupdyka inom vissa områden.
          </p>
        </div>
        <div className="col-md-3">
          <h4>Styrkor</h4>
          <ul className="square-list">
            <li>Logisk</li>
            <li>Strukturerad</li>
            <li>Snabblärd</li>
            <li>Omtänksam</li>
            <li>Pålitlig</li>
            <li>Hjälpsam</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Färdigheter</h4>
          <Modal id="programming" title="Programmering">
            <ul className="square-list">
              <li>C#</li>
              <li>SQL</li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>MATLAB</li>
            </ul>
          </Modal>
          <br></br>
          <Modal id="languages" title="Språk">
            <ul className="square-list">
              <li>Svenska (modersmål)</li>
              <li>Engelska (flytande)</li>
              <li>Franska (B1-nivå)</li>
              <li>Spanska (A2-nivå)</li>
              <li>Tyska (A1-nivå)</li>
            </ul>
          </Modal>

        </div>
      </div>
      <hr></hr>
      <div className="row backgroundbox">
        <div className="col-md-6">
          <h4>Varför jag skolade om mig inom IT</h4>
          <p>
          Under utbildningen på Chalmers insåg jag att jag både gillade och var bra 
          på den programmering vi hade, och kände att det var ett område där jag skulle 
          vilja få nörda ner mig ordentligt och bli riktigt bra. Jag gillar problemlösningen, 
          möjligheten att lösa problem på många olika sätt och att vara kreativ på 
          ett strukturerat sätt.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Hur jag bidrar till ett projekt</h4>
          <p>
          Jag gillar struktur, att bryta ner komplexa arbetsuppgifter i mindre delar 
          och att se till att alla vet vad vi ska göra. Med både mina egna uppgifter 
          och projektet som helhet strävar jag efter att bidra med det lilla extra, 
          och löser gärna de problem som uppstår.
          </p>
        </div>
      </div>
    </div>
  );
}
