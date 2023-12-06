import React, {useEffect} from "react";

function Formation() {
    useEffect(() => {
        function hoverImageFormations(selector, selectorP) {
            const elements = document.querySelectorAll(selector);
            const p = document.querySelectorAll(selectorP);

            elements[0].addEventListener('mouseover', () => {
                elements[1].classList.add('hoverOpacity')
                p[1].style.opacity = 1
            })
            elements[0].addEventListener('mouseout', () => {
                elements[1].classList.remove('hoverOpacity')
                p[1].style.opacity = 0
            })

            elements[1].addEventListener('mouseover', () => {
                elements[0].classList.add('hoverOpacity')
                p[0].style.opacity = 1
            })
            elements[1].addEventListener('mouseout', () => {
                elements[0].classList.remove('hoverOpacity')
                p[0].style.opacity = 0
            })
        }

        hoverImageFormations('.imageFormation', '.textOverlay')

    })

    return (
        <section className="Formation">
            <h2>EDUCATION</h2>

            <div className="containerFormation">
                <div className="imageContainer">
                    <a href="https://www.iim.fr/" target="_blank">
                        <img className="imageFormation" src="img/iim.jpg"/>
                    </a>
                        <div className="textOverlay">
                            <h4>2017 - 2019</h4>
                            <br/>
                            <p>Reunion island</p>
                            <br/>
                            <p>The University of "La Réunion" is a French university located in the overseas department of La Réunion in Indian Ocean</p>
                            <br/>
                            <p> Bachelor’s degree: mathematics</p>
                        </div>

                </div>
                <div className="imageContainer">
                <a href="https://www.univ-reunion.fr/" target="_blank">
                        <img className="imageFormation" src="img/university.jpg"/>
                    </a>
                    <div className="textOverlay">
                        <h4>2019 - 2024</h4>
                        <br/>
                        <p>Paris</p>
                        <br/>
                        <p>IIM is the first French school for digital professions</p>
                        <br/>
                        <p>Master's degree: full stack web developer</p>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Formation;