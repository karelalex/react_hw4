import React from "react";
import {Layout, Typography} from 'antd';

const {Content} = Layout;

export class Ex10 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            field: [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ],
            currentTurn: 'X',
            result: ''
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {field, result} = this.state;
        if(result) {
            setTimeout(() => this.setState( {
                field: [
                    [' ', ' ', ' '],
                    [' ', ' ', ' '],
                    [' ', ' ', ' ']
                ],
                currentTurn: 'X',
                result: ''
            }), 2000);
            return;
        }
        for (let i = 0; i < 3; i++) {
            const first = field[i][0]
            if (first === ' ') continue
            if (field[i][1] === first && field[i][2] === first) {
                this.setState({result: `Победа ${first === 'X' ? 'крестиков' : 'ноликов'}`})
                return
            }
        }
        for (let i = 0; i < 3; i++) {
            const first = field[0][i]
            if (first === ' ') continue
            if (field[1][i] === first && field[2][i] === first) {
                this.setState({result: `Победа ${first === 'X' ? 'крестиков' : 'ноликов'}`})
                return
            }
        }
        const center = field[1][1]
        if (center !== ' ' &&
            ((field[0][0] === center && field[2][2] === center) || ((field[2][0] === center && field[0][2] === center))
            )){
            this.setState({result: `Победа ${center === 'X' ? 'крестиков' : 'ноликов'}`})
            return
        }
        let freeCount = 0
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (field[i][j] === ' ') {
                    freeCount ++
                }
            }
        }
        if (!freeCount){
            this.setState({result: 'Ничья'})
            return
        }
            }

    handleClick = (row, col) => {
        this.setState((state) => {
            const {field, currentTurn} = state;
            if (field[row][col] !== ' ') return {}
            field[row][col] = currentTurn
            return {
                field,
                currentTurn: currentTurn === 'X' ? 'O' : 'X'
            }
        })
    }

    render() {
        return (
            <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
                <table border>
                    {this.state.field.map((row, rowIndex) => (
                        <tr>
                            {row.map((col, colIndex) => (
                                <td>
                                    <div
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            borderStyle: 'solid',
                                            borderColor: 'red',
                                            textAlign: 'center'
                                        }}
                                        onClick={() => this.handleClick(rowIndex, colIndex)}
                                    >
                                        {col}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </table>
                <Typography.Paragraph>{this.state.result}</Typography.Paragraph>
            </Content>
        )
    }

}
