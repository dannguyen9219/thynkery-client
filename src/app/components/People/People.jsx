import "./People.css";
import abernier from "../../../images/abernier.png";
import cfurman from "../../../images/cfurman.png";
import dnguyen from "../../../images/dnguyen.png";
import fyeaznee from "../../../images/fyeaznee.png";
import goliva from "../../../images/goliva.png";
import jcolon from "../../../images/jcolon.png";
import jmiller from "../../../images/jmiller.png";
import lcarlos from "../../../images/lcarlos.png";
import mcastillo from "../../../images/mcastillo.png";
import rkim from "../../../images/rkim.png";
import tmarcelo from "../../../images/tmarcelo.png";

export default function People() {
    return (
        <main>
            <div>
                <h1 className="meet">Meet the Team</h1>
            </div>
            <div className="peopleContainer">
                <ul className="peopleList">
                    <img src={abernier} className="profileImage" /><li className="employeeName">Arthur Bernier Jr.</li>
                    <img src={cfurman} className="profileImage" /><li className="employeeName">Charlie Furman</li>
                    <img src={dnguyen} className="profileImage" /><li className="employeeName">Dan Nguyen aka Danimal</li>
                    <img src={fyeaznee} className="profileImage" /><li className="employeeName">Farah Yeaznee</li>
                    <img src={goliva} className="profileImage" /><li className="employeeName">Gerimae Oliva</li>
                    <img src={jcolon} className="profileImage" /><li className="employeeName">Julio Colon</li>
                    <img src={jmiller} className="profileImage" /><li className="employeeName">Joshua Miller</li>
                    <img src={lcarlos} className="profileImage" /><li className="employeeName">Lucas Carlos</li>
                    <img src={mcastillo} className="profileImage" /><li className="employeeName">Michael Castillo</li>
                    <img src={rkim} className="profileImage" /><li className="employeeName">Ray Kim</li>
                    <img src={tmarcelo} className="profileImage" /><li className="employeeName">Teo Marcelo</li>
                </ul>
            </div>
        </main>
    );
};