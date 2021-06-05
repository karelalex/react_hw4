import React from "react";
import {Card, Image, Layout, Progress, Space, Typography} from 'antd';

const {Content} = Layout;

const Samokat = (props) => {
    return (
        <Card title={props.name} style={{borderColor: props.marked ? 'red' : 'green'}} onClick={props.onClick}>
            <Image width={200} src={props.img} />
            <Typography.Paragraph>Цена в минуту {props.price} рублей</Typography.Paragraph>
            <Progress percent={props.charge} />
        </Card>
    )
};

export class Ex5 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            samokats: [
                {
                    marked: false,
                    name: 'Xiaomi Mi Pro',
                    img: 'https://a.radikal.ru/a29/2106/f6/4e1b2bb7ed45.png',
                    charge: 18,
                    price: 7
                },
                {
                    marked: false,
                    name: 'Kugoo G2 Pro',
                    img: 'https://c.radikal.ru/c05/2106/bc/3fab2fa2d43c.png',
                    charge: 100,
                    price: 15
                },
                {
                    marked: false,
                    name: 'Xiaomi Mi Electric Scooter',
                    img: 'https://a.radikal.ru/a12/2106/2a/f6088effcd61.png',
                    charge: 54,
                    price: 9
                },
                {
                    marked: false,
                    name: 'AOVO M365 PRO',
                    img: 'https://a.radikal.ru/a35/2106/79/ca840b1c219f.png',
                    charge: 68,
                    price: 5
                }
            ]
        }
    }

    handleItemClick = (name) => {
        const samokats = [...this.state.samokats]
        const samokat = samokats.find((item) => item.name === name)
        samokat.marked = !samokat.marked
        this.setState({samokats})
    }

    render() {
        return (
            <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
                <Space wrap>
                    {this.state.samokats.map((item) => <Samokat key={item.name} {...item} onClick={() => this.handleItemClick(item.name)}/>)}
                </Space>
            </Content>
        )
    }

}
