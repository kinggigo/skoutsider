import {generateData} from "../../components/etc/data";

import DataGrid, { Scrolling, Sorting, LoadPanel } from 'devextreme-react/data-grid';
// base
import React, { Component } from 'react';
import {Layout} from "../../components";

const dataSource = generateData(50);

class Tests extends Component {


    render() {
        return(
            <Layout naeyoung="무한 스크롤">
                <div>
                <DataGrid
                    elementAttr ={{
                        id: 'gridContainer'
                    }}
                    dataSource={dataSource}
                    showBorders={false}
                    customizeColumns={customizeColumns}
                >
                    <Sorting mode={'none'} />
                    <Scrolling mode={'infinite'} showScrollbar={false} />
                    <LoadPanel enabled={false} />
                </DataGrid>
                </div>
            </Layout>
        )
    }
}

function customizeColumns(columns) {
    columns[0].width = 70;
}
export default Tests