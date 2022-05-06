import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import iconCards from './images/33.png'
import iconMachine from './images/32.png'
import iconMotherBoard from './images/3.png'
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
                    size: 'large',
                    id: 1,
                    linkUrl: 'machines',
                },
                {
                    title: 'cards',
                    imageUrl: iconCards,
                    id: 2,
                    linkUrl: '',
                },
                {
                    title: 'motherboards',
                    imageUrl: iconMotherBoard,
                    id: 3,
                    linkUrl: '',
                },
                {
                    title: 'processors',
                    imageUrl: iconProcessor,
                    id: 4,
                    linkUrl: '',
                },
                {
                    title: 'ram',
                    imageUrl: iconRam,
                    id: 5,
                    linkUrl: '',
                },
                {
                    title: 'storage',
                    imageUrl: iconStorage,
                    size: 'large',
                    id: 6,
                    linkUrl: '',
                }
            ]
        }
    }
        render(){
            return(
                <div className='directory-menu'>
                    {
                        this.state.sections.map(({id, ...othersProps}) => (
                            <MenuItem key={id} {...othersProps}/>
                        ))
                    }
                </div>
            )
        }
}

export default Directory