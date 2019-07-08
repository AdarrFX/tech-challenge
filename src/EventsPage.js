import React from "react";
import EventResult from "./EventResult";

class EventsPage extends React.Component {

    constructor(props) {
        super(props);

        const { match } = props

        this.state = {
            urlName: match.params.urlname,
            events: [
                {
                    "created": 1334081545000,
                    "id": "59999072",
                    "name": "Scaling a High Traffic Web Application: Our Journey from Java to PHP",
                    "rsvp_limit": 175,
                    "date_in_series_pattern": false,
                    "status": "past",
                    "time": 1335391200000,
                    "local_date": "2012-04-25",
                    "local_time": "18:00",
                    "updated": 1339631842000,
                    "utc_offset": -14400000,
                    "waitlist_count": 0,
                    "yes_rsvp_count": 84,
                    "venue": {
                        "id": 6622782,
                        "name": "Achievers InCenter",
                        "lat": 43.63736343383789,
                        "lon": -79.4256820678711,
                        "repinned": false,
                        "address_1": "190 Liberty Street",
                        "city": "Toronto",
                        "country": "ca",
                        "localized_country_name": "Canada",
                        "zip": "",
                        "state": "ON"
                    },
                    "group": {
                        "created": 1334061421000,
                        "name": "Achievers Tech Talks",
                        "id": 3640402,
                        "join_mode": "open",
                        "lat": 43.63999938964844,
                        "lon": -79.43000030517578,
                        "urlname": "achieverstech",
                        "who": "Members",
                        "localized_location": "Toronto, ON",
                        "state": "ON",
                        "country": "ca",
                        "region": "en_US",
                        "timezone": "Canada/Eastern"
                    },
                    "link": "https://www.meetup.com/achieverstech/events/59999072/",
                    "description": "<p>What makes an application scale? What should you worry about early on and what can wait?</p> <p>Over the last 3 years, Achievers has learned many lessons and gained fundamental knowledge on scaling our SaaS platform. <a href=\"http://www.linkedin.com/pub/aris-zakinthinos/0/a43/661\">CTO Dr. Aris Zakinthinos</a> will present and discuss the decisions we’ve made including language choice, server architecture, and much more; join us while we share tips, tricks, and things to absolutely avoid.</p> <p>Throughout the evening you will have the opportunity to talk to the development team behind the Achievers Platform and ask questions on scaling best practices.</p> ",
                    "visibility": "public"
                },
                {
                    "created": 1335822249000,
                    "duration": 8100000,
                    "id": "62820302",
                    "name": "Optimizing MySQL Queries",
                    "rsvp_limit": 150,
                    "date_in_series_pattern": false,
                    "status": "past",
                    "time": 1339624800000,
                    "local_date": "2012-06-13",
                    "local_time": "18:00",
                    "updated": 1339736594000,
                    "utc_offset": -14400000,
                    "waitlist_count": 0,
                    "yes_rsvp_count": 78,
                    "venue": {
                        "id": 6622782,
                        "name": "Achievers InCenter",
                        "lat": 43.63736343383789,
                        "lon": -79.4256820678711,
                        "repinned": false,
                        "address_1": "190 Liberty Street",
                        "city": "Toronto",
                        "country": "ca",
                        "localized_country_name": "Canada",
                        "zip": "",
                        "state": "ON"
                    },
                    "group": {
                        "created": 1334061421000,
                        "name": "Achievers Tech Talks",
                        "id": 3640402,
                        "join_mode": "open",
                        "lat": 43.63999938964844,
                        "lon": -79.43000030517578,
                        "urlname": "achieverstech",
                        "who": "Members",
                        "localized_location": "Toronto, ON",
                        "state": "ON",
                        "country": "ca",
                        "region": "en_US",
                        "timezone": "Canada/Eastern"
                    },
                    "link": "https://www.meetup.com/achieverstech/events/62820302/",
                    "description": "<p>Ever wish you were an SQL ninja? Do you think query optimization is something only DBAs should be worried about? Do you want to know what really happens behind the scenes when you SELECT foo FROM bar?</p> <p>At Achievers, our dev team is dedicated to building a web app that performs blazingly fast. As a result, we're constantly taking a deeper look at all the queries that get executed in our database and fine-tuning them for optimal performance.</p> <p>At this talk, CTO <a href=\"http://www.linkedin.com/profile/view?id=2577385\">Dr. Aris Zakinthinos</a> will deliver a highly technical, hands-on presentation on optimizing MySQL queries. From using the MySQL \"explain\" function, to truly understanding indexes, we're sure this presentation will provide value to every developer that interacts with a database.</p> <p>RSVP early as spaces are limited.</p> ",
                    "visibility": "public"
                },
                {
                    "created": 1341343699000,
                    "id": "71826952",
                    "name": "PHP Framework Battle",
                    "rsvp_limit": 100,
                    "date_in_series_pattern": false,
                    "status": "past",
                    "time": 1344463200000,
                    "local_date": "2012-08-08",
                    "local_time": "18:00",
                    "updated": 1344634639000,
                    "utc_offset": -14400000,
                    "waitlist_count": 0,
                    "yes_rsvp_count": 77,
                    "venue": {
                        "id": 6622782,
                        "name": "Achievers InCenter",
                        "lat": 43.63736343383789,
                        "lon": -79.4256820678711,
                        "repinned": false,
                        "address_1": "190 Liberty Street",
                        "city": "Toronto",
                        "country": "ca",
                        "localized_country_name": "Canada",
                        "zip": "",
                        "state": "ON"
                    },
                    "group": {
                        "created": 1334061421000,
                        "name": "Achievers Tech Talks",
                        "id": 3640402,
                        "join_mode": "open",
                        "lat": 43.63999938964844,
                        "lon": -79.43000030517578,
                        "urlname": "achieverstech",
                        "who": "Members",
                        "localized_location": "Toronto, ON",
                        "state": "ON",
                        "country": "ca",
                        "region": "en_US",
                        "timezone": "Canada/Eastern"
                    },
                    "link": "https://www.meetup.com/achieverstech/events/71826952/",
                    "description": "<p>Choosing a web framework these days is like buying toothpaste. Every option seems to have outrageous benefits and a religious following to boast, but they’re all trying to solve the same problem: making it <b>easier</b> for you to build web applications.</p> <p>PHP is our language of choice, but even within the PHP ecosystem, there are dozens of web frameworks to choose from. In this talk, we'll explore the pros and cons of four of the most popular frameworks out there:  <a href=\"http://framework.zend.com/\">Zend</a>, <a href=\"http://cakephp.org/\">CakePHP</a>, <a href=\"http://codeigniter.com/\">CodeIgniter</a> and <a href=\"http://symfony.com/\">Symfony</a>.</p> <p>During the talk, we'll compare the code required to build the exact same application, as well as have a short Q&amp;A with devs that have had experience using one or more of these frameworks.</p> <p>If you're debating between frameworks, interested in knowing what's out there, or just want to hang out with cool, smart people, come join us for this talk!</p> ",
                    "visibility": "public"
                },
                {
                    "created": 1347462740000,
                    "id": "82051122",
                    "name": "<script>alert('Your Web Application Is Most Likely Insecure')</script>",
                    "rsvp_limit": 130,
                    "date_in_series_pattern": false,
                    "status": "past",
                    "time": 1352415600000,
                    "local_date": "2012-11-08",
                    "local_time": "18:00",
                    "updated": 1358989350000,
                    "utc_offset": -18000000,
                    "waitlist_count": 0,
                    "yes_rsvp_count": 99,
                    "venue": {
                        "id": 6622782,
                        "name": "Achievers InCenter",
                        "lat": 43.63736343383789,
                        "lon": -79.4256820678711,
                        "repinned": false,
                        "address_1": "190 Liberty Street",
                        "city": "Toronto",
                        "country": "ca",
                        "localized_country_name": "Canada",
                        "zip": "",
                        "state": "ON"
                    },
                    "group": {
                        "created": 1334061421000,
                        "name": "Achievers Tech Talks",
                        "id": 3640402,
                        "join_mode": "open",
                        "lat": 43.63999938964844,
                        "lon": -79.43000030517578,
                        "urlname": "achieverstech",
                        "who": "Members",
                        "localized_location": "Toronto, ON",
                        "state": "ON",
                        "country": "ca",
                        "region": "en_US",
                        "timezone": "Canada/Eastern"
                    },
                    "link": "https://www.meetup.com/achieverstech/events/82051122/",
                    "description": "<p>Cross-site scripting? SQL injection? Cross-site request forgery? Most developers have only a basic understanding of the most common security risks affecting today's web applications.</p> <p>It's no secret that web application attacks are on the rise. In the last year, there have been numerous stories of high profile websites being attacked and losing revenue, customers, and credibility.</p> <p>During this talk we will dive into all aspects of the Open Web Application Security Project’s (OWASP) top 10 security vulnerabilities. We will offer in-depth explanations, real world examples, testing techniques, and remedies.</p> <p>If web application security keeps you up at night, or you just want to hang out with cool, smart people, come join us for this talk!</p> ",
                    "visibility": "public"
                },
                {
                    "created": 1356024700000,
                    "id": "96040142",
                    "name": "Agile - The Xtreme Labs Way",
                    "rsvp_limit": 200,
                    "date_in_series_pattern": false,
                    "status": "past",
                    "time": 1358982000000,
                    "local_date": "2013-01-23",
                    "local_time": "18:00",
                    "updated": 1362099778000,
                    "utc_offset": -18000000,
                    "waitlist_count": 0,
                    "yes_rsvp_count": 198,
                    "venue": {
                        "id": 6622782,
                        "name": "Achievers InCenter",
                        "lat": 43.63736343383789,
                        "lon": -79.4256820678711,
                        "repinned": false,
                        "address_1": "190 Liberty Street",
                        "city": "Toronto",
                        "country": "ca",
                        "localized_country_name": "Canada",
                        "zip": "",
                        "state": "ON"
                    },
                    "group": {
                        "created": 1334061421000,
                        "name": "Achievers Tech Talks",
                        "id": 3640402,
                        "join_mode": "open",
                        "lat": 43.63999938964844,
                        "lon": -79.43000030517578,
                        "urlname": "achieverstech",
                        "who": "Members",
                        "localized_location": "Toronto, ON",
                        "state": "ON",
                        "country": "ca",
                        "region": "en_US",
                        "timezone": "Canada/Eastern"
                    },
                    "link": "https://www.meetup.com/achieverstech/events/96040142/",
                    "description": "<p>When we started Achievers Tech Talks, our goal was to give back to the Toronto tech community by sharing the things we've learned while building and scaling the Achievers platform. As our community continues to grow, we want to extend our talks to rockstar speakers from other companies and organizations. We are happy to announce that in January, Achievers Tech Talks will be hosting its first external speaker; <a href=\"http://www.linkedin.com/in/fnthawar\">Farhan Thawar</a>, VP of Engineering at <a href=\"http://www.xtremelabs.com/\">Xtreme Labs</a>.</p> <p>At Xtreme Labs, Agile is not an engineering process, it's a way of life. Not only do they practice agile engineering - an iterative process that uses pair programming - they also have a flat management hierarchy and employ a 'Do-ocracy' mantra. Beginning as a start-up and growing to a <b>200+ employee company in under five years</b>, Xtreme Labs owes its success in part to their ability to move quickly and deliver products in an efficient manner. In his talk, Farhan will address how Xtreme's development processes, company structure and policies have enabled them to grow rapidly and produce quality products in tandem.</p> <p><a href=\"http://photos4.meetupstatic.com/photos/event/2/4/1/a/event_189549242.jpegFarhan\" class=\"linkified\">http://photos4.meetupstatic.com/photos/event/2/4/1/a/event_189549242.jpegFarhan</a> has been named one of “Toronto’s Top 25 Most Powerful People In 2010”, and is a well-known and respected figure in Toronto’s tech community. Before joining the Xtreme team, Farhan held the positions of Chief Software Architect at I Love Rewards, Head of Search &amp; MSN Platform for Microsoft Canada and Technical Lead at Trilogy Software. In addition to being a programming and engineering guru, Farhan also uses his wealth of industry and mobile expertise to mentor aspiring mobile and tech startups.</p> ",
                    "visibility": "public"
                }
            ],
            groupMock: {
                "score": 7527,
                "id": 32127967,
                "name": "Video Game Shitposting IRL",
                "status": "active",
                "link": "https://www.meetup.com/Video-Game-Shitposting-IRL/",
                "urlname": "Video-Game-Shitposting-IRL",
                "description": "<p>He does it! Its him! <br>I play video games, drink monster energy zero, and run a Christian philosophy meetup on the side. <br>Autism.</p>\n<p><br></p>\n<p>We tend to meetup at a bar and talk about gaming, industry culture, shallow e-celeb gossip, new stuff, old (good) stuff, devs going woke &amp; broke, pubs shilling and killing studios, how one day science may prove that, in fact, Sonic's arms are blue.</p>\n<p>God forbid we ever play any video games though.<br></p>",
                "created": 1560004484000,
                "city": "Etobicoke",
                "untranslated_city": "Etobicoke",
                "country": "CA",
                "localized_country_name": "Canada",
                "localized_location": "Etobicoke, ON",
                "state": "ON",
                "join_mode": "open",
                "visibility": "public",
                "lat": 43.61,
                "lon": -79.51,
                "members": 15,
                "organizer": {
                    "id": 261168851,
                    "name": "Father J",
                    "bio": "Call me James",
                    "photo": {
                        "id": 280254241,
                        "highres_link": "https://secure.meetupstatic.com/photos/member/d/3/e/1/highres_280254241.jpeg",
                        "photo_link": "https://secure.meetupstatic.com/photos/member/d/3/e/1/member_280254241.jpeg",
                        "thumb_link": "https://secure.meetupstatic.com/photos/member/d/3/e/1/thumb_280254241.jpeg",
                        "type": "member",
                        "base_url": "https://secure.meetupstatic.com"
                    }
                },
                "who": "Members",
                "key_photo": {
                    "id": 482135965,
                    "highres_link": "https://secure.meetupstatic.com/photos/event/8/c/7/d/highres_482135965.jpeg",
                    "photo_link": "https://secure.meetupstatic.com/photos/event/8/c/7/d/600_482135965.jpeg",
                    "thumb_link": "https://secure.meetupstatic.com/photos/event/8/c/7/d/thumb_482135965.jpeg",
                    "type": "event",
                    "base_url": "https://secure.meetupstatic.com"
                },
                "timezone": "Canada/Eastern",
                "category": {
                    "id": 28,
                    "name": "Religion & Beliefs",
                    "shortname": "religion-beliefs",
                    "sort_name": "Religion & Beliefs"
                },
                "meta_category": {
                    "id": 132,
                    "shortname": "beliefs",
                    "name": "Beliefs",
                    "sort_name": "Beliefs",
                    "photo": {
                        "id": 450131925,
                        "highres_link": "https://secure.meetupstatic.com/photos/event/2/e/9/5/highres_450131925.jpeg",
                        "photo_link": "https://secure.meetupstatic.com/photos/event/2/e/9/5/600_450131925.jpeg",
                        "thumb_link": "https://secure.meetupstatic.com/photos/event/2/e/9/5/thumb_450131925.jpeg",
                        "type": "event",
                        "base_url": "https://secure.meetupstatic.com"
                    },
                    "category_ids": [
                        22,
                        24,
                        28
                    ]
                }
            }
        }
    }

    componentDidMount() {
        console.log("Mounted.")
    }

    render() {

        return (
            <div className="group-event-container">
                <div className="group-details-container">
                    <div className="group-details-info">
                        <p>Group Details: {this.state.urlName}</p>
                        <a href={this.state.groupMock.link}><h3>{this.state.groupMock.name}</h3></a>
                        <div className="group-details-image-container">
                            <img className="group-thumbnail-image" src={this.state.groupMock.organizer.photo.photo_link} alt="" />
                        </div>
                        <p>{this.state.groupMock.localized_location}, {this.state.groupMock.localized_country_name}</p>
                        <p>{this.state.groupMock.members} Members.</p>
                        <div dangerouslySetInnerHTML={{ __html: this.state.groupMock.description }} />
                    </div>
                </div>
                <div className="group-event-list">
                    <ul>
                        {this.state.events.map((event) => {
                            return (
                                <li className="event-list-item">

                                    <EventResult eventName={event.name} eventDate={event.local_date} eventTime={event.local_time} eventLink={event.link} eventDescription={event.description} eventVenue={event.venue.name} city={event.venue.city} eventAddress={event.venue.address_1} />

                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

}

export default EventsPage;