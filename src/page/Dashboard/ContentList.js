import React, { Component } from 'react';
import { Timeline, Icon, Card, Row, Col } from 'antd';
import ContentListStyle from '../css/ContentList.less';
import MyIcon from '../../components/MyIcon';


export default class ContentList extends Component {

    render() {
        return (
            <Timeline className={ContentListStyle['timeline-item-head']}>
                <Timeline.Item dot={<MyIcon type="icon-biaoqian" style={{ fontSize: 32, background: '#0a000000' }} />} >#JAVA</Timeline.Item>
                <Timeline.Item dot={<MyIcon type="icon-dian" style={{ fontSize: 16, background: '#0a000000' }} />}>
                    <Card title="JAVA高并发修炼手册 | 高并发的概念" bordered={false} style={{ width: 900 }} >

                        <Row >
                            <Col span={4} >
                                <Icon type="calendar" theme="filled" /><a herf="">2019-04-03</a>
                            </Col>
                            <Col span={4}>
                                <Icon type="folder" theme="filled" /><a href="">SpringBoot</a>
                            </Col>
                            <Col span={16}>
                                <Icon type="tags" theme="filled" />
                                <a herf="">#JAVA</a>
                                <a herf="">#spring</a>
                                <a herf="">#springboot</a>
                            </Col>
                        </Row>

                    </Card>
                </Timeline.Item>
                <Timeline.Item dot={<MyIcon type="icon-dian" style={{ fontSize: 16, background: '#0a000000' }} />}>
                    <Card title="JAVA高并发修炼手册 | 高并发的概念" bordered={false} style={{ width: 900 }}>
                        <Row >
                            <Col span={4}>
                                <Icon type="calendar" theme="filled" /><a herf="">2019-04-03</a>
                            </Col>
                            <Col span={4}>
                                <Icon type="folder" theme="filled" /><a href="">SpringBoot</a>
                            </Col>
                            <Col span={16}>
                                <Icon type="tags" theme="filled" />
                                <a herf="">#JAVA</a>
                                <a herf="">#spring</a>
                                <a herf="">#springboot</a>
                            </Col>
                        </Row>
                    </Card>
                </Timeline.Item>
                <Timeline.Item dot={<MyIcon type="icon-dian" style={{ fontSize: 16, background: '#0a000000' }} />}>
                    <Card title="JAVA高并发修炼手册 | 高并发的概念" bordered={false} style={{ width: 900 }}>
                        <Row >
                            <Col span={4}>
                                <Icon type="calendar" theme="filled" /><a herf="">2019-04-03</a>
                            </Col>
                            <Col span={4}>
                                <Icon type="folder" theme="filled" /><a href="">SpringBoot</a>
                            </Col>
                            <Col span={16}>
                                <Icon type="tags" theme="filled" />
                                <a herf="">#JAVA</a>
                                <a herf="">#spring</a>
                                <a herf="">#springboot</a>
                            </Col>
                        </Row>
                    </Card>
                </Timeline.Item>
            </Timeline>
        );
    }
}
