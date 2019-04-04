import React, { Component } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';

class CardsView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            view: false
        }
        this.handleCardsView = this.handleCardsView.bind(this);
    }

    handleCardsView(evt) {
        try{
        evt.preventDefault();
        this.setState({ view: !this.state.view });
        this.props.appPropstoCardsView();
        }catch(err){
            console.log("error in handle card view");
        }
    }

    render() {
        return (
            this.state.view ?
                <div>
                    <IconButton id="cardViewIcon">
                        <Tooltip title="List View" onClick={this.handleCardsView}>
                            <img src={require('../assests/images/view-agenda.svg')} alt="grid icon" />
                        </Tooltip>
                    </IconButton>
                </div>
                :
            <div>
                    <IconButton id="cardViewIcon">
                        <Tooltip title="Grid View" onClick={this.handleCardsView}>
                            <img src={require('../assests/images/view-grid.svg')} alt="grid icon" />
                        </Tooltip>
                    </IconButton>
                </div>
        )

    }
}
export default CardsView