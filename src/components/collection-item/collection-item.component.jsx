import React from 'react'

import './collection-item.styles.scss'


const CollectionItem = ({id, name, description, imageUrl}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
          <div className='collection-footer'>
              <span className='name'>{ name }</span>
              <span className='name'>{ `${description.slice(0, 25)}...` }</span>
          </div>
    </div>
)

export default CollectionItem