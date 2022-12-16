import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { Loading, Quote, Controlls, Socials } from "./Components";
import './App.css'

function App(props) {
  const bgColors = [
    "001021",
    'D7263D',
    '00A6A6',
    '0B3954',
    '2B2D42',
    '50723C',
    '197BBD',
    'F2D492',
    'A3333D'
  ]

  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    fetchData()//calling the function to fetch data when page loads
  }, [])

  //function to call api
  const fetchData = () => {
    setIsLoading(true)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3fdd0dc0f2mshcea4717a7ec6a05p1e2854jsn1bce68040ab7',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    };
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
      .then(response => response.json())
      .then(data => {
        setContent(data.content)
        setAuthor(data.originator.name)
        setIsLoading(false)
      })
      .catch(err => console.error(err));
  }

  function changeTheme() {
    setColorIndex(Math.floor(Math.random() * (bgColors.length + 1)))
  }


  const color = "#" + bgColors[colorIndex]
  const colorV2 = "#" + bgColors[colorIndex + 1]


  return (
    <div class="d-flex flex-column align-items-center justfy-content-center p-5" style={{ height: "100vh", width: '100vw', background: color }}>
      <div className="align-self-end" style={{color: color, textDecoration: 'none'}}>
        <Socials />
      </div>
      <Card className='rounded-3 my-auto px-5 py-3' style={{ width: "clamp(28rem, 48rem, 50rem)", minHeight: 150 }} >
        <Card.Body className='d-flex flex-column'>
          {isLoading === true ? <Loading /> : <Quote isLoading={isLoading} content={content} author={author} color={color} colorV2={colorV2} />}

          <Controlls content={content} author={author} color={color} changeTheme={changeTheme} changeQuote={fetchData} />
        </Card.Body>
      </Card >


    </div>
  )
}

export default App;
