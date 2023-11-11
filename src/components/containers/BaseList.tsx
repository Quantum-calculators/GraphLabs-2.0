
import * as React from 'react';
import {Component, FunctionComponent, ReactNode, SyntheticEvent} from 'react';
import {Table} from "reactstrap";

interface Props<T> {
    rows: number[];
    rows_jsx_components: ReactNode[];
    headers: string[];
    onRowClick?: (id: number) => void;
    onHeaderClick?: (name: string) => void;
    sorted?: { asc: boolean; header: string; };
}

class GTable<T extends { id: number }> extends Component<Props<T>> {
    public static defaulProps = {
        rows: [],
        onRowClick: () => {
            // tslint:disable
        },
    };
    constructor(props: Props<T>) {
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.onHeaderClick = this.onHeaderClick.bind(this);
    }
    public render() {
        return (
            <Table>
                <thead>
                <tr>
                    {this.props.headers.map((e: string, index: number) => (
                        <th
                            key={index}
                            onClick={this.onHeaderClick(e)}
                            style={this.props.onHeaderClick && { cursor: 'pointer' }}
                        >
                            {e} {
                            this.props.sorted
                            && (this.props.sorted.header === e)
                            && (this.props.sorted.asc ? '(asc)' : '(desc)')}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {this.props.rows.map((row_id) => {
                    return (
                        <tr key={row_id} onClick={this.onRowClick(row_id)} style={{ cursor: 'pointer' }}>
                            {this.props.rows_jsx_components[row_id]}
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        );
    }
    private onRowClick(id: number) {
        return (e: SyntheticEvent<HTMLTableRowElement>) => {
            this.props.onRowClick && this.props.onRowClick(id);
        }
    }

    private onHeaderClick(name: string) {
        return () => {
            this.props.onHeaderClick && this.props.onHeaderClick(name);
        }
    }
}

export default GTable;

