
import { Placeholder, Card } from 'react-bootstrap';

function Loading(props) {
    return (
        <div>
            <Placeholder as={Card.Text} animation="glow" aria-hidden='true' >
                <Placeholder xs={7} className='rounded' /> <Placeholder xs={4} className='rounded' /> <Placeholder xs={4} className='rounded' />{' '}
                <Placeholder xs={6} className='rounded' />
            </Placeholder>
        </div>
    )
}

function Quote(props) {
    return (
        <div>
            <Card.Title className='quote mb-5 text-center text-secondary'>
                {props.isLoading === true ? <span>Generating...</span> : <div><span>Generated</span> from <cite title='https://rapidapi.com/martin.svoboda/api/quotes15'>Quotes API</cite></div>}</Card.Title>
            <figure style={{ color: props.color }}>
                <blockquote>
                    {props.isLoading === true && <Loading />}
                    {props.isLoading === false && <div>
                        <p id='text'>{props.content}</p> <figcaption id='author' className='lead' style={{ color: props.colorV2 }}>  -{props.author}</figcaption>
                    </div>}
                </blockquote>
            </figure>
        </div>
    )
}

function Controlls(props) {
    const tweetBtn = <i title='Tweet this quote' className="fa-brands fa-twitter"></i>
    const themeBtn = <i title='Change Theme' className="fa-solid fa-palette"></i>
    const newQuote = <i title='Roll New Quote' className="fa-solid fa-dice-four"></i>

    const twitterQuery = `https://twitter.com/intent/tweet?text=${props.content + '%0a%20%20%20%20%E2%80%94' + props.author}`

    return (
        <div className='controlls flex-grow-1 flex-basis-1 d-flex gap-3 align-items-end' >
            <a id="tweet-qoute" style={{ color: props.color }}
                href={twitterQuery} target='_blank' rel='noreferrer'>
                {tweetBtn}</a>
            <button style={{ color: props.color }} onClick={props.changeTheme}>{themeBtn}</button>
            <button id='new-quote' style={{ color: props.color }} className='' onClick={() => {
                props.changeTheme()
                props.changeQuote()
            }}>{newQuote}</button>
        </div>
    )
}

function Socials(props) {
    const socials = {
        facebook: 'http://www.facebook.com/itsemon245',
        github: 'http://www.github.com/bdemon245',
        twitter: 'http://www.twitter.com/rjemon245',
        freeCodeCamp: 'https://www.freecodecamp.org/bdemon245'

    }
    const fb = <i className="fa-brands fa-facebook"></i>
    // const twitter = <i className="fa-brands fa-twitter"></i>
    const github = <i className="fa-brands fa-github"></i>
    const freeCodeCamp = <i className="fa-brands fa-free-code-camp"></i>
    return (
        <div className="d-flex align-items-center flex-column">
            <div className='lead'><p style={{ color: 'white' }}>Follow me on</p></div>
            <div className='socials row rounded-3 '>
                <a className='col' href={socials.github} title={socials.github} target="_blank" rel="noopener noreferrer">{github}</a>
                <a className='col' href={socials.facebook} title={socials.facebook}target="_blank" rel="noopener noreferrer">{fb}</a>
                <a className='col' href={socials.freeCodeCamp} title="Visit my freeCodeCamp profile" target="_blank" rel="noopener noreferrer">{freeCodeCamp}</a>
                {/* <a className='col' href={socials.twitter} title={socials.twitter} target="_blank" rel="noopener noreferrer">{twitter}</a> */}
            </div>
        </div>
    )
}

export { Loading, Quote, Controlls, Socials }