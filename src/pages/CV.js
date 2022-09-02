import { CVItem } from '../components/CVItem';
import { Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function CV() {
  return (
      <div className="row cv backgroundbox">
        <div className="col-md-6 flex-fill">
          <h2>Arbetslivserfarenhet</h2>
          <CVItem title="Massageterapeut" company="Salong Fame" time="2021-2022">
            <p>Individuellt anpassade massageutbildningar, bokningar mm.</p>
          </CVItem>
          <CVItem title="Webbutveckling" company="Enskild näringsverksamhet" time="2021- ">
            <p>Underkonsult på deltid, bland annat migrering av hemsidor och sammanställande av dokument i InDesign.</p>
          </CVItem>
          <CVItem title="Massageterapeut" company="Enskild näringsverksamhet" time="2014- ">
            <p>Individuellt anpassade massageutbildningar, med fokus på behandlande massage.</p>
          </CVItem>
          <CVItem title="Sommarjobb arkivering" company="Finja Prefab" time="2015-2020">
            <p>Sortering, uppdatering och utrensning i arkivet för företagets projekt- och ekonomipärmar, inklusive makulering av känsliga dokument.</p>
          </CVItem>
          <CVItem title="Feriearbete Dokumenthantering" company="Katrineholms Fastighets AB" time="2011-2014">
            <p>Sortering och genomgång av digitaliserade ritningar.</p>
          </CVItem>
          <CVItem title="Sommarjobb Ritningsuppdatering" company="EUU" time="2011">
            <p>Sammanfogning av flera ritningar i Autocad pga utbyggnad, inklusive anpassning till verkliga mått.</p>
          </CVItem>
          <CVItem title="Sommarjobb Lantmäteriassistent" company="Läntmäteriet" time="2010">
            <p>Utsättning av gränsrör, uppmätning och kartläggning av tomtgränser.</p>
          </CVItem>
          <CVItem title="Sommarjobb arkivering" company="KC Betong AB" time="2008-2009">
            <p>Sortering, uppdatering och utrensning i arkivet för företagets projekt- och ekonomipärmar, inklusive makulering av känsliga dokument.</p>
          </CVItem>
        </div>
        <div className="col-md-6 flex-fill">
          <h2>Utbildning</h2>
          <CVItem title="C#.NET Fullstack Summer 22" company="AW Academy" time="2022">
            <p>
              Intensivutbildning till fullstackutvecklare. Praktisk utbildning med mycket fokus på att koda själv.
              <Nav.Link className='link-primary' as={NavLink} to="/academy">Läs mer här</Nav.Link>
            </p>
          </CVItem>
          <CVItem title="Fristående kurser" company="LiU, Chalmers, SU, LTU" time="2020-2021">
            <p>Professionsspråk: Franska, Introduktion till programmering i Python, Programmeringsteknik, Webbutveckling I</p>
          </CVItem>
          <CVItem title="Massageterapeut" company="Bergqvist massageutbildningar" time="2013-2014">
            <p>Grundutbildning till massageterapeut samt tilläggskurser i Andningsterapi och Medicinsk Fibromassage.</p>
          </CVItem>
          <CVItem title="Civilingenjör Arkitektur och Teknik" company="Chalmers tekniska högskola" time="2010 - ">
            <p>Arkitekt- och ingenjörsstudier med fokus på byggnader och broar. En blandning av kreativa arkitekturkurser och ingenjörskurser i bland annat byggnadsmaterial och konstruktion. Gör nu klart de sista två kurserna för att få ut min examen.</p>
          </CVItem>
          <CVItem title="Naturvetenskapligt gymnasium" company="Duveholmsgymnasiet" time="2007-2010">
            <p>Naturvetenskaplig och miljövetenskaplig inriktning med extra språkstudier.</p>
          </CVItem>
        </div>
      </div>
  );
}
