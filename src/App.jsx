import { useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Form from './components/Form'
// import Card from './components/Card'
import About from './components/About'
import Contact from './components/Contact'
import LoremComponent from './components/LoremComponent'
import { Routes, Route } from 'react-router-dom'

const App = () => {

    const peoples = [
        {
            "name": "John Doe",
            "age": 28,
            "city": "New York",
            "profession": "Software Engineer"
        },
        {
            "name": "Jane Smith",
            "age": 34,
            "city": "Los Angeles",
            "profession": "Graphic Designer"
        },
        {
            "name": "Michael Johnson",
            "age": 45,
            "city": "Chicago",
            "profession": "Project Manager"
        },
        {
            "name": "Emily Davis",
            "age": 23,
            "city": "Houston",
            "profession": "Marketing Specialist"
        },
        {
            "name": "David Wilson",
            "age": 39,
            "city": "Phoenix",
            "profession": "Data Analyst"
        }
    ]

    const [data, setData] = useState([])
    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        console.log(response.data)
        setData(response.data)
    }

    return (
        <>
            <Navbar/>
            <Form/>

            {/* <div className='p-10'>
                {peoples.map(function(people, idx) {
                    return <Card key={idx} name={people.name} age={people.age} city={people.city} profession={people.profession} />
                })}
            </div> */}

            <button className='rounded p-5 text-white bg-emerald-900 active:scale-90' onClick={(e) => {
                getData()
            }}>
                Get Data
            </button>

            {data.map(function(item, idx) {
                return <LoremComponent key={idx} pic={item.download_url} author={item.author} />
            })}

            <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>

            <Footer/>
        </>
    )

}

export default App
