import {generateData} from "../../components/etc/data";

import DataGrid, { Scrolling, Sorting, LoadPanel } from 'devextreme-react/data-grid';
// base
import React, { Component } from 'react';
import {Layout} from "../../components";

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';

const dataSource = generateData(2000);

class Tests extends Component {


    render() {
        return(
            <Layout naeyoung="무한 스크롤">
                <div>
                    <React.Fragment>
                        <DataGrid
                            elementAttr ={{
                                id: 'gridContainer'
                            }}
                            dataSource={dataSource}
                            // showBorders={false}
                            // showColumnLines={true}
                            // showRowLines={true}
                            // showBorders={true}
                            customizeColumns={customizeColumns}
                        >
                            <Sorting mode={'none'} />
                            <Scrolling mode={'infinite'} showScrollbar={false} />
                            <LoadPanel enabled={false} />
                        </DataGrid>
                    </React.Fragment>
                </div>
            </Layout>
        )
    }
}

function customizeColumns(columns) {
    columns[0].width = 70;
}
export default Tests