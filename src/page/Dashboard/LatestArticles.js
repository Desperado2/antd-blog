import { Card, Row, Col, Icon, Button, Tooltip, Avatar } from 'antd';
import React, { Component } from 'react';
import LatestArticlesStyle from '../css/latestArticles.less';
import { connect } from 'dva';
const { Meta } = Card;

const namespace = 'hotArticles';

const mapStateToProps = (state) => {
    const hotArticles = state[namespace].hotArticles;
    return {
        hotArticles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/getHotArticles`
            })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LatestArticles extends Component {

    componentDidMount() {
        this.props.onDidMount()
    }

    render() {

        return (
            <div>
                <Card className={LatestArticlesStyle['no-padding-card']}
                    title="最新文章"
                    style={{ width: 300, marginTop: 24, marginLeft: 8, padding: 0 }}
                >{
                        this.props.hotArticles.map(article => {
                            return (
                                <Meta className={LatestArticlesStyle['meta-style']}
                                    avatar={<Avatar shape="square" size={80} src={article.image} />}
                                    title={<a href="" >{article.title}</a>}
                                    description={article.description}
                                    key={article.id}
                                />
                            );
                        })
                    }
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" width="220px" style={{ marginBottom: 12 }} />
                    <div>
                        扫码有惊喜哦~~
                    </div>
                </Card>
            </div>
        );
    }
}
