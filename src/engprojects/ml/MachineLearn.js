import React from 'react';
import {
    Container,
    Image,
    Row,
    Col,
} from 'react-bootstrap';
import './main.css';
import TrainVid from './train.webm';
import BettermentImg from './polecart100.jpg';

function MachineLearn() {
    return (
        <Container id="main-container-proj">
            <Row className="mb-3 justify-content-center">
                <video
                    autoPlay
                    loop    
                    muted   
                    playsInline
                    style={{width: '100%', borderRadius: '5px'}}
                >
                    <source src={TrainVid} type="video/webm" />
                    Your browser does not support WebM videos.
                </video>
                <Col xs="auto">
                <p>
                    A demonstration of my custom algorithm successfully passing the cartpole test. The purple line is the decision force made by this particular member. 
                </p>
                </Col>
            </Row>
            
            
            <Row>
                <Col className="">
                    <p>
                        This custom genetic algorithm was coded from scratch using Pytorch in Python. All individual neural networks are bundled together to make 3d tensors to utilize GPU parallelization per layer, making the whole system efficient in terms of GPU utilization. Evolutionary methods and the driver script (describing the optimization problem to the system) all run on GPU tensors.
                    </p>
                </Col>
            </Row>
            
            
            <Row className="mt-3 mb-3 align-items-center justify-content-center">
                <Image fluid src={BettermentImg} />
                <Col xs="auto">
                    <p>
                        A graph showing the gradual improvement of percentiles of all members performances. This simulation contained a population size of 6000.
                    </p>
                </Col>
            </Row>
            
            
            <Row>
                <Col>
                    <p className="green-text">
                        Current Evolutionary methods (implementation depends on config):
                    </p>
                    <ul className="ml-4 pt-0">
                        <li>
                            Mutation: "Hardfork/Softfork" which either rerolls the trait or nudges it.
                        </li>
                        <li>
                            Tournament: Choose to slot in best performer for X size of bracket.
                        </li>
                        <li>
                            Crossover: Trait mixture from Parent A/Parent B.
                        </li>
                        <li>
                            Reroll: Totally reroll member to inject trait diversity.
                        </li>
                        <li>
                            1 member Elitism: Due to an unforeseen problem with many elites copying each others traits, only 1 elite will be chosen to remain in the simulation. This way, the topmost solution will not be lost, but the diversity won't be destroyed.
                        </li>
                        <li>
                            Stayover: Like Elitism but randomized slots. This helps decrease selection pressure if needed.
                        </li>
                    </ul>
                    <p>
                        Additional features include proper LSTM memory integration. Future assignments include testing to see if the system can count Blackjack cards without being told to, and eventually to analyze market trends.
                    </p>
                </Col>
                
            </Row>
        </Container>
    );
}
  
export default MachineLearn;
  