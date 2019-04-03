import { Card, Row, Col, Icon, Button, Tooltip } from 'antd';
import React, { Component } from 'react';
import myStyle from '../css/infoCard.less';
import MyIcon from '../../components/MyIcon';


export default class InfoCard extends Component {

    render() {
        return (
            <div>
                <Card
                    className={myStyle['no-padding-card']}
                    style={{ width: 240, marginTop: 24, marginLeft: 8, padding: 0, borderRadius: 10 }}

                >
                    <img alt="" style={{ width: '84px', height: '84px', borderRadius: '42px' }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />
                    <div style={{ marginTop: 32 }}>
                        <Row className={myStyle['name-title']}>
                            <Col span={11} style={{ textAlign: "right" }}>吕小布</Col>
                            <Col span={2}>|</Col>
                            <Col span={11} style={{ textAlign: "left" }}>LVXB</Col>
                        </Row>
                        <Row >
                            <Col span={24}>胆小认生,不易相处</Col>
                        </Row>
                        <Row className={myStyle['localtion-title']}>
                            <Col span={24}><MyIcon type='icon-dizhi' />中国,杭州</Col>
                        </Row>
                        <Row style={{ marginTop: 16, marginBottom: 16 }}>
                            <Col span={24}>
                                <Button href="https://github.com/Desperado2/" target="_blank" type="primary" shape="round" size='large' style={{ width: 160 }}>关注我</Button>
                            </Col>
                        </Row>

                        <Card.Grid className={myStyle['grid-style']}>
                            <div>115</div>
                            <div>文章</div>
                        </Card.Grid>
                        <Card.Grid className={myStyle['grid-style']}>
                            <div>90</div>
                            <div>标签</div>
                        </Card.Grid>
                        <Row align='middle' >
                            <Col span={6} style={{ height: 40, lineHeight: 3.4 }}>
                                <Tooltip placement="topLeft" title="GitHub" arrowPointAtCenter>
                                    <a href="https://github.com/Desperado2/" target="_blank" title="title">
                                        <Icon type="github" theme="filled" style={{ fontSize: 24, color: '#e84d1c' }} />
                                    </a>
                                </Tooltip>

                            </Col>
                            <Col span={6} style={{ height: 40, lineHeight: 3.4 }}>
                                <Tooltip placement="topLeft" title="新浪微博" arrowPointAtCenter>
                                    <a href="https://weibo.com/wanggouxiangdao?refer_flag=1005055014_" target="_blank" title="title">
                                        <Icon type="weibo-circle" theme="filled" style={{ fontSize: 24, color: '#e84d1c' }} />
                                    </a>

                                </Tooltip>

                            </Col>
                            <Col span={6} style={{ height: 40, lineHeight: 3.4 }}>
                                <Tooltip placement="topLeft" title="语雀文档" arrowPointAtCenter>
                                    <a href="https://www.yuque.com/mujingjing/" target="_blank" title="title">
                                        <Icon type="yuque" theme="filled" style={{ fontSize: 24, color: '#e84d1c' }} />
                                    </a>

                                </Tooltip>

                            </Col>
                            <Col span={6} style={{ height: 40, lineHeight: 3.4 }}>
                                <Tooltip placement="topLeft" title="邮箱地址" arrowPointAtCenter>
                                    <a href="mailto:1928524965@qq.com" target="_blank" title="title">
                                        <Icon type="mail" theme="filled" style={{ fontSize: 24, color: '#e84d1c' }} />
                                    </a>
                                </Tooltip>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>
        );
    }
}
