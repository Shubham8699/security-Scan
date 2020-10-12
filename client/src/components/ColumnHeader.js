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
            console.log(this.props)
        return(
            <>
          <TableCell> <Label>Repository</Label></TableCell>
          <TableCell> <Label>Status</Label></TableCell>
          <TableCell> <Label>Findings</Label></TableCell>
          <TableCell> <Label>Repository</Label></TableCell>
           {/* <Label>Status</Label>
           <Label>Findings</Label>
            <Label>time</Label>*/}
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