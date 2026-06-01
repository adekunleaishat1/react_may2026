import React from 'react'
import Card from '../Props/Card'
import { sportifyData , username} from './SportifyData'
import Navbar from './Navbar'

const Sportify = () => {
  return (
    <div>
      {/* <Navbar/> */}
        {sportifyData.map((music)=>(
            <Card image={music.image} title={music.title} content={music.content}/>
        ))

        }
    </div>
  )
}

export default Sportify