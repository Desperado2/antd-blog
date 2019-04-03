import { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import InfoCard from '../page/Dashboard/InfoCard';
import LatestArticles from '../page/Dashboard/LatestArticles';
import TagCard from '../page/Dashboard/TagCard';
import ContentList from '../page/Dashboard/ContentList';

const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>

                    <Row>
                        <Col span={6}>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" width={40}></img>
                            <span style={{ fontSize: 24, fontWeight: 800, marginLeft: 20 }}>吕小布|LVXB</span>
                        </Col>
                        <Col span={18} >
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px', background: '#fff' }}
                            >
                                <Menu.Item key="1" style={{ color: '#000' }}>SpringBoot</Menu.Item>
                                <Menu.Item key="2" style={{ color: '#000' }}>SpringCloud</Menu.Item>
                                <Menu.Item key="3" style={{ color: '#000' }}>归档</Menu.Item>
                                <Menu.Item key="4" style={{ color: '#000' }}>关于</Menu.Item>
                                <Menu.Item key="5" style={{ color: '#000' }}>论坛</Menu.Item>
                            </Menu>
                        </Col>
                    </Row>

                </Header>
                <Layout style={{ marginTop: 80 }}>
                    <Sider width={256} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#0a000000', textAlign: "center" }}>
                        <InfoCard></InfoCard>
                    </Sider>
                    <Layout style={{ marginLeft: 256 }}>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <ContentList></ContentList>
                        </Content>

                    </Layout>
                    <Sider width={310} style={{ minHeight: '100vh', background: '#0a000000', textAlign: "center" }}>
                        <LatestArticles></LatestArticles>
                        <TagCard></TagCard>
                    </Sider>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>Ant Design 2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}

export default BasicLayout