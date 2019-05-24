// base
import React, { Component } from 'react';
import {Layout} from "../../components";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

// import GridLayout from "react-grid-layout";
import '../../Style/example-styles.css';

import '../../Style/styles.css';

const ReactGridLayout = WidthProvider(RGL);

class Game extends Component {
    static defaultProps = {
        isDraggable: true,
        isResizable: true,
        items: 20,
        rowHeight: 30,
        onLayoutChange: function() {},
        cols: 12
    };

    generateDOM() {
        // Generate items with properties from the layout, rather than pass the layout directly
        const layout = this.generateLayout();
        return _.map(layout, function(l) {
            const mins = [l.minW, l.minH],
                maxes = [l.maxW, l.maxH];
            return (
                    <div key={l.i} data-grid={l}>
                        <span className="text">{l.i}</span>
                        <div className="minMax">{"min:" + mins + " - max:" + maxes}</div>
                    </div>
            );
        });
    }

    generateLayout() {
        const p = this.props;
        return _.map(new Array(p.items), function(item, i) {
            const minW = _.random(1, 6),
                minH = _.random(1, 6);
            const maxW = _.random(minW, 6),
                maxH = _.random(minH, 6);
            const w = _.random(minW, maxW);
            const y = _.random(minH, maxH);
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6) * y,
                w,
                h: y,
                i: i.toString(),
                minW,
                maxW,
                minH,
                maxH
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (

            <Layout naeyoung="위젯 기본적인것 크기조절, min, max">
                <ReactGridLayout onLayoutChange={this.onLayoutChange} {...this.props}>
                    {this.generateDOM()}
                </ReactGridLayout>
            </Layout>
        )
    }

}

export default Game