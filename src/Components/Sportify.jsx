import React from 'react'
import Card from '../Props/Card'
import { sportifyData , username} from './SportifyData'

const Sportify = () => {
  return (
    <div>
        {sportifyData.map((music)=>(
            <Card image={music.image} title={music.title} content={music.content}/>
        ))

        }
    </div>
  )
}

export default Sportify