import { Card, Row, Col, Icon, Button, Tooltip, Avatar } from 'antd';
import React, { Component } from 'react';
import TagCardStyle from '../css/TagCard.less';
import { connect } from 'dva';

const namespace = 'tags';

const mapStateToProps = (state) => {
    const tags = state[namespace].tags;
    return {
        tags
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/getTags`
            })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class TagCard extends Component {

    componentDidMount() {
        this.props.onDidMount();
    }

    handleFilter(tag) {
        this.props.onTagFilter(tag);
    }

    render() {

        return (
            <div>
                <Card className={TagCardStyle['no-padding-card']}
                    title="标签云"
                    style={{ width: 300, marginTop: 24, marginLeft: 8, padding: 0 }}
                >
                    <div className={TagCardStyle['widget']}>
                        {
                            this.props.tags.map(tag => {
                                return (
                                    <a href="#" onClick={this.handleFilter.bind(this, tag.tag)} style={{ fontSize: (10 * tag.number) / 50 }} key={tag.tag}>{tag.tag}</a>
                                );
                            })
                        }
                    </div>
                </Card>
            </div>
        );
    }
}
