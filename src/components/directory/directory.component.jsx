import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
// import MenuItem from './images/33.png'

import './directory.styles.scss'


class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: [
                {
                    title: 'machines',
                    imageUrl: 33,
                    id: 1
                },
                {
                    title: 'cards',
                    imageUrl: 23,
                    id: 2
                },
                {
                    title: 'motherboards',
                    imageUrl: 1,
                    id: 3
                },
                {
                    title: 'processors',
                    imageUrl: 6,
                    id: 4
                },
                {
                    title: 'ram',
                    imageUrl: 13,
                    id: 5
                },
                {
                    title: 'storage',
                    imageUrl: 18,
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
                            <MenuItem key={id} title={title} imageUrl={`/Users/user/WebstormProjects/ecommerce/src/components/directory/images/${imageUrl}.png`} />
                        ))
                    }
                </div>
            )
        }
}

export default Directory