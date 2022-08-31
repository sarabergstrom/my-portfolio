import { Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Home() {
    return (
      <div className="backgroundbox">
        <h2>Välkommen!</h2>
        <div className="row backgroundbox">
            <div className="col-md-6">
                <h4>Sara Bergström</h4>
                <p>
                    Nyfiken, kunskapstörstande nörd som precis utbildat sig till fullstackutvecklare med fokus på C#.NET.
                </p>
                <a href="https://www.linkedin.com/in/sara-bergström" target="_blank">LinkedIn</a>
            </div>
            <div className="col-md-6">
                <h4>Junior Fullstackutvecklare C#.NET</h4>
                <Nav.Link className="link-primary" as={NavLink} to="/academy">Intensivutbildning AW Academy</Nav.Link>
            </div>
        </div>
      </div>
    );
}