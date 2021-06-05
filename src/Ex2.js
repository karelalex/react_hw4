import React, {useState} from "react";
import {Button, Typography} from "antd";
import {Content} from "antd/es/layout/layout";

export const Ex2 = () => {
    const [count, setCount] = useState(0)
    const [textVisible, setTextVisibility] = useState(false)

    const handleClick = () => setCount(count + 1)
    return (
        <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
            <div>
                <Button
                    type="primary"
                    onClick={handleClick}
                    onMouseEnter={() => setTextVisibility(true)}
                    onMouseLeave={() => setTextVisibility(false)}
                >
                    Меня нажали {count} раз
                </Button>
                {textVisible && <Typography.Text>Мышь вошла</Typography.Text>}
            </div>
        </Content>
    )
}
