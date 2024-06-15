import React from 'react'
import './style.css'

function Course() {
    return (
        <div>
            
                <div className='mid'>
                    <label>Course name:</label>
                    <input
                        type='text'
                        placeholder='enter your course name' />

                    <label>University:</label>
                    <input
                        type='text'
                        placeholder='enter your university' />

                    <label>Year :</label>
                    <input
                        type='text'
                        placeholder='enter year' />
                </div>
                <button>Add</button>
            

        </div>
    )
}

export default Course
