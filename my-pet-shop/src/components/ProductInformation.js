import React from 'react';
import '../Css/Testimonio.css';

// ... (importaciones y código previo)

function Testimonial(props) {
    return (
      <div className='witness-container'>
        <img
          className='witness-image'
          src={require(`../Images/${props.image}.jpeg`)}
          alt={props.name}
        />
  
        <div className='text-container-witness'>
          <p className='witness-name'>{props.name}</p>
          <p className='witness-position'>{props.position}</p>
          <p className='testimonial-text'>{props.testimony}</p>
  
          {/* Nuevos campos agregados */}
          <p className='testimonial-type'>
            Type: <span className='highlight'>{props.type}</span>
          </p>
          <p className='testimonial-species'>
            Species: <span className='highlight'>{props.species}</span>
          </p>
          <p className='testimonial-quantity'>
            Quantity: <span className='highlight'>{props.quantity}</span>
          </p>
  
          {/* Botón ADD */}
          <button className='add-button'>ADD</button>
        </div>
      </div>
    );
  }
  
  export default Testimonial;
  