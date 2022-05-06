import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import iconCards from './images/33.png'
import iconMachine from './images/gabinete.jpg'
import iconMotherBoard from './images/2.png'
import iconProcessor from './images/18.png'
import iconRam from './images/14.png'
import iconStorage from './images/41.png'

import './directory.styles.scss'


class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: [
                {
                    title: 'machines',
                    imageUrl: iconMachine,
                    id: 1
                },
                {
                    title: 'cards',
                    imageUrl: iconCards,
                    id: 2
                },
                {
                    title: 'motherboards',
                    imageUrl: iconMotherBoard,
                    id: 3
                },
                {
                    title: 'processors',
                    imageUrl: iconProcessor,
                    id: 4
                },
                {
                    title: 'ram',
                    imageUrl: iconRam,
                    id: 5
                },
                {
                    title: 'storage',
                    imageUrl: iconStorage,
                    id: 6
                }
            ]
        }
    }
        render(){
            return(
                <div className='directory-menu'>
                    {
                        this.state.sections.map(({title, imageUrl, id}) => (
                            <MenuItem key={id} title={title} imageUrl={imageUrl} />
                        ))
                    }
                </div>
            )
        }
}

export default Directory