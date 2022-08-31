import { Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Home() {
    return (
      <div className="backgroundbox">
        <h2>Välkommen!</h2>
        <div className="backgroundbox">
            <p>Junior Fullstackutvecklare C#.NET</p>
            <Nav.Link as={NavLink} to="/academy">Intensivutbildning AW Academy</Nav.Link>
        </div>
      </div>
    );
}