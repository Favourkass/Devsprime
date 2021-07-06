import React from 'react';
import { connect } from 'react-redux';
import { sendOtp } from '../redux/actions/verifyotp.action';
import VerifyToken from '../components/VerifyOtp';

function VerifyOtpPage(props) {
    const query = new URLSearchParams(props.location.search);
    console.log(query)
    const otp = query.get('otp');
    const email = query.get('email')
    
    return (
        <VerifyToken
            otp={otp}
            email={email}
            sendOtp={props.sendOtp}
            confirmOtp={props.confirmOtp}
        />
    )
}
const mapStateToProps = (store) => ({
    confirmOtp: store.verifyOtp.confirmOtp,
})
export default connect(mapStateToProps, { sendOtp })(VerifyOtpPage);
