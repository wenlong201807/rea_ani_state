// import react, Component, { useEffect } from 'react';
import lax from 'lax.js';

import { Component } from 'react';
import './list.css';
class List extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    const inDiv = document.querySelector('.wrap_inner');
    lax.init();
    lax.addDriver('scrollXL', function () {
      return inDiv.scrollLeft;
    });

    lax.addElements(
      '.base_move',
      {
        scrollXL: {
          // translateX: [
          //   ["elInX", "elCenterX", "elOutX"],
          //   [0, 'screenWidth/2', 'screenWidth'],
          //   {
          //     easing: 'easeInOutQuart',
          //   }
          // ],
          height: [
            ['elInX', 'elCenterX', 'elOutX'],
            [300, 'screenWidth/2', 300],
            // ['screenWidth/2', 'screenWidth', 'screenWidth/2'],
            {
              easing: 'easeInOutQuart',
              cssFn: (val) => {
                console.log('height:', val, inDiv.scrollLeft);
                return val;
              },
            },
          ],
          opacity: [
            ['elInX', 'elCenterX', 'elOutX'],
            [0.3, 1, 0.3],
            {
              easing: 'easeInOutCubic',
            },
          ],
          'border-radius': [
            ['elInX+50', 'elCenterX', 'elOutX-50'],
            [0, 50, 0],
            {
              easing: 'easeInOutQuint',
            },
          ],
          'box-shadow': [
            ['elInX+20', 'elCenterX', 'elOutX-20'],
            [30, 0, 30],
            {
              easing: 'easeInOutQuint',
              cssFn: (val) => {
                // console.log('val:', val);
                return `${val}px ${val}px ${val}px rgba(0,0,0,0.5)`;
              },
            },
          ],
        },
      },
    );
  }

  componentWillUnmount() {
    const inDiv = document.querySelector('.wrap_inner');
    lax.removeElements('.base_move')
    lax.removeElement(inDiv)

  }

  render() {
    return (
      <div className="list_wrap">
        <div> ??????????????? </div>
        <div className="wrap_inner">
          <div id="one" className="base_move test_line_0">
            111
          </div>
          <div id="one" className="base_move test_line_0">
            2222
          </div>
          <div id="one" className="base_move test_line_0">
            333
          </div>
          <div id="one" className="base_move test_line_0 last_0">
            4444
          </div>
          <div className="sep_target">??????????????????????????????1111</div>
          <div className="base_move test_line_1"></div>
          <div className="base_move test_line_1"></div>
          <div className="base_move test_line_1"></div>
          <div className="base_move test_line_1"></div>
          <div className="base_move test_line_1 last_1"></div>
          <div className="sep_target">??????????????????????????????1111</div>
          <div className="base_move test_line_2"></div>
          <div className="base_move test_line_2"></div>
          <div className="base_move test_line_2"></div>
          <div className="base_move test_line_2"></div>
          <div className="base_move test_line_2"></div>
          <div className="base_move test_line_2 last_2"></div>
          <div className="sep_target">??????????????????????????????222222</div>
          <div className="base_move test_line_3"></div>
          <div className="base_move test_line_3"></div>
          <div className="base_move test_line_3 last_3"></div>
        </div>
      </div>
    );
  }
}

export default List;
