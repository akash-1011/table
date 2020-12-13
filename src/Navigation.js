import React from 'react'
import './Navigation.css'

function Navigation({total,pageNo,navigate,prev,next}) {

    const pages = [];
    for (let i = 1; i <= Math.ceil(total/20); i++) {
        pages.push(i);        
    }
    const length = pages.length;

    return (
        <div>
            <nav className='navigation'>
                <button href="#" onClick={() => prev()} disabled={pageNo == pages[0]}>&laquo;</button>
                {pages.map(number => (
                    <a href='#' onClick={() => navigate(number)}>
                        {number}
                    </a>
                ))}
                <button href="#" onClick={() => next()} disabled={pageNo == pages[length-1]}>&raquo;</button>
            </nav>
        </div>
    )
}

export default Navigation
