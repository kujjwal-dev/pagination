import React from 'react'

const Pagination = ({postsPerPage , totalPosts,paginate}) => {

    const pageNumbers=[];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button  onClick={() => paginate(number)}   key={number} className="btn btn-primary">
          {number}
        </button>
      ))}
    </div>

  )
}

export default Pagination