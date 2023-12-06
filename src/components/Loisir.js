import React from "react";

function Loisir() {
    return(
        <section className="Loisir">
            <div>
                <img className="LogoLoisir" src="./img/tennis_logo.png" alt="tennis"/>
                <h3>Tennis</h3>
                <div>
                    <p>from: forever</p>
                </div>
                <div>
                    <p>"I play every weekend and prepare for tournaments."</p>
                </div>
            </div>
            <div>
                <img className="LogoLoisir" src="./img/book_logo.png" alt="book"/>
                <h3>Reading</h3>
                <div>
                    <p>Favorite genre: Fantasy</p>
                </div>
                <div>
                    <p></p>
                    <p>"Current books: Silmarillion / The Evolution Revolution"</p>
                </div>
            </div>
            <div>
                <img className="LogoLoisir" src="./img/voyage.png" alt="plane"/>
                <h3>Traveling</h3>
                <div>
                    <p>Last destination: Barcelona in Spain</p>
                </div>
                <div>
                    <p>"I try to come back to my island every year"</p>
                </div>
            </div>
            <div>
                <img className="LogoLoisir" src="./img/cuisiner.png" alt="cooking"/>
                <h3>Cooking</h3>
                <div>
                    <p>from 2018</p>
                    <p>Favorite dish: Sausage rougail</p>
                </div>
                <div>
                    <p>"If one day my life falls apart, I'll open a foodtruck"</p>
                </div>
            </div>
{/*            <div>
                <img className="LogoLoisir" src="./img/jeux.png" alt="video games"/>
                <h3>Jeux</h3>
                <div>
                    <p>Depuis: 2004</p>
                    <p>Premier jeu: Max Payne</p>
                </div>
                <div>
                    <p></p>
                    <p>""</p>
                </div>
            </div>*/}
        </section>
    )
}
export default Loisir;