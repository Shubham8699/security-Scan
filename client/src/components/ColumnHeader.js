import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { Label } from 'semantic-ui-react'


class ColumnHeader extends React.Component {

    onHeaderClick = (name) => {
        if (this.props.onHeaderClick) {
            this.props.onHeaderClick(name)
        }
    };

        getHeaders = (props) => {
           
        return(
            <>
          <TableCell> <Label>{this.props.colConfig[0]}</Label></TableCell>
          <TableCell> <Label>{this.props.colConfig[1]}</Label></TableCell>
          <TableCell> <Label>{this.props.colConfig[2]}</Label></TableCell>
          <TableCell> <Label>{this.props.colConfig[3]}</Label></TableCell>
           
            </> 
        )
    };

    render() {
        
        return (
            <TableRow>
                {this.getHeaders(this.props)}
            </TableRow>
        );
    }
}


export default ColumnHeader;