import { Card, Row, Col, Icon, Button, Tooltip, Avatar } from 'antd';
import React, { Component } from 'react';
import TagCardStyle from '../css/TagCard.less';


export default class TagCard extends Component {


    render() {

        return (
            <div>
                <Card className={TagCardStyle['no-padding-card']}
                    title="标签云"
                    style={{ width: 300, marginTop: 24, marginLeft: 8, padding: 0 }}
                >
                    <div className={TagCardStyle['widget']}>
                        <a href="/tags/AB-测试/" style={{ fontSize: 10 }}>AB 测试</a>
                        <a href="/tags/AJAX/" style={{ fontSize: 10 }}>AJAX</a>
                        <a href="/tags/Alibaba/" style={{ fontSize: 10.83 }}>Alibaba</a>
                        <a href="/tags/Apache-Shiro/" style={{ fontSize: 10 }}>Apache Shiro</a>
                        <a href="/tags/BIO/" style={{ fontSize: 10 }}>BIO</a>
                        <a href="/tags/Bus/" style={{ fontSize: 10 }}>Bus</a>
                        <a href="/tags/Centos/" style={{ fontSize: 10 }}>Centos</a>
                        <a href="/tags/Config/" style={{ fontSize: 10 }}>Config</a>
                        <a href="/tags/Consul/" style={{ fontSize: 11.67 }}>Consul</a>
                        <a href="/tags/Docker/" style={{ fontSize: 12.5 }}>Docker</a>
                        <a href="/tags/Dubbo/" style={{ fontSize: 10 }}>Dubbo</a>
                        <a href="/tags/Eureka/" style={{ fontSize: 11.67 }}>Eureka</a>
                        <a href="/tags/Exception/" style={{ fontSize: 12.5 }}>Exception</a>
                        <a href="/tags/Feign/" style={{ fontSize: 13.33 }}>Feign</a>
                        <a href="/tags/Finchley/" style={{ fontSize: 12.5 }}>Finchley</a>
                        <a href="/tags/Git/" style={{ fontSize: 10.83 }}>Git</a>
                        <a href="/tags/Guava/" style={{ fontSize: 10 }}>Guava</a>
                        <a href="/tags/Hystrix/" style={{ fontSize: 10.83 }}>Hystrix</a>
                        <a href="/tags/JAVA/" style={{ fontSize: 20 }}>JAVA</a>
                        <a href="/tags/JDBC/" style={{ fontSize: 10 }}>JDBC</a>
                        <a href="/tags/JDK8/" style={{ fontSize: 10.83 }}>JDK8</a>
                        <a href="/tags/JWT/" style={{ fontSize: 10 }}>JWT</a>
                        <a href="/tags/Jenkins2-6/" style={{ fontSize: 10 }}>Jenkins2.6</a>
                        <a href="/tags/Jetty/" style={{ fontSize: 10 }}>Jetty</a>
                        <a href="/tags/Jpa/" style={{ fontSize: 10 }}>Jpa</a>
                        <a href="/tags/Lettuce/" style={{ fontSize: 10.83 }}>Lettuce</a>
                        <a href="/tags/Linux/" style={{ fontSize: 11.67 }}>Linux</a>
                        <a href="/tags/Liquibase/" style={{ fontSize: 10 }}>Liquibase</a>
                        <a href="/tags/Logback/" style={{ fontSize: 10 }}>Logback</a>
                        <a href="/tags/MariaDB10-2/" style={{ fontSize: 10 }}>MariaDB10.2</a>
                        <a href="/tags/Maven/" style={{ fontSize: 10 }}>Maven</a>
                        <a href="/tags/Mybatis/" style={{ fontSize: 10.83 }}>Mybatis</a>
                        <a href="/tags/Mysql/" style={{ fontSize: 14.17 }}>Mysql</a>
                        <a href="/tags/Mysql5-7/" style={{ fontSize: 10 }}>Mysql5.7</a>
                        <a href="/tags/NIO/" style={{ fontSize: 15 }}>NIO</a>
                        <a href="/tags/Nacos/" style={{ fontSize: 10.83 }}>Nacos</a>
                        <a href="/tags/Netflix/" style={{ fontSize: 10.83 }}>Netflix</a>
                        <a href="/tags/Netty/" style={{ fontSize: 15.83 }}>Netty</a>
                        <a href="/tags/Nginx/" style={{ fontSize: 10 }}>Nginx</a>
                        <a href="/tags/Optional/" style={{ fontSize: 10 }}>Optional</a>
                        <a href="/tags/PageHelper/" style={{ fontSize: 10 }}>PageHelper</a>
                        <a href="/tags/RabbitMQ/" style={{ fontSize: 12.5 }}>RabbitMQ</a>
                        <a href="/tags/Redis/" style={{ fontSize: 12.5 }}>Redis</a>
                        <a href="/tags/Ribbon/" style={{ fontSize: 11.67 }}>Ribbon</a>
                        <a href="/tags/Scheduling/" style={{ fontSize: 10 }}>Scheduling</a>
                        <a href="/tags/Sentinel/" style={{ fontSize: 10 }}>Sentinel</a>
                        <a href="/tags/Shell/" style={{ fontSize: 10 }}>Shell</a>
                        <a href="/tags/Spring/" style={{ fontSize: 12.5 }}>Spring</a>
                        <a href="/tags/Spring-Boot/" style={{ fontSize: 18.33 }}>Spring Boot</a>
                        <a href="/tags/Spring-Boot-Admin/" style={{ fontSize: 10 }}>Spring Boot Admin</a>
                        <a href="/tags/Spring-Cache/" style={{ fontSize: 10 }}>Spring Cache</a>
                        <a href="/tags/Spring-Cloud/" style={{ fontSize: 13.33 }}>Spring Cloud</a>
                        <a href="/tags/Spring-Security/" style={{ fontSize: 10 }}>Spring Security</a>
                    </div>
                </Card>
            </div>
        );
    }
}
