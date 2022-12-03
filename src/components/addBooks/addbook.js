import React from 'react'

const Addbook = () => {
  return (
    <>
        <div className='add-book-container'>
          <h1>Add books</h1>
           <h5>Create new book </h5>
           <form>
            <input type="text" placeholder="tittle of the book"/>
            <input type="text" placeholder="ISBN"/>
            <input type="text" placeholder="Author"/>
            <input type="text" placeholder="description"/>
            <input type="text" placeholder="published date"/>
            <input type="text" placeholder="publish of this book"/>
            <input type="Submit"/>
           </form>
        

        </div>
    </>
  )
}

export default Addbook
