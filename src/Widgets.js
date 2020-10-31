import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className='widgets'>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTaylorSwift&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=323454258252842'
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameborder='0'
        allowTransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
}

export default Widgets;

// using Iframe
// Iframe --> basically help us to embedd another webpage into your page.

// facebook embed google it
// page embed iframe code
