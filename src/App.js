import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import MdLocalAirport from 'react-icons/lib/md/local-airport';
import MdHotel from 'react-icons/lib/md/hotel';
import GoArrowSmallRight from 'react-icons/lib/go/arrow-small-right';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';

import Header from './components/header';
import SectionOne from './components/section_one';
import SectionTwo from './components/section_two';
import SectionThree from './components/section_three';
import SectionFour from './components/section_four';
import SectionFive from './components/section_five';
import SectionSix from './components/section_six';
import Footer from './components/footer';

import AirportToHotel from './components/airport_to_hotel';
import HotelToAirport from './components/hotel_to_airport';
import HotelToHotel from './components/hotel_to_hotel';
import AirportToAirport from './components/airport_to_airport';



class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log('this.props', this.props.user);
    return (
      <div>
        <ReactTooltip place="bottom" type="info" effect="solid" />
        <div>
          <Container fluid style={{ lineHeight: '35px' }}>
            <Row>
              <Col md={9} push={{ md: 3 }}>
                <div>
                  <Header user={this.props.user}/>
                  <SectionOne />
                  <SectionTwo />
                  <SectionThree />
                  <SectionFour />
                  <SectionFive />
                  <SectionSix />
                  <Footer />
                </div>
              </Col>
              <Col md={3} pull={{ md: 9 }}>
                <div className="bookingForm" style={{ marginLeft: 9 }}>
                  <div style={{ marginTop: '30px' }}>
                    <Tabs>
                      <TabList>
                        <Tab data-tip="Airport - Hotel">
                          <MdLocalAirport style={{ fontSize: '1.1em', color: '#00bfff' }} />
                          <GoArrowSmallRight />
                          <MdHotel style={{ fontSize: '1.1em', color: '#e6e600' }} />
                        </Tab>
                        <Tab data-tip="Hotel - Airport">
                          <MdHotel style={{ fontSize: '1.1em', color: '#00bfff' }} />
                          <GoArrowSmallRight />
                          <MdLocalAirport style={{ fontSize: '1.1em', color: '#e6e600' }} />
                        </Tab>
                        <Tab data-tip="Hotel - Hotel">
                          <MdHotel style={{ fontSize: '1.1em', color: '#00bfff' }} />
                          <GoArrowSmallRight />
                          <MdHotel style={{ fontSize: '1.1em', color: '#e6e600' }} />
                        </Tab>
                        <Tab data-tip="Airport - Airport">
                          <MdLocalAirport style={{ fontSize: '1.1em', color: '#00bfff' }} />
                          <GoArrowSmallRight />
                          <MdLocalAirport style={{ fontSize: '1.1em', color: '#e6e600' }} />
                        </Tab>
                      </TabList>

                      <TabPanel>
                        <AirportToHotel user={this.props}/>
                      </TabPanel>
                      <TabPanel>
                        <HotelToAirport user={this.props}/>
                      </TabPanel>
                      <TabPanel>
                        <HotelToHotel user={this.props}/>
                      </TabPanel>
                      <TabPanel>
                        <AirportToAirport user={this.props}/>
                      </TabPanel>

                    </Tabs>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(App);
