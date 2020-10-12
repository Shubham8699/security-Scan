import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import { Label } from 'semantic-ui-react'
import { Button } from '@material-ui/core';

class DetailTable extends React.Component {

    state = { id: null }


    getFormattedTime = (time) => {

        let t = new Date(time)

        let hr = ("0" + t.getHours()).slice(-2);
        let min = ("0" + t.getMinutes()).slice(-2);
        let sec = ("0" + t.getSeconds()).slice(-2);

        return (t.getFullYear() + "-" + t.getMonth() + 1 + "-" + t.getDate() + " " + hr + ":" + min + ":" + sec)
    }

    showData = (id) => {
        this.setState({ id: id })
    }

    handleClick = (id) => {
        this.props.onRepoClick(id)
        // this.setState({id:id})
    }



    renderData(data) {

        let t = ''
        if (data['data'].status === "finished") {
            t = data["data"].finishedAt;
        } else if (data['data'].status === "in_progress") {
            t = data["data"].scannedAt
        } else
            t = data["data"].queuedAt
        let time = this.getFormattedTime(t);


        return (<React.Fragment >
            <TableCell  >
                {data["data"].repositoryName}
            </TableCell>
            <TableCell>
                {data["data"].status}
            </TableCell>
            <TableCell>
            <Button>   <Label onClick={() => { this.handleClick(data["data"].id) }}> {data["data"].findings.type} </Label></Button> 
            </TableCell>
            <TableCell>
                {time}
            </TableCell>
        </React.Fragment>

        )

    }

    render() {

        return (
            <>
                {this.renderData(this.props)}
            </>
        );
    }
}



export default DetailTable