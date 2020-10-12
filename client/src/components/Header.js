import React from 'react';
import styled from 'styled-components'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';

class Header extends React.Component {

    onBackClick = () => {
        this.props.history.goBack()
    }

    onHelpCLick = () => {
        
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
                        
                        <InfoTwoToneIcon onClick={this.onHelpCLick} 
                        
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