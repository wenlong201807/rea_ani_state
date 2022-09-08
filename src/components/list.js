// import logo from './logo.svg';
import { useEffect } from 'react';
// import laxInstance from '../../public/lax.min';
import lax from 'lax.js'

import './list.css';

function List() {
  useEffect(() => {
    // console.log(window)
    // debugger
    // if (!window || !window.lax) return

    lax.init();

    const inDiv = document.querySelector('.wrap_inner');
    lax.addDriver('scrollXList', function (e) {
      return inDiv.scrollLeft;
    });

    lax.addElements(
      '.base_move',
      {
        scrollXList: {
          // translateY: [
          //   ['elInX', 'elCenterX', 'elOutX'],
          //   [1, 1.4, 1],
          //   // [300, 'screenWidth/2', 300],
          //   // [300, 'screenWidth/2 * 1.2', 300],
          //   // ['screenWidth/2', 'screenWidth', 'screenWidth/2'],
          //   {
          //     easing: 'easeInOutQuart',
          //     cssFn: (val) => {
          //       console.log('height:', val, inDiv.scrollLeft);
          //       return val;
          //     },
          //   },
          // ],
          // scaleY: [
          //   ['elInX', 'elCenterX', 'elOutX'],
          //   [1, 1.4, 1],
          //   // [300, 'screenWidth/2', 300],
          //   // [300, 'screenWidth/2 * 1.2', 300],
          //   // ['screenWidth/2', 'screenWidth', 'screenWidth/2'],
          //   {
          //     easing: 'easeInOutQuart',
          //     cssFn: (val) => {
          //       console.log('height:', val, inDiv.scrollLeft);
          //       return val;
          //     },
          //   },
          // ],
          height: [
            ['elInX', 'elCenterX', 'elOutX'],
            [300, 'screenWidth/2', 300],
            // [300, 'screenWidth/2 * 1.2', 300],
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
          // 'border-radius': [
          //   ['elInX+50', 'elCenterX', 'elOutX-50'],
          //   [0, 50, 0],
          //   {
          //     easing: 'easeInOutQuint',
          //   },
          // ],
          'font-size': [
            ['elInX+50', 'elCenterX', 'elOutX-50'],
            [10, 50, 10],
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
                return `${val}px ${val}px ${val}px rgba(0,0,0,0.5)`;
              },
            },
          ],
        },
      },
      // {
      //   style: {
      //     // height: '200px',
      //     // width: '30%'
      //     // background: 'red'
      //   }, // Element options
      // }
    );
  }, []);
  return (
    <div className="list_wrap">
      <div> 我是大列表 </div>
      <div className="wrap_inner">
        <div className="base_move test_line_0" attr="0"></div>
        <div className="base_move test_line_0" attr="0"></div>
        <div className="base_move test_line_0" attr="0"></div>
        <div className="base_move test_line_0 last_0" attr="0"></div>
        <div className="sep_target">我是固定柱子，分割线1111</div>
        <div className="base_move test_line_1" attr="1"></div>
        <div className="base_move test_line_1" attr="1"></div>
        <div className="base_move test_line_1" attr="1"></div>
        <div className="base_move test_line_1" attr="1"></div>
        <div className="base_move test_line_1 last_1" attr="1"></div>
        <div className="sep_target">我是固定柱子，分割线1111</div>
        <div className="base_move test_line_2" attr="2"></div>
        <div className="base_move test_line_2" attr="2"></div>
        <div className="base_move test_line_2" attr="2"></div>
        <div className="base_move test_line_2" attr="2"></div>
        <div className="base_move test_line_2" attr="2"></div>
        <div className="base_move test_line_2 last_2" attr="2"></div>
        <div className="sep_target">我是固定柱子，分割线222222</div>
        <div className="base_move test_line_3"></div>
        <div className="base_move test_line_3"></div>
        <div className="base_move test_line_3 last_3"></div>
      </div>
    </div>
  );
}

export default List;
