import React, { useState } from 'react';
import Slider from './Slider'; 

const AccordionWithSlider = ({ isDivExpanded, handleToggleDivSize }) => {
    return (
      <div className='box' onClick={handleToggleDivSize}>
        <div className="center">
          <section id="item1">
            <div>
              <div>
                <a href="#item1">=</a>
              </div>
              <div className={isDivExpanded ? 'expanded-content' : 'collapsed-content'}>
                <Slider />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

export default AccordionWithSlider;
