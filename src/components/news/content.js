import React, { Component } from "react"
import Carousel from "../../common/slider/Carousel"
import SingleFeed from "./singleFeed"
const DATA = {
    "title": "Devendra Fadnavis gets down to work, his first sign of 2nd term is on a cheque - Hindustan Times",
    "description": "The CMO Maharastra tweeted pictures of the CM signing his first cheque for the Chief Minister’s Relief Fund. The new chief minister was then seen handing over the cheque to a woman.",
    "url": "https://www.hindustantimes.com/india-news/devendra-fadnavis-gets-down-to-work-signs-first-cheque-of-2nd-term-for-this/story-FeCpCQvIcXtDVbuHbBG1aI.html",
    "urlToImage": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/11/25/Pictures/_ca783624-0f6c-11ea-b3fe-5324eb805ee9.png",
    "publishedAt": "2019-11-25T22:11:25Z",
    "content": "Devendra Fadnavis, whose government is fighting a challenge over his swearing in from Sena-NCP-Cong-combine, got busy with work in his second stint as chief minister of Maharashtra by signing his first cheque for a relief fund.\r\nThe CMO Maharastra tweeted pic… [+1992 chars]"
}

export default class NewsContent extends Component {
    render() {
        return (
            <div style={{ height: 100, display: 'flex',flexDirection: 'column' }}>
{/* <Carousel /> */}
                <SingleFeed data={DATA} />
                <SingleFeed data={DATA} />
                <SingleFeed data={DATA} />
                <SingleFeed data={DATA} />
                <SingleFeed data={DATA} />
            </div>
        )
    }
}
