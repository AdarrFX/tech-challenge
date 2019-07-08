import React from "react";
import GroupResult from "./GroupResult";
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';
import queryString from 'query-string';
import axios from "axios";
import jsonp from 'jsonp'

class EventsPage extends React.Component {

    constructor(props) {
        super(props);

        
        this.state = {
            exampleGroupResponse: [
                {
                    "score": 4519,
                    "id": 3640402,
                    "name": "Achievers Tech Talks",
                    "status": "active",
                    "link": "https://www.meetup.com/achieverstech/",
                  "urlname": "achieverstech",
                  "description": "<p>Achievers delivers the only true cloud-based Employee Success Platform™, a powerful new way for companies to engage, align, &amp; recognize employees.</p>",
                  "created": 1334061421000,
                  "city": "Toronto",
                  "untranslated_city": "Toronto",
                  "country": "CA",
                  "localized_country_name": "Canada",
                  "localized_location": "Toronto, ON",
                  "state": "ON",
                  "join_mode": "open",
                  "visibility": "public",
                  "lat": 43.64,
                  "lon": -79.43,
                  "members": 2754,
                  "organizer": {
                    "id": 43995492,
                    "name": "Achievers Tech Admin",
                    "bio": "",
                    "photo": {
                      "id": 208584742,
                      "highres_link": "https://secure.meetupstatic.com/photos/member/6/0/a/6/highres_208584742.jpeg",
                      "photo_link": "https://secure.meetupstatic.com/photos/member/6/0/a/6/member_208584742.jpeg",
                      "thumb_link": "https://secure.meetupstatic.com/photos/member/6/0/a/6/thumb_208584742.jpeg",
                      "type": "member",
                      "base_url": "https://secure.meetupstatic.com"
                    }
                  },
                  "who": "Members",
                  "group_photo": {
                    "id": 382443122,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/c/3/2/highres_382443122.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/c/3/2/600_382443122.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/c/3/2/thumb_382443122.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                  },
                  "key_photo": {
                    "id": 473732478,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/7/e/d/e/highres_473732478.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/7/e/d/e/600_473732478.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/7/e/d/e/thumb_473732478.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                  },
                  "timezone": "Canada/Eastern",
                  "next_event": {
                    "id": "262621466",
                    "name": "Panel: Thriving (Not Just Surviving) Through Change",
                    "yes_rsvp_count": 34,
                    "time": 1564092000000,
                    "utc_offset": -14400000
                  },
                  "category": {
                    "id": 34,
                    "name": "Tech",
                    "shortname": "tech",
                    "sort_name": "Tech"
                  },
                  "meta_category": {
                    "id": 292,
                    "shortname": "tech",
                    "name": "Tech",
                    "sort_name": "Tech",
                    "photo": {
                      "id": 450131949,
                      "highres_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/highres_450131949.jpeg",
                      "photo_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/600_450131949.jpeg",
                      "thumb_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/thumb_450131949.jpeg",
                      "type": "event",
                      "base_url": "https://secure.meetupstatic.com"
                    },
                    "category_ids": [
                      34
                    ]
                  }
                },
                {
                  "score": 2508,
                  "id": 12519042,
                  "name": "Women Who Code Toronto",
                  "status": "active",
                  "link": "https://www.meetup.com/Women-Who-Code-Toronto/",
                  "urlname": "Women-Who-Code-Toronto",
                  "description": "<p>Join us by attending a WWCode event or signing up at <a href=\"http://www.womenwhocode.com\">www.womenwhocode.com</a>.</p>\n<br>\n<p>Women Who Code is the largest and most active community of engineers dedicated to inspiring women to excel in technology careers. We envision a world where women are representative as technical executives, founders, VCs, board members, and software engineers. Our programs are designed to get you there. </p>\n<br>\n<p>Who should join?</p>\n<p>Our community is for professional women in technology careers, including software engineers, developers, UX/UI designers, data scientists and more. Current and aspiring coders are welcome. Bring your laptop and a friend!</p>\n<br>\n<p>What to expect? </p>\n<p>Our events offer free hands on technical events, study groups, panel discussions, lightning talks, and keynotes featuring influential tech industry experts, innovators, and investors. We help you build the skills you need to raise your professional profile and achieve greater career success. </p>\n<br>\n<p>Support us: </p>\n<p>WWCode relies on donations to support this catalytic movement. Funding directly impacts our ability to deliver programs and expand to more cities, ensuring that even more women have the opportunity to excel in tech careers. womenwhocode.com/donate</p>\n<br>\n<p>Share a Job with our Community:</p>\n<p>Post your jobs on the Women Who Code Job Board and hire from our exclusive community of technical professionals. Get started at womenwhocode.com/companies.</p>\n<br>\n<p>Code of Conduct:</p>\n<p>WWCode is an inclusive community, dedicated to providing an empowering experience for everyone who participates in or supports our community, regardless of gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, age, religion, socioeconomic status, caste, creed, political affiliation, or preferred programming language(s). Our events are intended to inspire women to excel in technology careers, and anyone who is there for this purpose is welcome. We do not tolerate harassment of members in any form. </p>\n<br>\n<p>Our Code of Conduct applies to all WWCode events and online communities. Read the full version and access our incident report form at <a href=\"http://www.womenwhocode.com/codeofconduct\">www.womenwhocode.com/codeofconduct</a> </p>\n<br>\n<p>Terms of Service:</p>\n<p>Everyone who participates in our community agrees to abide by our Terms of Service. Read it at www.womenwhocode.com/tos </p>\n<br>\n<p>Privacy Policy:</p>\n<p>Everyone who participates in our community agrees to abide by our Privacy Policy. </p>\n<p>Read it at www.womenwhocode.com/privacy-policy </p>\n<br>\n<br>\n<p>Connect with #WWCode Toronto:</p>\n<p>WWCode Toronto: womenwhocode.com/toronto <br>Twitter: twitter.com/womenwhocodeTO <br>Medium:&nbsp;<a href=\"https://medium.com/women-who-code-toronto\" class=\"linkified\">https://medium.com/women-who-code-toronto</a> <br>Slack:&nbsp;<span>bit.ly/WWCTOSlack</span></p>\n<p>#WWCode Global Network</p>\n<p>Facebook: facebook.com/womenwhocode&nbsp; <br>Twitter: twitter.com/womenwhocode&nbsp; <br><a>Code Review: bit.ly/WWCodeReview&nbsp;</a>&nbsp; <br>Github: github.com/orgs/WomenWhoCode&nbsp; <br>womenwhocode.com</p>\n<p><a href=\"https://wwcodeto-slack.herokuapp.com\"></a></p>\n<p><a href=\"http://fb.com/womenwhocode\"></a></p>",
                  "created": 1390861494000,
                  "city": "Toronto",
                  "untranslated_city": "Toronto",
                  "country": "CA",
                  "localized_country_name": "Canada",
                  "localized_location": "Toronto, ON",
                  "state": "ON",
                  "join_mode": "open",
                  "visibility": "public",
                  "lat": 43.65,
                  "lon": -79.39,
                  "members": 3431,
                  "organizer": {
                    "id": 129339582,
                    "name": "Women Who Code",
                    "bio": "",
                    "photo": {
                      "id": 172594242,
                      "highres_link": "https://secure.meetupstatic.com/photos/member/8/5/c/2/highres_172594242.jpeg",
                      "photo_link": "https://secure.meetupstatic.com/photos/member/8/5/c/2/member_172594242.jpeg",
                      "thumb_link": "https://secure.meetupstatic.com/photos/member/8/5/c/2/thumb_172594242.jpeg",
                      "type": "member",
                      "base_url": "https://secure.meetupstatic.com"
                    }
                  },
                  "who": "Coders",
                  "group_photo": {
                    "id": 462076435,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/4/0/3/3/highres_462076435.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/4/0/3/3/600_462076435.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/4/0/3/3/thumb_462076435.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                  },
                  "key_photo": {
                    "id": 453699771,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/9/b/5/b/highres_453699771.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/9/b/5/b/600_453699771.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/9/b/5/b/thumb_453699771.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                  },
                  "timezone": "Canada/Eastern",
                  "next_event": {
                    "id": "262896475",
                    "name": "Workshop at Top Hat: Optimizing Performance in React",
                    "yes_rsvp_count": 66,
                    "time": 1563314400000,
                    "utc_offset": -14400000
                  },
                  "category": {
                    "id": 34,
                    "name": "Tech",
                    "shortname": "tech",
                    "sort_name": "Tech"
                  },
                  "meta_category": {
                    "id": 292,
                    "shortname": "tech",
                    "name": "Tech",
                    "sort_name": "Tech",
                    "photo": {
                      "id": 450131949,
                      "highres_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/highres_450131949.jpeg",
                      "photo_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/600_450131949.jpeg",
                      "thumb_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/thumb_450131949.jpeg",
                      "type": "event",
                      "base_url": "https://secure.meetupstatic.com"
                    },
                    "category_ids": [
                      34
                    ]
                  }
                },
                {
                  "score": 2508,
                  "id": 25410877,
                  "name": "ThatCrypto",
                  "status": "active",
                  "link": "https://www.meetup.com/ThatCrypto/",
                  "urlname": "ThatCrypto",
                  "description": "<p><i>The only meetup where you can earn cryptocurrency. Learn how at <a href=\"http://bit.ly/THATbounty\">bit.ly/THATbounty&nbsp;</a>!</i></p>\n<p>Bitcoin &amp; Cryptocurrency meetup at ThatChannel.com studio, 600 Bay Street, Suite 510, Toronto.</p>\n<p>Our mission is:</p>\n<p>1. To <b>educate </b>everyone in our community of members about cryptocurrency and blockchain technology through networking and by bringing industry experts and players in to speak about their projects and knowledge. More than just talking, we will guide our members to using cryptocurrency in practical, every day applications, and inspire people how to augment their businesses and projects via blockchains.</p>\n<p>2. To <b>spread the acceptance</b> of crypto and blockchain technology so that practical day-to-day use is widespread, thereby helping more and more people, businesses, and organizations to benefit from its use.</p>\n<p><span>3. To <b>implement </b>our own token/currency/blockchain project(s) to achieve the above and benefit all members and potential members of this meetup. We will announce on this meetup when we will reward members with coins depending on their participation and contribution. Early adopters benefit more.</span></p>\n<p>We are a community interested in an exchange of all things Crypto. In the Information Age knowledge sharing is essential, here at Crypto Bay we are doing just that! Every week we are hosting speakers on finance and technology, and our guests are represented on various social media platforms. All members are encouraged to participate. <br> <br><span>ThatCrypto: a Bitcoin Meetup that COMES TO LIFE with live musicians, complimentary drink with admission, food, great people, your questions and interviews recorded and streaming LIVE TO THE WORLD from the Television Studio at Yonge and Bay. Learn, do, contribute and make a change. </span> <br></p>\n<p> <br>On Day One, a comment from “Wes” said it all: “Hello there, I would be interested to hear about crypto currencies, tokens and coins, ICO, miners, and how regular people can benefit from it”, and Ray added, “What are you doing with Blockchain tech in TO”?</p>\n<p> <br>We are regular people, getting together to interpret the many complex questions of this “Brave New Blockchain World” suddenly being adopted by “everybody” it seems. This public awakening comes after seven years of insider development by programmers and early winners like Vitalik Buterin – all from TO, inventing and bringing Ethereum and Blockchain to the World.</p>\n<p> <br>ThatCrypto will bring on these experts with subjects like “Reaction to potential War with North Korea”: Not being pegged, or controlled by any centralized force, Bitcoin was totally unaffected by the news.</p>\n<p> <br>The World is changing, affecting everybody’s lives, from the birth of “Smart Contracts” to new entities like “ICO’s”, Equity Tokens replacing “IPO’s” and the Stock Market. Looking for answers as to “How could Filecoin have raised $200 million in just 60 minutes?” And “What is the Securities Commission impact?” Can WE, regular people, issue ICO’s? Then, there are dozens of “Trading Platforms” using Bitcoin, Ethereum, or inventing their own. It is by getting together, comparing wins and losses, that we will develop personal financial growth. At Crypto Bay, our growth, our debate, our knowledge will be Live-Streamed Worldwide for all to see and learn, as we guide each other through our Crypto-Journey. <br> <br>Our Facebook Page: <br><a href=\"https://www.facebook.com/cryptobayto/\">https://www.facebook.com/cryptobayto/</a></p>",
                  "created": 1502213598000,
                  "city": "Toronto",
                  "untranslated_city": "Toronto",
                  "country": "CA",
                  "localized_country_name": "Canada",
                  "localized_location": "Toronto, ON",
                  "state": "ON",
                  "join_mode": "open",
                  "visibility": "public",
                  "lat": 43.66,
                  "lon": -79.38,
                  "members": 1473,
                  "organizer": {
                    "id": 187370305,
                    "name": "Denis Serebryakov",
                    "bio": "Facilitating adoption of new emerging technology ensuring a smooth and fast transition of humanity into the best version of the future. Blockchain. VR. Education. Marketing. Psychology.",
                    "photo": {
                      "id": 246194768,
                      "highres_link": "https://secure.meetupstatic.com/photos/member/3/9/b/0/highres_246194768.jpeg",
                      "photo_link": "https://secure.meetupstatic.com/photos/member/3/9/b/0/member_246194768.jpeg",
                      "thumb_link": "https://secure.meetupstatic.com/photos/member/3/9/b/0/thumb_246194768.jpeg",
                      "type": "member",
                      "base_url": "https://secure.meetupstatic.com"
                    }
                  },
                  "who": "Crypto Enthusiasts",
                  "group_photo": {
                    "id": 479853507,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/8/2/e/3/highres_479853507.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/8/2/e/3/600_479853507.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/8/2/e/3/thumb_479853507.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                  },
                  "key_photo": {
                    "id": 481548452,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/b/d/4/4/highres_481548452.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/b/d/4/4/600_481548452.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/b/d/4/4/thumb_481548452.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                  },
                  "timezone": "Canada/Eastern",
                  "next_event": {
                    "id": "262850698",
                    "name": "Panel on Libra (Facebook coin) (Together with Bitcoin Bay and Louii meetups) ",
                    "yes_rsvp_count": 9,
                    "time": 1562621400000,
                    "utc_offset": -14400000
                  },
                  "category": {
                    "id": 34,
                    "name": "Tech",
                    "shortname": "tech",
                    "sort_name": "Tech"
                  },
                  "meta_category": {
                    "id": 292,
                    "shortname": "tech",
                    "name": "Tech",
                    "sort_name": "Tech",
                    "photo": {
                      "id": 450131949,
                      "highres_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/highres_450131949.jpeg",
                      "photo_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/600_450131949.jpeg",
                      "thumb_link": "https://secure.meetupstatic.com/photos/event/2/e/a/d/thumb_450131949.jpeg",
                      "type": "event",
                      "base_url": "https://secure.meetupstatic.com"
                    },
                    "category_ids": [
                      34
                    ]
                  },
                  "pro_network": {
                    "name": "Practical Blockchain",
                    "urlname": "practical-blockchain",
                    "number_of_groups": 2,
                    "network_url": "https://www.meetup.com/pro/practical-blockchain/"
                  }
                },
                {
                  "score": 2508,
                  "id": 6499862,
                  "name": "Toronto Investors & Entrepreneurs (1700+members #2＠Canada)",
                  "status": "active",
                  "link": "https://www.meetup.com/EntrepreneursLife/",
                  "urlname": "EntrepreneursLife",
                  "description": "<p><b>Welcome to the Toronto Investors, Entrepreneurs &amp; Mentors Network!</b></p> \n<p><i>INSPIRED, BOLD &amp; AMBITIOUS</i></p> \n<p><b>Investors, Mentors, Angels, Accelerators &amp; VCs</b></p> \n<p><b>Tech circles:</b> <a href=\"http://www.meetup.com/Media-Networks/\">Social Media &amp; Mobile Apps</a>,<a href=\"http://www.meetup.com/global-freelancers/\"> New Tech</a>, <a href=\"http://www.meetup.com/Google-plus-Facebook/\">Researchers &amp; Academics,</a> <a href=\"http://www.meetup.com/Social-Networks/\">Social &amp; Business Network</a>, and Energy (Green Industry)</p> \n<p><b>EPI-Net circles:</b> <a href=\"http://www.meetup.com/Dreamer/\">Career/Startup Builders,</a> <a href=\"http://www.meetup.com/hacker/\">Mastermind/Think Tank</a><a href=\"http://www.meetup.com/Toronto-Social-Entrepreneurs/\">,</a> and <a href=\"http://www.meetup.com/Toronto-Marketing/\">Marketing/Branding</a> Teams</p> \n<p><b>The Entrepreneurs, Professionals &amp; Investors (EPI) Network:</b></p> \n<p><a href=\"http://www.meetup.com/Investors-Networks/\">The Investors and Mentors Network</a></p> \n<p><a href=\"http://www.meetup.com/Global-Young-Professionals/\">Toronto Young Professionals &amp; Entrepreneurs (TYPE)</a></p> \n<p><a href=\"http://www.meetup.com/Entrepreneurs-in-North-America/\">Entrepreneurs, Professionals &amp; Investors (EPI) @ Ontario</a></p> \n<p><a href=\"http://www.meetup.com/North-America-Entrepreneurs/\">Entrepreneurs, Professionals &amp; Investors (EPI) @ North America</a></p> \n<p>The modern day startup doesn't need a lot of money. Rather, the key ingredient is the energy of like-minded people with various talents. This group is for those of us dreamers with big ideas, who have actually done something about our dreams, and ready for others to help make our dreams come true.</p> \n<p>This group is about a combination of talented people, with the ability to build the next big thing on the Web, the size of Facebook or Wikipedia. The group will have technical, marketing, and content contributors, focused on a few sites at a time, with specific goals in mind.</p> \n<p>Big Dreams need not be restricted to Silicon Valley. With the talent and diversity of Torontonians, lets prove that we can build startups, and make something big.</p> \n<p><b>Who do we have amongst us?</b></p> \n<p>- Investors &lt;br&gt;</p> \n<p>- Mentors</p> \n<p>- Entrepreneurs</p> \n<p>- Innovators</p> \n<p>- Engineers &amp; Programmers</p> \n<p>- Marketing, Social Media, Legal, Finance, Business Professionals</p> \n<p>- Researchers &amp; Graduate Students</p> \n<p><b>Together, We Can Achieve Something Great--Individually &amp; Collectively</b></p> \n<p>We actively look for startup and established business to present their product or service to our group. If you are interested to talk at one of our events please send details to the Co-Organizer. Currently we are also looking for organizers to join our team--give us a shout if interested.</p> \n<p>&lt;br&gt;</p>",
                  "created": 1357399686000,
                  "city": "Toronto",
                  "untranslated_city": "Toronto",
                  "country": "CA",
                  "localized_country_name": "Canada",
                  "localized_location": "Toronto, ON",
                  "state": "ON",
                  "join_mode": "approval",
                  "visibility": "public_limited",
                  "lat": 43.67,
                  "lon": -79.39,
                  "members": 1707,
                  "organizer": {
                    "id": 115531062,
                    "name": "Trevor Pitts",
                    "bio": "My vision is for families to spend more time together, have the healthiest bodies, living debt free without restrictions on life doing things that make them happy and fulfilled.  Find out what you love in life and do that! Go after your passion.",
                    "photo": {
                      "id": 260807415,
                      "highres_link": "https://secure.meetupstatic.com/photos/member/b/9/3/7/highres_260807415.jpeg",
                      "photo_link": "https://secure.meetupstatic.com/photos/member/b/9/3/7/member_260807415.jpeg",
                      "thumb_link": "https://secure.meetupstatic.com/photos/member/b/9/3/7/thumb_260807415.jpeg",
                      "type": "member",
                      "base_url": "https://secure.meetupstatic.com"
                    }
                  },
                  "who": "investors & mentors",
                  "group_photo": {
                    "id": 193025782,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/1/6/9/6/highres_193025782.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/1/6/9/6/600_193025782.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/1/6/9/6/thumb_193025782.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                  },
                  "key_photo": {
                    "id": 395073112,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/8/1/5/8/highres_395073112.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/8/1/5/8/600_395073112.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/8/1/5/8/thumb_395073112.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                  },
                  "timezone": "Canada/Eastern",
                  "category": {
                    "id": 2,
                    "name": "Career & Business",
                    "shortname": "career-business",
                    "sort_name": "Career & Business"
                  },
                  "meta_category": {
                    "id": 522,
                    "shortname": "career-business",
                    "name": "Career & Business",
                    "sort_name": "Career & Business",
                    "photo": {
                      "id": 450131927,
                      "highres_link": "https://secure.meetupstatic.com/photos/event/2/e/9/7/highres_450131927.jpeg",
                      "photo_link": "https://secure.meetupstatic.com/photos/event/2/e/9/7/600_450131927.jpeg",
                      "thumb_link": "https://secure.meetupstatic.com/photos/event/2/e/9/7/thumb_450131927.jpeg",
                      "type": "event",
                      "base_url": "https://secure.meetupstatic.com"
                    },
                    "category_ids": [
                      2
                    ]
                  }
                }
              ],       
            query: queryString.parse(props.location.search),
            currentUrlPath: props.location,
            groupResults: [],
            }
    }

