import React from "react";
import {Content} from "antd/es/layout/layout";
import {Typography} from "antd";

const digs =  [3, 7, 18, 5, 6]

export const Ex9 = () => {
    return (
        <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
           <Typography.Paragraph>
               {digs.map((item, index) => <span key={index.toString()}>{item + 3} </span> )}
           </Typography.Paragraph>
        </Content>
    )
}
