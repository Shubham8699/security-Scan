import React from 'react'
import ScanDetail from './ScanDetail'
import DateAndTimePickers from './DateAndTimePickers'
import styled from 'styled-components'

class ScanForm extends React.Component {

  state = {
    queuedAt: null, scannedAt: null,
    finishedAt: null,show:false
  }

  submitScanData = (data) => {
    console.log(data)
    fetch('http://localhost:8080/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    this.setState({show:true})
  }


  handleDateChange = (event) => {
    let value = Math.floor(new Date(event.target.value) / 1000);
    let name = event.target.name
    name === "queuedAt" ? this.setState({ queuedAt: value }) : name === "scannedAt" ? this.setState({ queuedAt: value }) : this.setState({ finishedAt: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var form = document.querySelector('form');
    var formData = new FormData(form);

    let data = {
      "repositoryName": " ", "status": "", "queuedAt": '', "scannedAt": '', "finishedAt": '', "findings":
      {
        "type": "",
        "ruleId": "",
        "location": {
          "path": "",
          "positions": {
            "begin": {
              "line": ''
            }
          }
        },
        "metadata": {
          "description": "",
          "severity": ""
        }
      }
    }


    for (let [key, value] of formData.entries()) {

      if (key === "description") {
        data.findings.metadata[key] = value
      } else if (key === "severity") {
        data.findings.metadata[key] = value
      }
      else if (key === "type") {
        data.findings[key] = value
      }
      else if (key === "ruleId") {
        data.findings[key] = value
      }
      else if (key === "path") {
        data.findings.location[key] = value
      }
      else if (key === "line") {
        data.findings.location.positions.begin[key] = value
      } else if (key == "scannedAt" || key == "queuedAt" || key == "finishedAt") {
        if (this.state[key]) {
          data[key] = this.state[key]
        }
        data[key] = Math.floor(new Date(value) / 1000);

      } else

        data[key] = value

    }
    this.submitScanData(data)
  }

  showForm = () => {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          Enter RepositoryName: <Input type="text" name="repositoryName" placeholder="Enter Repository Name" required /><br />
                Enter Status: <Input type="text" name="status" value={this.state.status} placeholder="Enter Status" required /><br />
                Enter type: <Input type="text" name="type" value={this.state.type} placeholder="Enter type" required /><br />
                Enter ruleId: <Input type="text" name="ruleId" value={this.state.ruleId} placeholder="Enter ruleId" required /><br />
                Enter path: <Input type="text" name="path" value={this.state.path} placeholder="Enter path" required /><br />
                Enter line: <Input type="text" name="line" value={this.state.line} placeholder="Enter line" required /><br />
                Enter description: <Input type="text" name="description" value={this.state.description} placeholder="Enter description" required /><br />
                Enter severity: <Input type="text" name="severity" value={this.state.severity} placeholder="Enter severity" required /><br />
          <DateAndTimePickers label="queuedAt" dateChange={this.handleDateChange} />
          <DateAndTimePickers label="scannedAt" dateChange={this.handleDateChange} />
          <DateAndTimePickers label="finishedAt" dateChange={this.handleDateChange} />

          <div><Button>Send data!</Button></div>
        </form>
      </div>
    )
  }

  showDetail = () => {
    return(
    <ScanDetail/>
    );
  }

  render() {
    return (
      <div>
        {this.state.show?this.showDetail():this.showForm()}
      </div>
    );
  }
}

const Input = styled.input`
     padding: 10px;
     margin:5px
`;

const Button = styled.button`
     padding: 10px;
     margin:5px
`;


export default ScanForm
