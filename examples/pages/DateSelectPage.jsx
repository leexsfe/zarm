import React, { Component } from 'react';
import { Panel, Cell, DateSelect } from 'zarm';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Page extends Component {

  constructor() {
    super();
    this.state = {
      date: '',
      dateVisible: false,
      customDate: '',
      time: '',
      datetime: '',
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.open('yearVisible');
    // }, 500);
  }

  open = (key) => {
    this.setState({
      [`${key}`]: true,
    });
  }

  close = (key) => {
    this.setState({
      [`${key}`]: false,
    });
  }

  render() {
    const { date, time, datetime, customDate } = this.state;
    return (
      <Container className="picker-page">
        <Header title="日期选择器 DateSelect" />
        <main>
          <Panel>
            <Panel.Header title="日期选择器" />
            <Panel.Body>

              <Cell title="日期选择">
                <DateSelect
                  title="选择日期"
                  placeholder="请选择日期"
                  mode="date"
                  value={date}
                  wheelDefaultValue="2009-07-04"
                  min="2007-03-03"
                  max="2018-11-23"
                  onChange={(value) => {
                    this.setState({
                      date: value,
                    });
                  }}
                  />
              </Cell>

              <Cell title="时间选择">
                <DateSelect
                  title="选择时间"
                  placeholder="请选择时间"
                  mode="time"
                  value={time}
                  minuteStep={15}
                  onChange={(value) => {
                    this.setState({
                      time: value,
                    });
                  }}
                  />
              </Cell>

              <Cell title="日期&时间">
                <DateSelect
                  title="选择日期"
                  placeholder="请选择日期"
                  mode="datetime"
                  value={datetime}
                  onChange={(value) => {
                    this.setState({
                      datetime: value,
                    });
                  }}
                  />
              </Cell>

              <Cell title="自定义格式">
                <DateSelect
                  title="选择日期"
                  placeholder="请选择日期"
                  mode="datetime"
                  format="yyyy年MM月dd日 HH时mm分"
                  value={customDate}
                  onChange={(value) => {
                    this.setState({
                      customDate: value,
                    });
                  }}
                  />
              </Cell>
            </Panel.Body>
          </Panel>

        </main>
        <Footer />
      </Container>
    );
  }
}

export default Page;
