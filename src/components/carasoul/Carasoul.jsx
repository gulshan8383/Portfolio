import "./carasoul.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from "framer-motion";


const Carasoul = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

   
    return (
        <div className="mainconc">
            <div className="second">
            <Slider{...settings}>
            {data.map((item)=>(
                <motion.div className="backgr"  whileHover={{background:"purple"}}>
                    <div className="image">
                        <img src={item.img} alt=""  style={{width:"250px", height:"200px",}}/>
                    </div>
                    <div className="textcon">
                    <p className="name">{item.Name}</p>
                    <p className="desc">{item.desc}</p>
                    <a href="https://www.linkedin.com/in/gulshan-yadav-30a980175/"><motion.button className="btn" whileHover={{background:"lightblue"}}>Profile Check</motion.button></a>

                    </div>
                </motion.div>

            ))}
            </Slider>


            </div>
        </div>
    )
}

const data = [
    {
        Name: `Gulshan kumar`,
        img: `/web1.jpg`,
        desc: `I'm UI/UX Developer and I'M freelancer and i'm using React js, Scss, Javascript, Jquey, MySql, if you can create website then contact me. in my colledge days i'm participate my activity and win. In hackthon i'm participate 3 times and win the trophy 2 times.`
    },
    {
        Name: `EDUCATION`,
        img: `/web2.jpg`,
        desc: `I'm Complete my 10th and 12th in "C.B.S.E". My gradution complete in 2023 B.TECH (COMPUTER SCIENCE ENGINERRING) FROM MAHARISHI DAYANAND UNIVERSITY, ROHTAK. inmy colledge life im learn different types of computer languages javascript react frontend database etc. `
    },
    {
        Name: `SKILLS`,
        img: `/web3.jpg`,
        desc: `My computer skills is I'm UI/UX Designer, Frontend developer, javascript developer, rectjs developer, i'm good in teamwork, i'm very dedicated to my work, i'm very friendy behaviour man. In present time i'm learn database, backend lenguages in future goes to mernstack developer   `
    },
    {
        Name: `client Sumit`,
        img: `/web2.jpg`,
        desc: `My client sumit and he was mehendi designer. and i'm create website for my client all infomation and design of mehendi are available. my client is happy to see my work. anyone need you business to online market then contact me. i will give you good discounts.  `
    },

]



export default Carasoul