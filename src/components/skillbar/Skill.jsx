import React from 'react'
import "./skill.scss"
import {motion} from "framer-motion";

const Skill = () => {
    return (
        <section className='skill-container section' id='about'>
            <h1 className='h1'>My Skills in Developer</h1>
            <div className="about_data grid">
                <div className="about_info" >
                    <p className="about_desc">
                        My name is Gulshan yadav. i'm from delhi (India). I'm Web UI/UX, Javascript, & ReactJS Developer,
                        In Part time job i'm complete clients projects. Anyone Need websites then Contect me.
                        In present time i'm learn Backend and Database servers. My future goal is i'm crete my startup hurryup. </p>
                    <a href="https://app.luminpdf.com/viewer/65e84f6e780982105b2a6b14"> <motion.button whileHover={{background:"white"}}>⏫DOWNLOAD CV</motion.button></a>
                </div>

                {/* development */}


                <div className="about_skills grid">
                    <div className="skills_data">
                        <div className="skills_titles ">
                            <h3 className='skills_name '>Frontend Developer</h3>
                            <span className='skills_number'>80%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage developer"></span>
                        </div>
                    </div>
                    <br/>

                    {/* ui/ux development */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>UI/UX Design</h3>
                            <span className='skills_number'>95%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage design"></span>
                        </div>
                    </div>
                    <br />

                    {/* react developer */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>JAVASCRIPT</h3>
                            <span className='skills_number'>90%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage java"></span>
                        </div>
                    </div>
                    <br />

                    {/* react.js */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>React.Js</h3>
                            <span className='skills_number'>85%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage react"></span>
                        </div>
                    </div>
                    <br />
                    {/* MYSQL */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>MYSQL</h3>
                            <span className='skills_number'>65%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage sql"></span>
                        </div>
                    </div>
                    




                </div>
            </div>
        </section>
    )
}

export default Skill