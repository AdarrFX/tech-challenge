import React from 'react';
import './App.css';
import EventResult from './EventResult';

Class App extends React.Component {

  constructor() {
    super();

    this.state = {
      
      exampleEventResponse: [
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

    }
  }


  function createListOfGroups() {
    
  }

  return (
    <div className="wrapper">
      <header>
        <p>Achievers Interview Home Project</p>
      </header>
      <section>
        <h1>Meetup.com Event Search!</h1>
        <form>
          <input type="text" name="search" />
          <input type="submit" name="submit" />
        </form>
        <div className="results-container">
          <p>Just a placeholder</p>
          {}
          <EventResult />
          <EventResult />
          <EventResult />
        </div>
      </section>
      <footer>
        <p>Copyright Adam Pachulski</p>
      </footer>
    </div>
  );
}

export default App;
