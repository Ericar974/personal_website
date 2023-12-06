import './App.css';
import React, {useEffect} from 'react';
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Loisir from "./components/Loisir";

function App() {
    useEffect(() => {
        function addHoverEffect(selector) {
            const elements = document.querySelectorAll(selector);

            elements.forEach(element => {
                element.addEventListener('mouseover', () => {
                    if(element === document.querySelector('.Skill > div:nth-of-type(1)'))document.querySelector('.middle').classList.add('highlightedp1');
                    else document.querySelector('.middle').classList.add('highlightedp2');
                });

                element.addEventListener('mouseout', () => {
                    if(element === document.querySelector('.Skill > div:nth-of-type(1)'))document.querySelector('.middle').classList.remove('highlightedp1');
                    else document.querySelector('.middle').classList.remove('highlightedp2');
                });
            });
        }
        addHoverEffect('.Skill > div')


        function select(selector, div) {
            const elements = document.querySelectorAll(selector)
            elements.forEach(e => {

                e.addEventListener('click', (div) => {
                    console.log(div)
                    //document.querySelector(`.${div}>div:nth-of-type(1)`).classList.add('highlighted')
                    document.querySelectorAll('p:not(.Skill p), h2:not(.Skill h2), h3:not(.Skill h3), li:not(.Skill li)').forEach(x => {
                        x.classList.add('blur')
                    })
                }, div)
            })

        }

        select('.TREEPEC, .TREELEFT', 'hello')

        const screenElements  = document.querySelectorAll('iframe, .middle>section')
        console.log(screenElements.length)
        let previousElement = null

        function click(selector) {
            const elements = document.querySelectorAll(selector);



            elements.forEach(element => {
                element.addEventListener('click', () => {
                    if (previousElement !== null) {
                        previousElement.classList.remove("clicked")
                    }
                    previousElement = element

                    element.classList.add("clicked")

                    // Afficher l'élément iframe
                    screenElements.forEach(x => {
                        if (x.style.display !== 'none') {
                            x.style.display = 'none';
                        }
                    })
                    if (element === document.querySelector("#forma")) {
                        document.querySelector('.Formation').style.display = 'block';
                    }else if (element === document.querySelector(".left > div:not(.Image)")) {
                        document.querySelector('iframe').style.display = 'block';
                    }else if(element === document.querySelector("#exp")){
                        document.querySelector(".Experience").style.display = 'block'
                    }else if(element === document.querySelector('#skill')){
                        document.querySelector(".Skill").style.display = 'flex'
                    }else if(element === document.querySelector('#loisir')){
                        document.querySelector(".Loisir").style.display = 'block'
                    }
                });
            });

        }

// Appel de la fonction avec le sélecteur souhaité
        click(".left > div:not(.Image), .right>h2");

    }, []);

    return (
        <div className="App2">
            <section className="top">
                <div className="language">
                    <h1>ARMAND DORARD</h1>
                    <img className="Flag" src="./img/uk_logo.png" alt="uk flag"/>
                    <img className="Flag" src="./img/french_logo.png" alt="french flag"/>
                    {/*<img className="Flag" src="./img/re_logo.png" alt="reunion island flag"/>*/}
                </div>
            </section>
            <section className="mid">
                <div className="left">
                    <div className="Image">
                        <img
                            src="https://cdn.discordapp.com/attachments/944562463268040707/1145997240146612254/IMG_20230811_234123.jpg?ex=6549f419&is=65377f19&hm=8f8e2defb2fbb31271687e6d67a84c94ade0627933fea253b1fbc85e80b95d4d&"
                            className="App-logo" alt="logo"/>

                    </div>
                    <p>
                        Armand Dorard, 24ans, <br/>
                        Full stack Web Developer  & scraper men
                        <br/>
                    </p>
                    <div>
                        <img className="Logo" src="./img/marker_logo.png" alt="localisation"/>
                        <p>Paris, 78800</p>
                    </div>

                    <p>I like learning new languages !</p>
                </div>
                <div className="middle">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3848.0031926228826!2d2.185854089750569!3d48.92714946582695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1699365400941!5m2!1sfr!2sfr"
                        width="99%" height="99%" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <Formation/>
                    <Experience/>
                    <Skill/>
                    <Loisir/>

                    {/*<section>
                        <img width="100%"
                             src="https://github-readme-stats.vercel.app/api/pin/?username=Ericar974&repo=MiamTime&show_owner=true"/>
                    </section>*/}
                </div>
                <div className="right">
                    <h2 id="forma">Education</h2>
                    <h2 id="exp">Experiences</h2>
                    <h2 id="skill">Skills</h2>
                    <h2 id="loisir">Hobbies</h2>
                </div>
            </section>
            <section className="bot">

            </section>

        </div>
    );

}

export default App;
