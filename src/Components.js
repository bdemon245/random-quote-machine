
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
                <blockquote >
                    {props.isLoading === true && <Loading />}
                    {props.isLoading === false && <div>
                        <p>{props.content}</p> <figcaption className='lead' style={{ color: props.colorV2 }}> -{props.author}</figcaption>
                    </div>}
                </blockquote>
            </figure>
        </div>
    )
}

function Controlls(props) {
    const tweetBtn = <i className="fa-brands fa-twitter"></i>
    const themeBtn = <i className="fa-solid fa-palette"></i>
    const newQuote = <i className="fa-solid fa-dice-four"></i>

    return (
        <div className='controlls flex-grow-1 flex-basis-1 d-flex gap-3 align-items-end' >
            <a style={{ color: props.color }}
                href="https://twitter.com/intent/tweet?text=Hello%20world" target='_top' rel='noreferrer'>
                {tweetBtn}</a>
            <button style={{ color: props.color }} onClick={props.changeTheme}>{themeBtn}</button>
            <button style={{ color: props.color }} className='' onClick={() => {
                props.changeTheme()
                props.changeQuote()
            }}>{newQuote}</button>
        </div>
    )
}

function Socials(props) {
    const fb = <i className="fa-brands fa-facebook"></i>
    const twitter = <i className="fa-brands fa-twitter"></i>
    const github = <i className="fa-brands fa-github"></i>
    // const linkdin = <i className="fa-brands fa-linkdin"></i>
    return (
        <div className='socials row rounded-3 '>
            <a className='col' href="http://www.github.com/bdemon245" target="_blank" rel="noopener noreferrer">{github}</a>
            <a className='col' href="http://www.facebook.com/itsemon245" target="_blank" rel="noopener noreferrer">{fb}</a>
            {/* <a href="http://facebook.com/itsemon245" target="_blank" rel="noopener noreferrer">{linkdin}</a> */}
            <a className='col' href="http://www.twitter.com/rjemon245" target="_blank" rel="noopener noreferrer">{twitter}</a>
        </div>
    )
}

export { Loading, Quote, Controlls, Socials }