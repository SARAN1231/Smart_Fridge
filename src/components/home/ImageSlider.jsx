import React, { useState, useEffect, useRef } from 'react';
import '../../App.css'
import Tables from './Tables'
const Sliders = () => {
  const [active, setActive] = useState(0);
  const items = [
    "https://img.freepik.com/free-photo/automatic-transport-robot-transporting-plants-smart-robotic-farmers-concept_35913-2311.jpg?t=st=1726375506~exp=1726379106~hmac=e2c3b33f6c273454277651d22e0100b8a0b49b000a4d32ddaaaa98136c067723&w=1380",
    "https://img.freepik.com/free-photo/organic-vegetable-farm-hydroponic-vegetable-plant-factory_35913-2607.jpg?t=st=1726375554~exp=1726379154~hmac=d2d2197635195c0c552405e1df8a0e6a07b0e2a1306fd7364282a1a2ff0c698a&w=1380",
    "https://img.freepik.com/free-photo/agricultural-robots-work-smart-farms_35913-3364.jpg?t=st=1726375615~exp=1726379215~hmac=7d3f102e5da919c08d4feb48f969bb36ce1fc1d6236bf9035fe4a749bbb8a1ca&w=1380",
    "https://img.freepik.com/premium-photo/robot-assistant-light-growth-indoor-farm_493806-15979.jpg?w=1060",
    "https://img.freepik.com/premium-photo/artificial-intelligence-robot-harvesting-strawberry-greenhouse-3d-render_84831-1710.jpg?w=1380"
  ];

  const lengthitems = items.length - 1;
  const listRef = useRef(null);

  const reloadSlider = () => {
    const checkLeft = listRef.current.children[active].offsetLeft;
    listRef.current.style.left = -checkLeft + 'px';
  };

  const next = () => {
    setActive((prevActive) => (prevActive + 1 > lengthitems ? 0 : prevActive + 1));
  };

  const prev = () => {
    setActive((prevActive) => (prevActive - 1 < 0 ? lengthitems : prevActive - 1));
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    reloadSlider();
  }, [active]);

  return (
    <>
    <div className="slider">
      <div className="list" ref={listRef}>
        {items.map((src, index) => (
          <div className="item" key={index}>
            <img src={src} alt={`image${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={prev}>
          &lt;
        </button>
        <button id="next" onClick={next}>
          &gt;
        </button>
      </div>
      <ul className="dots">
        {items.map((_, index) => (
          <li
            key={index}
            className={active === index ? 'active' : ''}
            onClick={() => setActive(index)}
          ></li>
        ))}
      </ul>
      
    </div>
    
    </>
  );
};

export default Sliders;
