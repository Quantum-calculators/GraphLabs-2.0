import React, {Component, ReactNode, SyntheticEvent} from 'react';
import {ListGroup, ListGroupItem, Table} from 'reactstrap';


interface Props1<T> {
    text1: string;
    text2: string;
    onRowClick?: (id: number) => void;
}

/*
export default class BaseListRow extends React.Component {
    render() {
        return (
            <ListGroupItem></ListGroupItem>
    );
    }
}*/

class BaseRow<T extends { id: number }> extends Component<Props1<T>> {
    public static defaulProps = {
        rows: [],
        onRowClick: () => {
            // tslint:disable
        },
    };
    constructor(props: Props1<T>) {
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        //this.onHeaderClick = this.onHeaderClick.bind(this);
    }
    public render() {
        return (
            <div style={{}}>{this.props.text1}</div>

        );
    }





    private onRowClick(id: number) {
        return (e: SyntheticEvent<HTMLTableRowElement>) => {
            this.props.onRowClick && this.props.onRowClick(id);
        }
    }

    /*
    private onHeaderClick(name: string) {
        return () => {
            this.props.onHeaderClick && this.props.onHeaderClick(name);
        }
    }
    */
}

export default BaseRow;