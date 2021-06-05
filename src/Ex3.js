import React, {useState} from 'react';
import {Button, Input, Layout, List} from 'antd';

const {Content} = Layout;
const {TextArea} = Input;

export class Ex3_class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            text: ''
        }
    }

    handleAddTopic = () => {
        if (this.state.text) {
            this.setState((state) => ({
                comments: [state.text, ...state.comments],
                text: ''
            }))
        }
    }

    handleTextChange = (e) => {
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
                <div><TextArea value={this.state.text} onChange={this.handleTextChange} size="small"/></div>
                <div><Button type="primary" onClick={this.handleAddTopic}>Добавить</Button></div>
                <div>
                    <List
                        size="small"
                        header={<div>Посты</div>}
                        bordered
                        dataSource={this.state.comments}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </div>
            </Content>
        )
    }

}

export const Ex3_func = () => {

    const [comments, setComments] = useState([])
    const [text, setText] = useState('')

    const handleAddTopic = () => {
        if (text) {

            setComments([text, ...comments])
            setText('')

        }
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
            <div><TextArea value={text} onChange={handleTextChange} size="small"/></div>
            <div><Button type="primary" onClick={handleAddTopic}>Добавить</Button></div>
            <div>
                <List
                    size="small"
                    header={<div>Посты</div>}
                    bordered
                    dataSource={comments}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        </Content>
    )
}
