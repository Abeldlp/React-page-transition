import React from "react";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    x: "0"
  },
  out:{
    opacity: 0,
    x: "-100vh"
  }
}

const Home = () => {
  return (
    <motion.div exit="out" animate="in" initial="out" variants={pageTransition} >
      <h1>Home</h1>
      <h3>
        Home to one of the most beutiful places on earth after the walakulu or one thos species
      </h3>
      <br/>
      <h3>
        Knwoing more than you know
      </h3>
      <br/>
      <h3>
        Is always the key for a successful like
      </h3>
      <br/>
      <h3>
        Home to one of the most beutiful places on earth after the walakulu or one thos species
      </h3>
      <img src="https://picsum.photos/500/300"/>
    </motion.div>
  );
};

export default Home;
