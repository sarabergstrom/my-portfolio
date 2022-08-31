import { ProjectItem } from '../components/ProjectItem';

export function Projekt() {
  return (
    <div className="backgroundbox">
      <h2>Projekt</h2>
      <div className="projects">
        <ProjectItem title="Portfolio" description="Den här sidan">
          <p>
            Portfolio med CV, info om mig och exempel på projekt, som ett komplement till en statisk pdf.<br />
          </p>
          <p><a className='link-primary' href='https://github.com/sarabergstrom/my-portfolio' target="_blank" rel="noreferrer">Finns på GitHub</a></p>
          <p><strong>Tekniker: </strong></p>
          <ul className='square-list'>
            <li>React</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </ProjectItem>
        <hr></hr>
        <ProjectItem title="Book App Pro" description="Slutprojekt på utbildningen till Fullstuckutvecklare hos AW Academy">
          <p>
            Digital bokhylla där man kan lägga till böcker man vill läsa, böcker man har läst, och böcker man läser just nu.
            Möjlighet att betygsätta och göra anteckningar på varje bok, samt skapa egna kategorier för böcker, exempelvis rekommendationer från någon.
            Enkel och avancerad sökning, där informationen hämtas från Google books API.<br />
          </p>
          <p>Grupparbete i grupp om fyra personer. <a className='link-primary' href='https://github.com/Samiir113/TheBookAppPro' target="_blank" rel="noreferrer">Finns på GitHub.</a></p>
          <p><strong>Tekniker: </strong></p>
          <ul className='square-list'>
            <li>C#.NET</li>
            <li>ASP.NET CORE MVC</li>
            <li>SQL Server</li>
          </ul>
        </ProjectItem>
      </div>
    </div>
  );
}
