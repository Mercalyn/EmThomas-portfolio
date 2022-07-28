import React, { 
    useState,
    useEffect,
} from 'react';
import { 
    Container,
    Row,
    Col,
    Image,
    Accordion,
} from 'react-bootstrap';
import './css.css';
import BannerImg from './graphics/bannertitle5.png';
import LeftImg from './graphics/Left.png';
import RightImg from './graphics/Right.png';
import FooterImg from './graphics/smicon.png';

// shuffle fn
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

// slogan array
let sloganArray = [
    "Best Gold in Class!",
    "WANTED: Gold--Looking For Owner",
    "Now With 100% YES!",
    "Because Not All of Us Get Hilt Drops!",
    "Dedicates Room. Fills with Gold Pieces.",
    "Adopt a Gold Now! (Court Fees May Apply)",
    "Buy That <Insert Expensive Thing> Today!",
    "99 Cons Here I Come!",
    "Without You, I'm Just Metal D: -Gold Coins",
    "I Can Haz Muney?",
    "G.O.L.D.--Get On Living Deluxe",
    "Better Than Smiting the Whip!",
    "Make it Rain!",
    "Caution: Gold Served HOT",
    "A Portion of Your Purchase Will Be Donated to the Home For Noobs Fund",
    "I Came Here to Chew Bubblegum, and Buy Gold - and I'm All Outta Bubblegum",
    "It's Like High Alching IRL",
    "Bandos Orders Puny Humans to Buy Gold!",
    "I Don't Always Buy Gold; But When I Do, I Prefer RS GoldShark",
    "If We Want to Reach Real Peace in the World, We Should Start Buying Gold -Gandhi",
    "Buy Some Gold Already!"
];

// shuffle slogans
sloganArray = shuffle(sloganArray);

