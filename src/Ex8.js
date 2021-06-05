import React from "react";
import {Content} from "antd/es/layout/layout";

const langs =  ['html', 'css', 'js', 'php']

export const Ex8 = () => {
    return (
        <Content style={{paddingLeft: '50px', paddingRight: '50px'}}>
           <ul>
               {langs.map((item) => <li key={item}>{item}</li>)}
           </ul>
        </Content>
    )
}
