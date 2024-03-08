import { useRef } from "react";
import "./services.scss"
import { motion, useInView} from "framer-motion";



const varitants ={
    initial:{
        x:-200,
        y:100,
        opacity:0,

    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};
const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})


    return (
        <motion.div className="services" 
        variants={varitants} 
        initial="initial"
        //animate="animate" 
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
        
        >
            <motion.div className="textcontainer">
                <p className="p">I focus on helping your brand grow

                    <br/> and move forward
                    </p>
                    <hr/>
            </motion.div>
             <motion.div className="titlecontainer" variants={varitants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
                    </div>
                    <div className="title">
                        <h1>
                            <motion.b whileHover={{color:"orange"}}> For Your</motion.b>Websites.
                        </h1>
                        <a href="#"><motion.button  whileHover={{background:"white", fontWeight:"bold", color:"orange"}}>WHAT WE DO?</motion.button></a>
                    </div>
            </motion.div> 
            <motion.div className="listcontainer">
                <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
                    <h2>FrontEnd</h2>
                    <p>
                    A front-end developer architects and develops websites and applications using web technologies
                     (i.e., HTML, CSS, DOM, and JavaScript), which run on the Open Web Platform or act as compilation
                      input for non-web platform environments 
                    </p>
                 <a href="https://www.linkedin.com/in/gulshan-yadav-30a980175/"> <motion.button whileHover={{background:"white", fontWeight:"bold", color:"black"}}>Go</motion.button></a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
                    <h2>React.JS</h2>
                    <p>
                    Hello views i'm gulshan yadav, i am create website using react.js if anyone need website then
                     contact me. i'm starting my freelancing  work. i am sure you are happy to see my complete work.
                     this site search engine optimization (seo)  also show on top,and we managing your website 3 motn
                      free. then we are charge this site managment.
                    </p>
                   <a href="https://sumitmehendiart.com/"> <motion.button whileHover={{background:"white", fontWeight:"bold", color:"black"}}>Go</motion.button></a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgrey", color:"black" }}>
                    <h2>JavaScript</h2>
                    <p>
                    Hello views i'm gulshan yadav, i am create website using also JavaScript if anyone need website then
                     contact me. i'm starting my freelancing  work. i am sure you are happy to see my complete work.
                     this site search engine optimization (seo)  also show on top,and we managing your website 3 motn free. 
                    </p>
                    <a href="https://sumitmehendiart.com/"><motion.button whileHover={{background:"white", fontWeight:"bold", color:"black"}}>Go</motion.button></a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
                    <h2>Github</h2>
                    <p>
                    GitHub is a web-based hosting service for Git repositories, such as those used to store
                     Microsoft Learn content. For any project, GitHub hosts the main repository, from which
                      contributors can make copies for their own work.This article defines key terms.
                    
                    </p>
                    <a href="https://github.com/gulshan8383"><motion.button whileHover={{background:"white", fontWeight:"bold", color:"black"}}>Go</motion.button></a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services