function Projects() {
    const faqArray = [{
        q: "Q: Will I get banned for buying gold?",
        a: "The consensus among seasoned real world traders is that the likelihood of a buyer being being banned is extremely low, Jagex mainly targets big time sellers and accounts originating from flagged IP addresses, particularly those from China. RS GoldShark operates in the USA. If you feel more comfortable making multiple smaller, less conspicuous in-game trades, or have any other special requests, we'll be happy to accommodate you. (Though we will not be able to transfer via drop trading.)",
        aa: "In closing, you are more likely be banned by monkfishing without pants on.",
    },{
        q: "Q: Why should I buy from you?",
        a: "We value our commitment to provide the most reliable and rewarding game enhancement experience. We always keep up with the market to ensure our prices are highly competitive and keep our delivery availability updated and accurate so that you can be confident you've made the right choice. When you place your order, we immediately receive mobile notifications so we can minimize the wait time and give you the best service possible.",
        aa: "Other services may use a third party delivery system where orders are dispatched to a network of gold farmers. This decentralized method leads to little accountability on the part of the people actually performing the deliveries. As shown by some of their reviews, they may try to defraud you by asking for the gold back after the delivery or asking for personal information. This is why some suspiciously warn against these things on their own service; it's because it’s not actually them fulfilling the order. RS GoldShark is run by a small dedicated team of Runescape veterans who carry out each order promptly and honestly. ",
    },{
        q: "Q: How fast will I get my gold?",
        a: "We know your time is valuable and make every effort to perform each delivery as quickly as we can. During our regular hours of operation (approximately 11am to 2am EST). we like to set our delivery guarantee at within one hour, although a great majority of trades can be completed much quicker than that. As soon as your order is placed, we're immediately alerted where ever we are, and your delivery becomes our first priority. If you find our regular hours of operation inconvenient, please feel free to contact us via PlayerAuctions messaging to make an appointment and we'll be happy to serve you.",
        aa: "",
    },{
        q: "Q: It's my first time buying gold, how do I know this is legit?",
        a: "Thanks to time-tested technology at PlayerAuctions.com which has facilitated tens of millions of transactions, you're completely protected against fraud. Once your payment is submitted, it's kept by PlayerAuctions until you confirm that we've completed the delivery to your satisfaction--then, and only then, do we receive any payment.",
        aa: "Learn more about how PlayerAuctions protects you here: [link redacted for demo]",
    }];

    const [sloganIndex, setSloganIndex] = useState(0);

    // which page to display, they all load at once because they are small
    const [pageDisplayIndex, setPageDisplayIndex] = useState(0);

    const navArray = [{
        i: 0,
        label: "SERVICES",
    },{
        i: 1,
        label: "FEEDBACK",
    },{
        i: 2,
        label: "FAQ",
    }];

    // dynamically set description and change .active class on link button
    const[btnActiveIndex, setBtnActiveIndex] = useState(0);
    const changeActivePage = (indexOfElement) => {
        setBtnActiveIndex(indexOfElement);
        setPageDisplayIndex(indexOfElement);
    };

    // slogan change scheduler
    useEffect(() => {
        const interval = setInterval(() => {
            // everything here will run every schedule
            //console.log(sloganIndex);
            if(sloganIndex < sloganArray.length - 1){
                setSloganIndex(sloganIndex + 1);
            }else{
                setSloganIndex(0);
            };
        }, 7500);
        return () => clearInterval(interval);
    }, [sloganIndex]);

    return (
        <Container id="page-container-rs" className="rs ml-4">
            <Row id="banner-rs" className="justify-content-center align-items-center rs">
                <h4 id="slogan-text-rs" className="rs mt-2 rs-opacity">{sloganArray[sloganIndex]}</h4>
            </Row>
            <Row className="justify-content-center">
                <Image src={BannerImg} />
            </Row>
            <Row className="justify-content-center" id="rs-navbar">
                {
                    navArray.map((item, index) => 
                        <Col key={index} onClick={() => changeActivePage(item.i)} className={"n-f mx-0 mb-0" + (index === btnActiveIndex ? " rs-active-button" : " rs-inactive-button")}>
                            <h2 className={"rs-button" + (index === btnActiveIndex ? " rs-active-h2" : "")}>{item.label}</h2>
                        </Col>
                    )
                }
            </Row>
            <Container id="main-content-rs" className="p-4">
            {
                (pageDisplayIndex === 0)&&
                <Row className="justify-content-between d-inline-flex flex-row">
                    <Col className="n-f mt-2">
                        <Image src={LeftImg} />
                    </Col>
                    <Col xs={8} className="p-0">
                        <p className="rs-first-tab">
                        Cut the grind and experience Old School Runescape to the fullest with RS GoldShark's hassle-free gold delivery service. Our service is safe, inexpensive and expedient. With a team of seasoned Runescape veterans based in the USA, you can rest assured that your order will be carried out quickly, discreetly, and confidentially.
                        </p>
                        <p className="rs-first-tab">
                        Whether you can't get that drop, got cleaned staking, had too many dry runs at barrows, have been scammed or hacked, got pked (we know, it was lag), are looking to get an expensive skill cape(I'm looking at you 99 Cons!), or just plain don't want to grind, RS GoldShark is your first option to make anything affordable or recover from a loss.
                        </p>
                        <p className="rs-first-tab">
                        Making a purchase is easy. As soon as you place your order, you will be informed of the character's name who will deliver to you, and we'll be here to communicate with you every step of the way both in game and/or via PlayerAuctions.
                        </p>
                        <p className="rs-first-tab">
                        Please refer to our FAQ for commonly asked information. For any specific inquiries, you can contact us at any time with PlayerAuction's messaging system.
                        </p>
                    </Col>
                    <Col className="n-f mt-2">
                        <Image src={RightImg} />
                    </Col>
                </Row>
            }
            {
                (pageDisplayIndex === 1)&&
                <Row className="justify-content-center">
                    <Col className="">
                    <p className="rs">Visit our PlayerAuctions feedback page at: [link redacted for demo]</p>
                    <p className="rs">We'd love to hear from you!</p>
                    </Col>
                </Row>
            }
            {
                (pageDisplayIndex === 2)&&
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            {
                                faqArray.map((item, index) => 
                                    <Accordion.Item eventKey={index} key={index}>
                                        <Accordion.Header><h5 className="rs">{item.q}</h5></Accordion.Header>
                                        <Accordion.Body className="px-2">
                                            <p className="rs">
                                                {item.a}
                                            </p>
                                            <p className="rs">
                                                {item.aa}
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            }
                        </Accordion>
                    </Col>
                </Row>
            }
            </Container>
            <Row className="justify-content-center">
                <Image src={FooterImg} />
            </Row>
        </Container>
    );
}
  
export default Projects;
  