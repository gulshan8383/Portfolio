import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "/web1.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ut illo culpa! Nihil repellat, optio cupiditate illo consectetur adipisci officiis dignissimos suscipit velit ex nesciunt deserunt excepturi, magnam minima voluptates.",

    },
    {
        id: 2,
        title: "Sumit Mehendi Art",
        img: "/sumit1.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ut illo culpa! Nihil repellat, optio cupiditate illo consectetur adipisci officiis dignissimos suscipit velit ex nesciunt deserunt excepturi, magnam minima voluptates.",

    },
    {
        id: 3,
        title: "Gulshan Portfolio",
        img: "/self.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ut illo culpa! Nihil repellat, optio cupiditate illo consectetur adipisci officiis dignissimos suscipit velit ex nesciunt deserunt excepturi, magnam minima voluptates.",

    },
    {
        id: 4,
        title: "Electric Charger Point",
        img: "/web4.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ut illo culpa! Nihil repellat, optio cupiditate illo consectetur adipisci officiis dignissimos suscipit velit ex nesciunt deserunt excepturi, magnam minima voluptates.",

    },

];
//end array api


//this function array dada uses
const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]

    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgcontainer" ref={ref}>
                        <img src={item.img} alt=""  style={{objectFit:"cover"}}/>
                    </div>
                    <motion.div className="textcontainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href="https://github.com/gulshan8383"><motion.button whileHover={{background:"white", fontWeight:"bold",color:"black", fontFamily:"italic"}}>Infomation</motion.button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};



//allcodes are only scroll bar process
const Portfolio = () => {
    const ref = useRef()


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio