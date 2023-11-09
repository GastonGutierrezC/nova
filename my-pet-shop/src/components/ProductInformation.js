import React from 'react';
import '../Css/Testimonio.css'

function Testimonial(props) {
  return (
      <div className='witness-container'>
          <img
              className='witness-image'
              src={require(`../Images/${props.image}.jpeg`)}
              alt={props.name} // Replace 'pet image' with 'props.name' for a more descriptive alt text
          />

          <div className='text-container-witness'>
              <p className='witness-name'>
                  {props.name}
              </p>
              <p className='witness-position'>{props.position}</p>
              <p className='testimonial-text'>{props.testimony}</p>
          </div>
      </div>
  );
}
export default Testimonial;
