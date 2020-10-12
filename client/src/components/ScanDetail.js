import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow';
import ColumnHeader from './ColumnHeader'
import DetailTable from './DetailTable'
import FinalPage from './FinalPage';

class ScanDetail extends React.Component {

    state = { repos: null, id: null }

    componentDidMount() {
        fetch('http://localhost:8080/scans')
            .then(response => response.json())
            .then((response) => {
                this.setState({ repos: response });
            }
            )
    }

    showDetailPage = () => {
        console.log(this.state.id)
        return (
            <FinalPage id={this.state.id}></FinalPage>
        )
    }

    getHeaders = () => {
        let columns = this.state.repos;
        return (<ColumnHeader headerValues={columns} />);
    };

    handleOnClick = (id) => {
        console.log(id)
        this.setState({ id: id })
    }

    getTableData = (data) => {
        if (data) {
            return data.map((scan) => {
                return <TableRow > <DetailTable
                    data={scan}
                    onRepoClick={this.handleOnClick}
                />
                </TableRow>
            })
        }
    };

    showScanDetails = () => {
        return (
            <Table >
                <TableHead align="center"> {this.getHeaders()} </TableHead>
                <TableBody>{this.getTableData(this.state.repos)} </TableBody>
            </Table>
        )
    }


    render() {
        return (
            <div>
                {this.state.id ? this.showDetailPage() : this.showScanDetails()}
            </div>
        );
    }
}

export default ScanDetail
