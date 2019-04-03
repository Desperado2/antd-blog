import { Card, Row, Col, Icon, Button, Tooltip, Avatar } from 'antd';
import React, { Component } from 'react';
import LatestArticlesStyle from '../css/latestArticles.less';
const { Meta } = Card;

export default class LatestArticles extends Component {


    render() {

        return (
            <div>
                <Card className={LatestArticlesStyle['no-padding-card']}
                    title="最新文章"
                    style={{ width: 300, marginTop: 24, marginLeft: 8, padding: 0 }}
                >
                    <Meta className={LatestArticlesStyle['meta-style']}
                        avatar={<Avatar shape="square" size={80} src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                    <Meta className={LatestArticlesStyle['meta-style']}
                        avatar={<Avatar shape="square" size={80} src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                    <Meta className={LatestArticlesStyle['meta-style']}
                        avatar={<Avatar shape="square" size={80} src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />}
                        title="Card title"
                        description="This is the description"
                    />

                    <img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" width="220px" style={{ marginBottom: 12 }} />
                    <div>
                        扫码有惊喜哦~~
                    </div>
                </Card>
            </div>
        );
    }
}
