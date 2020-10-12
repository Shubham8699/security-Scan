import React from 'react'
import { Label } from 'semantic-ui-react'
import ColumnHeader from './ColumnHeader'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'

class FinalPage extends React.Component{

    state={scan:null}

    componentDidMount(){
        fetch('http://localhost:8080/scan/'+this.props.id)
        .then(response => response.json())
        .then((response) => {
            this.setState({ scan: response });
        }
    )}

    renderScan = () => {
        console.log(this.state.scan)
        
        if(this.state.scan){
        let {findings} = this.state.scan
        return(
            <>
               <TableCell><Label>{findings.ruleId}</Label></TableCell> 
               <TableCell><Label>{findings.metadata.description}</Label></TableCell> 
               <TableCell><Label>{findings.metadata.severity}</Label></TableCell> 
               <TableCell><Label>{findings.location.positions.begin.line}</Label></TableCell> 
            </>
        )
        }
    }


    render(){
        let cols=['RuleId','Description','Severity','Path name']
        
        return(<div>
            <Table>
                <TableHead><ColumnHeader colConfig={cols}/></TableHead>
                <TableBody>
                    <TableRow>{this.renderScan()}</TableRow>
                </TableBody>
            </Table>
            
        </div>
        );
    }
}

export default FinalPage