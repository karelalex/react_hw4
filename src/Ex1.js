import React from "react";
import {Layout, Typography, Button} from 'antd';
const {Content } = Layout;

export class Ex1 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            count: 0
        }
    }

    increment = () => this.setState(state => ({count: state.count + 1}));

    decrement = () => this.setState(state => ({count: state.count - 1}))

    reset = () => this.setState({count: 0})

    handleVisButtonClick = () => this.setState((state) => ({visible: !state.visible}))

    render() {
        return(
            <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
                <div>&nbsp;{this.state.visible && <Typography.Text>Я могу спрятаться</Typography.Text>}</div>
                <div><Button type="primary" onClick={this.handleVisButtonClick}>{this.state.visible ? 'Спрятать' : 'Показать'}</Button></div>
                <div><Typography.Text>Счётчик прикольный {this.state.count}</Typography.Text></div>
                <div>
                    <Button type="primary" onClick={this.decrement}>Меньше</Button>
                    <Button type="primary" onClick={this.reset}>Сброс</Button>
                    <Button type="primary" onClick={this.increment}>Больше</Button>
                </div>
            </Content>
        )
    }

}
