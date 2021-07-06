import { POST_OTP } from "../types";
import request from "../../../request";
import { retrieveErrMessage } from "../../../utils/helper";
import { toast } from "react-toastify";


const handleOtpSuccess = (res) => {
    if (res && res.data && res.data.message === 'success') {
        const msg = document.getElementById('msg');
        function confirm() {
            toast.success('Email Verified');
            if (msg) {
                msg.innerHTML =
                    (`<div>
                    <img height='100' width='100' 
                    src='https://res.cloudinary.com/devsprime/image/upload/v1625523056/Icons%20and%20Logo/success-green-check-mark_x6gd1u.png'/>
                    <p style="color: white;">Email Confirmed!<br/><small>Redirecting...</small></p>
                    </div>`);
            }

        }
        setInterval(() => {
            confirm();
        }, 2000);
        setInterval(() => {
            window.location = '/login';
        },3900);
    };
}

const handleOtpFailed = (error) => {
    const err = retrieveErrMessage(error);
    if (err && err.message === 'failure') {
        const checker = document.getElementById('checker')
        if (checker) {
            toast.error('Email Confirmation Failed!')
            checker.innerHTML =
                (`<div>
            <img height='100' width='100' 
            src='https://res.cloudinary.com/devsprime/image/upload/v1625556554/Icons%20and%20Logo/error-removebg-preview_imv0pl.png'/>
            <p style="color: white;">Error: <br/>Email Confirmation Failed!</p>
            </div>`);
        }
    }

}

export const sendOtp = (payload) => (dispatch) => {
    request.post('/otps/verify/', payload)
        .then(res => {
            handleOtpSuccess(res)
            dispatch({
                type: POST_OTP,
                payload: res.data,
            });
        })
        .catch(error => {
            handleOtpFailed(error);
        });
};
