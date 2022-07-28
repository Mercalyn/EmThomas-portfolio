import React, {
    useState,
    useEffect,
} from 'react';
import './main.css';
import {
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
    },
    animation: false,
    radius: 0,
    borderWidth: 2,
};




function App() {
    const [money, setMoney] = useState(1000);
    const [borrow, setBorrow] = useState(0);
    const [assets, setAssets] = useState(0);
    const [float, setFloat] = useState(money);
    const [advisory, setAdvisory] = useState("Speed on Fast, Chart will scroll when it gets too large");
    const [priceArray, setPriceArray] = useState([200]);
    const [labelArray, setLabelArray] = useState([0]);
    const [lastPrice, setLastPrice] = useState(200);
    const [chartSpeed, setChartSpeed] = useState(100);
    const [chartAdvisoryLock, setChartAdvisoryLock] = useState(false);
    const maxChartLength = 500;
    const priceStep = 1;
    let momentumFlip = 5;

    

    // price scheduler
    useEffect(() => {
        // price engine
        const newPrice = () => {
            // price disturbances by modifying momentumFlip


            // ----
            if(lastPrice < 10){
                // least, starting with lowest
                // less than 10
                momentumFlip = 1;
            }else if(lastPrice < 50){
                // less than 50
                momentumFlip = 2;
            }else if(lastPrice < 100){
                // less than 100
                momentumFlip = 4;

                
            // ----
            }else if(lastPrice > 350){
                // greater, starting with highest
                // greater than 350
                momentumFlip = 6;
            }else if(lastPrice > 300){
                // greater than 300
                momentumFlip = 8;
            }else if(lastPrice > 350){
                // greater than 350
                momentumFlip = 9;
            }else{
                // no chance to momentum
            };

            // price jump allows price to move by 1, 2, or 3x of priceStep
            let priceJump;
            let randomJump = Math.floor((Math.random() * 10) + 0);
            if(randomJump > 5){
                // double
                priceJump = (priceStep * 2);
            }else if(randomJump > 8){
                // triple
                priceJump = (priceStep * 3);
            }else if(randomJump === 0){
                // random crash chance
                momentumFlip = 10;
                priceJump = (priceStep * 6);
            }else if(randomJump === 1){
                // random spike chance
                momentumFlip = 0;
                priceJump = (priceStep * 6);
            }else{
                // less than 6, do nothing
                priceJump = priceStep;
            };

            /*
            random chance with a momentum divider
            11 total, 0-10, consider momentumFlip 5: 0-4:drop 5:stay 6-10:raise
            if momentumFlip goes up means higher chance to drop
            */
            let price;
            let randomFlip = Math.floor((Math.random() * 10) + 0);
            if(randomFlip === momentumFlip){
                // no price change
                price = lastPrice;
            }else if(randomFlip > momentumFlip){
                // raise price
                price = lastPrice + priceJump;
            }else if(randomFlip < momentumFlip){
                // lower price
                price = lastPrice - priceJump;
            };

            // min price of 1
            price = Math.max(price, 1);

            // update dynamic lastPrice
            setLastPrice(price);

            return(price);
        };

        const interval = setInterval(() => {
            // run per time schedule
            newPrice();
            if(assets > 0){
                setFloat(money + (lastPrice * assets));
            }else if(assets < 0){
                setFloat(money + borrow - (Math.abs(assets) * lastPrice));
            };

            let arrayLength = [...priceArray].length;
            if(arrayLength > (maxChartLength - 1)){
                // hit max chart, so shift
                let innerPrice = [...priceArray];
                innerPrice.shift();
                setPriceArray([...innerPrice, lastPrice]);

                if(chartAdvisoryLock === false){
                    setAdvisory("Chart will now scroll");
                    setChartAdvisoryLock(true);
                };

            }else{
                // not hit max, do nothing else
                setLabelArray(current => [...current, 0]);
                setPriceArray(current => [...current, lastPrice]);
            }
        }, chartSpeed);
        return () => clearInterval(interval);
    }, [priceArray]);

    const data = {
        labels: labelArray,
        datasets: [{
            label: 'Price of one EmCoin in § Simoleons',
            data: priceArray,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointStyle: 0,
        }],
    };

    const buyAsset = () => {
        if(assets < 0){
            // covering
            if(assets === -1){
                // specifically if you are covering the last asset
                setAssets(assets + 1);
                setMoney(money + (borrow - lastPrice))
                setBorrow(0);
                setAdvisory("covered @ +" + lastPrice);
            }else{
                // covering more than 1 asset
                let individualBorrow = Math.floor(borrow / Math.abs(assets));
                setAssets(assets + 1);
                setMoney(money + (individualBorrow - lastPrice));
                setBorrow(borrow - individualBorrow);
                setAdvisory("covered @ +" + lastPrice);
            }
        }else{
            // regular buy
            // has cash check
            if(money >= lastPrice){
                setAssets(assets + 1);
                setMoney(money - lastPrice);
                setAdvisory("bought @ +" + lastPrice);
            }else{
                // not enough
                setAdvisory("not enough money to buy!");
            };
        };
    };

    const sellAsset = () => {
        // check if borrowing
        if(assets < 1){
            // borrow
            // check borrow rate
            if((borrow + lastPrice) > (money / 2)){
                setAdvisory("can't borrow more than 50% of your money to short!");
            }else{
                // allowed to borrow
                setAssets(assets - 1);
                setBorrow(borrow + lastPrice);
                setAdvisory("borrowed @ -" + lastPrice);
            }
        }else{
            // regular sell
            setAssets(assets - 1);
            setMoney(money + lastPrice);
            setAdvisory("sold @ -" + lastPrice);
        };
    };

    const flattenAsset = () => {
        // check assets
        if(assets === 0){
            // nothing to flatten
            setAdvisory("you are not in any trades to flatten!");
        }else if(assets > 0){
            // need to sell
            setAssets(0);
            setMoney(money + (assets * lastPrice));
            setAdvisory("sold qty: " + assets + " @ -" + lastPrice + " ea = " + (lastPrice * assets) + " total");
        }else if(assets < 0){
            // need to cover
            setAssets(0);
            setMoney(money + (borrow - (lastPrice * Math.abs(assets))));
            setBorrow(0);
            setAdvisory("covered qty: " + assets + " @ -" + lastPrice + " ea = " + (lastPrice * assets) + " total");
        };
    };

    return (
        <Container id="main-container-mkt" className="pt-3">
            <Row className="justify-content-center flex-row d-flex">
                <Col>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <h4 className="mkt">Speed: </h4>
                        </Col>
                        <Col xs="auto" className="px-1">
                            <Button className="mkt" onClick={() => {
                                setChartSpeed(500);
                                setAdvisory("Speed set to Slow");
                            }}>Slow</Button>
                        </Col>
                        <Col xs="auto" className="px-1">
                            <Button className="mkt" onClick={() => {
                                setChartSpeed(100);
                                setAdvisory("Speed set to Fast");
                            }}>Fast</Button>
                        </Col>
                        <Col xs="auto" className="px-1">
                            <Button className="mkt" onClick={() => {
                                setChartSpeed(10);
                                setAdvisory("Speed set to Superfast");
                            }}>Superfast</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="justify-content-end pr-5 align-items-center">
                        <Col xs="auto" className="pr-4">
                            <h4 className="mktlg">Money: §{money}</h4>
                        </Col>
                        <Col xs="auto" className="pr-4">
                            <h4 className="mktlg">EmCoin: {assets}</h4>
                        </Col>
                    </Row>
                    <Row className="justify-content-end mt-1 pr-5 align-items-center">
                        <Col xs="auto" className="pr-4">
                            <h4 className="mktsm">Floating Equity: §{float}</h4>
                        </Col>
                        <Col xs="auto" className="pr-4">
                            <h4 className="mktsm">Borrowed for shorting: §{borrow}</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-1">
                <Col>
                    <h4 className="mkt">Last Notification: {advisory}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Line options={chartOptions} height={400} data={data} />
                </Col>
            </Row>
            <Row className="my-3 ml-5 align-items-center">
                <Col xs="auto" className="px-1">
                    <Button onClick={() => buyAsset()}>Buy</Button>
                </Col>
                <Col xs="auto" className="px-1">
                    <Button onClick={() => sellAsset()}>Sell</Button>
                </Col>
                <Col xs="auto" className="px-1">
                    <Button onClick={() => flattenAsset()}>Flatten</Button>
                </Col>
                <Col xs="auto" className="pl-5">
                    <h4 className="mkt">Last Price: {lastPrice}</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default App;