import React, { Component } from 'react';
import { Timeline, Icon, Card, Row, Col } from 'antd';
import ContentListStyle from '../css/ContentList.less';
import MyIcon from '../../components/MyIcon';
import { connect } from 'dva';

const namespace = "articles";

const mapStateToProps = (state) => {
    const articles = state[namespace].articles;
    return {
        articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: (tag, urltype) => {
            dispatch({
                type: `${namespace}/allArticles`,
                payload: tag,
                urlType: urltype,
            })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ContentList extends Component {

    componentDidMount() {
        this.props.onDidMount();
        this.props.onRef(this);
    }

    filterArticles(tag, type) {
        this.props.onDidMount(tag, type);
    }

    handleFilter(tag) {
        this.filterArticles(tag, 'tags')
    }

    handleFilterByClass(titel) {
        this.filterArticles(titel, 'title')
    }

    handleFilterByDate(date) {
        this.filterArticles(date, 'date')
    }

    render() {
        return (
            <Timeline className={ContentListStyle['timeline-item-head']}>
                <Timeline.Item dot={<MyIcon type="icon-biaoqian" style={{ fontSize: 32, background: '#0a000000' }} />} >#JAVA</Timeline.Item>
                {

                    this.props.articles.map(article => {
                        return (
                            <Timeline.Item dot={<MyIcon type="icon-dian" style={{ fontSize: 16, background: '#0a000000' }} />} key={article.id}>
                                <Card title={article.title} bordered={false} style={{ width: 900 }} >

                                    <Row >
                                        <Col span={4} >
                                            <Icon type="calendar" theme="filled" /><a href="#" onClick={this.handleFilterByDate.bind(this, article.create_date)}>{article.create_date}</a>
                                        </Col>
                                        <Col span={4}>
                                            <Icon type="folder" theme="filled" /><a href="#" onClick={this.handleFilterByClass.bind(this, article.classification)}>{article.classification}</a>
                                        </Col>
                                        <Col span={16}>
                                            <Icon type="tags" theme="filled" />
                                            {
                                                article.tags.array.map((tag, index) => {
                                                    return (
                                                        <a herf="#" onClick={this.handleFilter.bind(this, tag)} style={{ marginRight: 5 }} key={index}>#{tag}</a>
                                                    );
                                                })
                                            }
                                        </Col>
                                    </Row>

                                </Card>
                            </Timeline.Item>
                        );
                    })
                }
            </Timeline>
        );
    }
}
