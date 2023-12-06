import React from "react";

function Header() {
    return (
        <header className="App-header">
            <div className="Description">
                <p>
                    Armand Dorard, 24ans, <br/>
                    Developer web full stack & a scraper men
                    Enjoy learning new languages !
                </p>

                <img className="Logo" src="./img/marker_logo.png" alt="localisation"/>
                <p>Houilles, 78800</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3848.0031926228826!2d2.185854089750569!3d48.92714946582695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1699365400941!5m2!1sfr!2sfr"
                    width="600" height="450" loading="lazy"
                    ></iframe>

            </div>
            <div className="Image">
                <img
                    src="https://cdn.discordapp.com/attachments/944562463268040707/1145997240146612254/IMG_20230811_234123.jpg?ex=6549f419&is=65377f19&hm=8f8e2defb2fbb31271687e6d67a84c94ade0627933fea253b1fbc85e80b95d4d&"
                    className="App-logo" alt="logo"/>

            </div>
            <div>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="Mini_logo" src="./img/linkin_logo.png" alt="linkeldin logo"/> Armand DORARD
                    </a> <br/>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="Mini_logo" src="./img/github_logo.png" alt="github logo"/> Ericar974
                    </a><br/>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="Mini_logo" src="./img/email_logo.png" alt="mail logo"/> dorardarmand@gmail.com
                    </a>
                </p>
            </div>

        </header>
    )
}

export default Header;