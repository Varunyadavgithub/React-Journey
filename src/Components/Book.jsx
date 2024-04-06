import React from 'react'
import '../Book.css';

const Book = (props) => {
    const {image,title,publisher,price}=props;
  return (
      <div className='book'>
        <div className="book-image">
            <img src={image} alt="book" />
        </div>
        <div className="book-info">
            <h2>{title}</h2>
            <p className='book-author'>By {publisher}</p>
            <p className='book-price'>$ {price}</p>
            <button>Add to Card</button>
        </div>
    </div>
  )
}

export default Book
