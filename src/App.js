import React from 'react';
import 'antd/dist/antd.css';
import {Divider, Layout} from "antd";
import {Ex1} from "./Ex1";
import {Ex2} from "./Ex2";
import {Ex3_class, Ex3_func} from "./Ex3";
import {Ex5} from "./Ex5";
import {Ex6} from "./Ex6";
import {Ex7} from "./Ex7";
import {Ex8} from "./Ex8";
import {Ex9} from "./Ex9";
import {Ex10} from "./Ex10";

function App() {
    return (
        <Layout>
            <Divider plain>Первое упражнение</Divider>
            <Ex1/>
            <Divider plain>Второе упражнение</Divider>
            <Ex2/>
            <Divider plain>Третье упражнение</Divider>
            <Ex3_class/>
            <Ex3_func/>
            <Divider plain>Пятое упражнение</Divider>
            <Ex5/>
            <Divider plain>Шестое упражнение</Divider>
            <Ex6/>
            <Divider plain>Седьмое упражнение</Divider>
            <Ex7/>
            <Divider plain>Восьмое упражнение</Divider>
            <Ex8/>
            <Divider plain>Девятое упражнение</Divider>
            <Ex9/>
            <Divider plain>Десятое упражнение</Divider>
            <Ex10/>
        </Layout>
    );
}

export default App;