    callGroupAPI = () => {
        jsonp(`https://api.meetup.com/find/groups?key=5e2a4f7e595a61e6c1b2268171a1018&page=15&text=${this.state.query.search}`, null, (err, data) => {
                console.log(err, data);
                this.setState({
                    groupResults: data.data
                })
            });
    }

    componentDidMount() {

        console.log(this.state.query.search);

        this.setState({
            currentUrlPath: this.props.location
        })

        if(this.state.query.search != ""){
            this.callGroupAPI();
        }
    }

    componentDidUpdate() {
        if (this.state.currentUrlPath != this.props.location) {
            this.setState({
                query: queryString.parse(this.props.location.search),
                currentUrlPath: this.props.location,
            }, () => {
                this.callGroupAPI();
                console.log(this.state.query);

            })
        }
    }

        // axios.get('https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/groups?api_key=5e2a4f7e595a61e6c1b2268171a1018&amp;text=achievers')
        // // axios({
        // //     url: 'http://api.meetup.com/find/groups',
        // //     method: 'get',
        // //     params: {
        // //         api_key: `5e2a4f7e595a61e6c1b2268171a1018`,
        // //         text: this.state.query,
        // //     }
        // // })
        // .then(results => {

        //     this.setState({
        //         groupResults: results
        //     });

        //     console.log(this.state.groupResults)
        // });

    render() {

        return (
            <div className="group-results-container">
              {this.state.groupResults.map((group, index) => {
                    console.log("Index ", index);
                    // console.log(group.group_photo.thumb_link);
                return <Link to={`/group/${group.urlname}`}><GroupResult  groupName={group.name} memberCount={group.members} city={group.localized_location} country={group.localized_country_name} /></Link>
              })}
            </div>
        );
    }

}

export default EventsPage;