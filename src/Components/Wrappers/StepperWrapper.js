import React, { useState, useEffect } from 'react'
import { Button, Pagination } from 'react-bootstrap'
import IconWrapper from './IconWrapper'

import './stepper-wrapper.scss'


function StepperWrapper({ data, amount = 10, card: CardItem, cprops = {}, resetCondition, expand = 2 }) {
  const [activeIndex, setActiveIndex] = useState(0)

  // use to reset index on change resetCondition
  useEffect(() => {
    setActiveIndex(0)
  }, [resetCondition])


  const handleChangeIndex = index => () => setActiveIndex(index)


  const pages = data.length / amount
  const availablePage = Math.floor(pages) === pages ? pages - 1 : Math.floor(pages)


  const renderedData = data.slice(activeIndex * amount, activeIndex * amount + amount)


  return (
    <div className='mt-3'>
      {data.length > 0 && <div>
        {
          renderedData.map((item, i) => (
            <CardItem key={i} item={item} {...cprops} index={i} countItem={renderedData.length} />
          ))
        }
      </div>
      }

      {availablePage > 0 && <div className='--dir-ltr mt-5 mr-auto ml-auto'>
        <Pagination className='user-select-none'>
          <li className='page-item page-link-arr'>
            <button disabled={activeIndex < 1} onClick={handleChangeIndex(activeIndex - 1)} className='page-link'>
              <IconWrapper name='chevronLeft' />
            </button>
          </li>

          <Pagination.Item as='button' onClick={handleChangeIndex(0)} active={activeIndex === 0}>{1}</Pagination.Item>

          {activeIndex > expand + 1 && <Pagination.Ellipsis />}

          {
            Array(expand * 2 + 1).fill({}).map((item, i) => {
              const lowerBound = activeIndex + i > expand
              const upperBound = activeIndex + i - expand < availablePage
              return (lowerBound && upperBound) && (
                <Pagination.Item as='button' key={i} onClick={handleChangeIndex(activeIndex - expand + i)} active={activeIndex - expand + i === activeIndex}>{activeIndex - expand + i + 1}</Pagination.Item>
              )
            })
          }

          {availablePage - activeIndex > expand + 1 && <Pagination.Ellipsis />}


          <Pagination.Item as='button' onClick={handleChangeIndex(availablePage)} active={activeIndex === availablePage}>{availablePage + 1}</Pagination.Item>

        
          <li className='page-item page-link-arr'>
            <button disabled={availablePage === activeIndex} onClick={handleChangeIndex(activeIndex + 1)} className='page-link'>
              <IconWrapper name='chevronLeft' className='--right' />
            </button>
          </li>
        
        </Pagination>
      </div>}
    </div>
  )
}

export default StepperWrapper;
