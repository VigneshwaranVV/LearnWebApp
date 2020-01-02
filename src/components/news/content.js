import React, { Component } from "react"
import Carousel from "../../common/slider/Carousel"
import { connect } from "react-redux";
import SingleFeed from "./singleFeed"
const DATA = [{
    "title": "Devendra Fadnavis gets down to work, his first sign of 2nd term is on a cheque - Hindustan Times",
    "description": "The CMO Maharastra tweeted pictures of the CM signing his first cheque for the Chief Minister’s Relief Fund. The new chief minister was then seen handing over the cheque to a woman.",
    "url": "https://www.hindustantimes.com/india-news/devendra-fadnavis-gets-down-to-work-signs-first-cheque-of-2nd-term-for-this/story-FeCpCQvIcXtDVbuHbBG1aI.html",
    "urlToImage": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/11/25/Pictures/_ca783624-0f6c-11ea-b3fe-5324eb805ee9.png",
    "publishedAt": "2019-11-25T22:11:25Z",
    "content": "Devendra Fadnavis, whose government is fighting a challenge over his swearing in from Sena-NCP-Cong-combine, got busy with work in his second stint as chief minister of Maharashtra by signing his first cheque for a relief fund.\r\nThe CMO Maharastra tweeted pic… [+1992 chars]"
},
{
    "author": "Charles Riley, CNN Business",
    "title": "China flexes its economic and political muscle - CNN",
    "description": "Happy Thursday. A version of this story first appeared in CNN Business' Before the Bell newsletter. Not a subscriber? You can sign up right here.",
    "url": "https://www.cnn.com/2020/01/02/investing/premarket-stocks-trading/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/191009151607-xi-jinping-china-09-11-super-tease.jpg",
    "publishedAt": "2020-01-02T12:06:00Z",
}, {
    "author": "Elian Peltier",
    "title": "France Won’t Extradite Carlos Ghosn if He Goes There, Official Says - The New York Times",
    "description": "Mr. Ghosn, the former Nissan and Renault chief, fled Japan to avoid trial and arrived in Lebanon this week.",
    "url": "https://www.nytimes.com/2020/01/02/world/europe/carlos-ghosn-france-extradite.html",
    "urlToImage": "https://static01.nyt.com/images/2020/01/02/world/02ghosn1/merlin_147107115_87c1e26e-519e-4662-89fd-4c660529615f-facebookJumbo.jpg",
    "publishedAt": "2020-01-02T10:56:00Z",
    "content": "Mr. Ghosn, who has been charged in Japan with an array of financial crimes, was born in Brazil to a Lebanese family, grew up mostly in Lebanon and has lived most of his adult life in France. He has passports from all three countries, though his lawyers in Jap… [+1153 chars]"
},{"author": "Ron Miller",
"title": "These ten enterprise M&A deals totaled over $40B in 2019",
"description": "It would be hard to top the 2018 enterprise M&A total of a whopping $87 billion, and predictably this year didn’t come close. In fact, the top 10 enterprise M&A deals in 2019 were less than half last year’s, totaling $40.6 billion. This year’s biggest purchas…",
"url": "https://techcrunch.com/2020/01/01/these-ten-enterprise-ma-deals-totaled-over-40b-in-2019/",
"urlToImage": "https://techcrunch.com/wp-content/uploads/2019/12/m-a-2019b.png?w=753",
"publishedAt": "2020-01-01T21:00:42Z",
"content": "It would be hard to top the 2018 enterprise M&amp;A total of a whopping $87 billion, and predictably this year didn’t come close. In fact, the top 10 enterprise M&amp;A deals in 2019 were less than half last year’s, totaling $40.6 billion.\r\nThis year’s bigges… [+1214 chars]"
}
]

class NewsContent extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10vh' }}>
                {/* <Carousel /> */}
                {DATA.map((data, index) => {
                    return <SingleFeed data={data} key={index} showSave={this.props.isAuth}/>
                })
                }
            </div>
        )
    }
}
export const mapStateToProps = state => {
    return {
      isAuth: state.authReducer.isLoggedIn,
      isLoading: state.authReducer.isLoading,
      isErrorMsg: state.authReducer.isError && state.authReducer.isError
    };
  };
  
  export const mapDispatchToProps = dispatch => {
    return {
     
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewsContent);
