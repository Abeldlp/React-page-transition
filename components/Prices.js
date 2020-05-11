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

const Prices = () =>{
  return(
    <motion.div exit="out" animate="in" initial="out" variants={pageTransition}>
      <h1>Prices</h1>
      <table>
<thead>
  <tr>
    <th>Price</th>
    <th>Atraction</th>
    <th>Memorizing</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>2</td>
    <td>moreover</td>
    <td>345</td>
  </tr>
  <tr>
    <td>23</td>
    <td>again</td>
    <td>0934</td>
  </tr>
</tbody>
</table>
    </motion.div>
  )
}

export default Prices;