import React from 'react'
import img1 from '../images/gamebros2.jpg'
import img2 from '../images/passGen.png'
import img3 from '../images/noteTaker.png'
import img4 from '../images/dailyPlanner.png'
import img5 from '../images/MySQL-Logo.png'
import img6 from '../images/textEditor.png'
import img7 from '../images/WoT.png'



const Projects = () => {
    return (

        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <a href='https://gamebrobysarj.herokuapp.com/api/login'>
                    <img
                        src={img1}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="GameBro site"
                    />
                </a>
                <a href='https://saishin-zetta.github.io/password_generator/'>
                    <img
                        src={img2}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Password Generator"
                    />
                </a>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
                <a href='https://saishin-zetta.github.io/note_taker/'>
                    <img
                        src={img3}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Note Taker"
                    />
                </a>

                <a href='https://saishin-zetta.github.io/daily_planner/'>
                    <img
                        src={img4}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Daily Planner"
                    />
                </a>
            </div>
            
            <div className="col-lg-4 mb-4 mb-lg-0">
                <a href='https://github.com/Saishin-Zetta/mapping/blob/main/README.md'>
                    <img
                        src={img5}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Relational Mapping"
                    />
                </a>

                <a href='https://github.com/Saishin-Zetta/PWA/blob/main/README.md'>
                    <img
                        src={img6}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Text Editor"
                    />
                </a>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
                <a href='https://wotsproject.herokuapp.com/#/'>
                    <img
                        src={img7}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Relational Mapping"
                    />
                </a>
            </div>
        </div>

    )
}

export default Projects