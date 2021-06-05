import React from "react";
import {InputNumber, Layout, Table, Typography} from 'antd';

const {Content} = Layout;


export class Ex6 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            workers: [
                {
                    name: 'Вася',
                    surname: 'Петров',
                    days: 18,
                    perDay: 1800
                },
                {
                    name: 'Сеня',
                    surname: 'Васильев',
                    days: 15,
                    perDay: 1200
                },
                {
                    name: 'Коля',
                    surname: 'Иванов',
                    days: 16,
                    perDay: 1300
                },
                {
                    name: 'Глаша',
                    surname: 'Королева',
                    days: 10,
                    perDay: 3700
                }
            ]
        }
    }

    columns = [
        {
            title: 'Имя',
            key: 'name',
            render: (text, record, index) => <span key={index.toString()}>{`${record.surname} ${record.name}`}</span>,
        },
        {
            title: 'Ставка в день',
            key: 'perDay',
            render: (text, record, index) => <InputNumber min={100} max={10000} value={record.perDay} onChange={(value) => this.handlePerDayChange(index, value)} key={index.toString()}/>
        },
        {
            title: 'Отработано дней',
            key: 'days',
            render: (text, record, index) => <InputNumber min={0} max={31} value={record.days} onChange={(value) => this.handleDaysChange(index, value)} key={index.toString()}/>
        },
        {
            title: 'Всего в месяц',
            key: 'total',
            render: (text, record, index) => <Typography.Text key={index.toString()}>{record.days * record.perDay} руб.</Typography.Text>
        },

    ];

    handlePerDayChange = (index, value) => {
        this.setState((state) => {
            const workers = [...state.workers]
            workers[index].perDay = value
            return ({workers})
        })
    }

    handleDaysChange(index, value) {
        this.setState((state) => {
            const workers = [...state.workers]
            workers[index].days = value
            return ({workers})
        })
    }

    render() {
        return (
            <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
                <Table dataSource={this.state.workers} columns={this.columns} />
                <Typography.Paragraph>Всего надо отдать {this.state.workers.reduce((acc, item) => acc + item.perDay * item.days, 0)} рублей</Typography.Paragraph>
            </Content>
        )
    }


}
