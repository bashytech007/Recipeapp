import Vegie from "../components/Vegie";
import Popular from "../components/Popular";
import {motion} from 'framer-motion';

import React from 'react'

function Home() {
  return (
    <motion.div>
      <Vegie/>
      <Popular/>
      </motion.div>
   
  )
}

export default Home