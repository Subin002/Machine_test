import React, { useState } from 'react';
import axios from 'axios';

function Webpage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [courses, setCourses] = useState([{ courseName: '', university: '', year: '' }]);
    const [submittedData, setSubmittedData] = useState(null);

    const handleAddCourse = () => {
        setCourses([...courses, { courseName: '', university: '', year: '' }]);
    };

    const handleRemoveCourse = (index) => {
        setCourses(courses.filter((_, i) => i !== index));
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newCourses = courses.map((course, i) => 
            i === index ? { ...course, [name]: value } : course
        );
        setCourses(newCourses);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name,
            email,
            courses,
        };

        try {
            const res = await axios.post('http://localhost:1500/postform', formData);
            console.log('Response from server:', res.data);

            setSubmittedData(formData);
            setName('');
            setEmail('');
            setCourses([{ courseName: '', university: '', year: '' }]);

        } catch (err) {
            console.error('Error submitting data:', err);
            alert('Failed to submit data. Please try again.');
        }
    };

    return (
        <div className='full'>
            <form onSubmit={handleSubmit}>
                <div className='top'>
                    <label>Name:</label>
                    <input
                        type='text'
                        placeholder='enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Email:</label>
                    <input
                        type='email'
                        placeholder='enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type='button' className='add' onClick={handleAddCourse}>+</button>

                {courses.map((course, index) => (
                    <div key={index} className='mid'>
                        <label>Course name:</label>
                        <input
                            type='text'
                            name='courseName'
                            placeholder='enter your course name'
                            value={course.courseName}
                            onChange={(event) => handleInputChange(index, event)}
                        />

                        <label>University:</label>
                        <input
                            type='text'
                            name='university'
                            placeholder='enter your university'
                            value={course.university}
                            onChange={(event) => handleInputChange(index, event)}
                        />

                        <label>Year :</label>
                        <input
                            type='text'
                            name='year'
                            placeholder='enter year'
                            value={course.year}
                            onChange={(event) => handleInputChange(index, event)}
                        />
                        <button type='button' onClick={() => handleRemoveCourse(index)}>-</button>
                    </div>
                ))}
                <button type='submit'>Submit</button>
            </form>

            {submittedData && (
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Course</th>
                                <th>University</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{submittedData.name}</td>
                                <td>{submittedData.email}</td>
                                <td>{submittedData.courses.map(course => course.courseName).join(',')}</td>
                                <td>{submittedData.courses.map(course => course.university).join(',')}</td>
                                <td>{submittedData.courses.map(course => course.year).join(',')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Webpage;
