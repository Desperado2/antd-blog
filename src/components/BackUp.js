import React, { Component } from 'react';
import { BackTop, Icon } from 'antd';
import BackTopStyle from '../page/css/backUp.less';


export default class BackUp extends Component {
    render() {
        return (
            <div>
                <BackTop>
                    <div className={BackTopStyle['ant-back-top-inner']}>
                        <Icon type="rocket" theme="filled" />
                    </div>
                </BackTop>

            </div>
        )
    }
}