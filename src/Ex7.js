import React from "react";
import {Layout, Typography} from 'antd';

const {Content } = Layout;

export class Ex7 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Иван',
            show: true
        }
    }

    render() {
        const {name, show} = this.state
        return(
            <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
               <Typography.Paragraph>{`${show ? 'Привет' : 'Пока'} ${name}`}</Typography.Paragraph>
            </Content>
        )
    }

}
