import "./AboutPage.css";
import logo from "../../../images/thynkery-logo-1.png"

export default function AboutPage() {
    return (
        <main>
            <div className="card">
                <img src={logo} alt="thynkery logo" className="card-img-top" id="aboutLogo"/>
                <div className="card-body">
                    <h5 className="card-title">About Thynkery</h5>
                    <p className="card-text">Thank you for using Thynkery, the project management app geared towards software developers. It was designed and created by Dan Nguyen, a student in General Assembly's Immersive Software Engineering Course. The idea for this project is two-fold: 1) to create an app that uses full CRUD and JWT to meet the requirements of the project, and 2) have an app that will be useful for software developers to use to track their projects. </p>
                    <a href="https://github.com/dannguyen9219" className="btn btn-primary">Dan's GitHub</a>
                </div>
            </div>
           
        </main>
    );
};