import React from 'react';
import { connect } from 'react-redux';



export class AboutUs extends React.Component {


    render() {
        return (
            <div>
                <h1> contact us</h1>
                <h2>First name : <input type="text" /></h2>
                <br />
                <button onClick={this.props.onContactClick}> Submit</button>
            </div>

        )
    };
}

function mapStateToProps(state) {
    const { aboutus } = state.aboutus;
    return {
        aboutus
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            onContactClick: () => {
                dispatch(
                    type, 'ABOUT_US_SUBMIT',
                    payload , 'changed'
                )
            }
        }
    }


}
