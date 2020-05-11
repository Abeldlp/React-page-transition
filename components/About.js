import React from "react";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    x: "0",
  },
  out:{
    opacity: 0,
    x: "-100vh",
  }
}

const About = () =>{
  return(
    <motion.div exit="out" animate="in" initial="out" variants={pageTransition}>
      <h1>About</h1>
      <img src="https://picsum.photos/300/300" style={{borderRadius: 300/2}}/>
      <br/>
      <br/>
      <br/>
      <h3>
        Anything fro photos to whatever you want to bring on the table
      </h3>
    </motion.div>
  )
}

export default About;