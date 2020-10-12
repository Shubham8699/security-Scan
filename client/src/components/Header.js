import React from 'react';
import styled, { css } from 'styled-components'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';

class Header extends React.Component {

    onBackClick = () => {
        this.props.history.goBack()
    }

    onHelpCLick = () => {
        // this.props.dispatch(push('/m/p/a/contact'))
        //this.props.dispatch(push('/m/p/a/helpPage'))
    }

    render() {

        return (
            <RowHeader>
                
                    <div>Nanoheal
                        
                    </div>
                    <div>
                        <img  alt='Security Scan' />
                    </div>
                    <div>
                        {/* <img onClick={this.onHelpCLick} style={{height:35, width:35}} src='/media/call_icon.png' alt='logout btn' /> */}
                        <InfoTwoToneIcon onClick={this.onHelpCLick} 
                        // fontSize="large" style={{color: "#abadac", cursor: "pointer"}}
                        />
                    </div>
                
            </RowHeader>
        )
    }
}

export default Header

const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  padding-left: 10px;
  background-color: #F5F5F5;
`;