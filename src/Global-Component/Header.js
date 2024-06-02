import '../App.css';
import Account from './Inside-Component/Account';


function Header(){
    return(
        <header>
            <div className="myImg">
                <img src={require("./img/myImg.jpg")} alt="myImg"/>
                <h4>Fresh Graduate</h4>
            </div>
            <div className="intro">
                <h1>ALI ASSAF</h1>
                <p>Looking for a junior position in the fields of
                    information technology, I want to be educated
                    and influential with the environment, and share
                    and gain experience with others around me in
                    order to help develop the project.
                </p>
                <div className="contact">
                    <Account
                        img={require("./img/email.png")}
                        type="email"
                        href="mailto:aliassaf0875758474757@gmail.com"
                        hrefName="aliassaf0875758474757@gmail.com"
                    />
                    <div>
                        <img src={require("./img/phone-number.png")} alt="phone-number" />
                        <a href="+963 992 402 495">+963 992 402 495</a>
                    </div>
                    <div>
                        <img src={require("./img/location.png")} alt="location" />
                        <span>Baniyas</span>
                    </div>
                </div>
            </div>
            <div className="links">
                <h3>Links</h3>
                <div>
                    <Account
                        img={require("./img/facebook.png")}
                        type="facebook"
                        href="https://www.facebook.com/ali.assaf.96930013"
                        hrefName="https://www.facebook.com/ali.assaf.96930013"
                    />
                    <Account
                        img={require("./img/linkedin.png")}
                        type="linkedin"
                        href="https://www.linkedin.com/ali-assaf-68b8a71b9"
                        hrefName="https://www.linkedin.com/ali-assaf-68b8a71b9"
                     />
                    <Account
                        img={require("./img/instagram.png")}
                        type="instagram"
                        href="https://www.instagram.com/assaf9183"
                        hrefName="https://www.instagram.com/assaf9183"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;