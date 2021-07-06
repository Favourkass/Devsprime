import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { VWrapper, Overlay, Content, Checking, ParentDiv, ChildVid } from "./style";


function VerifyOtp({ email, otp, confirmOtp, sendOtp }) {
    const [loadingStatus, setloadingStatus] = useState(false);
    const overlaySwitcher = () => {
        const overlay = document.getElementById('is-open');
        if (overlay) {
            overlay.style.display = 'flex';
        };
        if (otp && email && !confirmOtp) {
            const payload = {
                otp: otp,
                email: email
            };
            sendOtp(payload);
            setloadingStatus(true);
        }
        else {
            // setloadingStatus(false);
        }
    };

    useEffect(overlaySwitcher, [otp, email, confirmOtp, sendOtp])

    return (
        <VWrapper>
            <ToastContainer />
            <Overlay id="is-open" style={{ display: 'block' }}>
                <Content>
                    <Checking id="checker">
                        <ParentDiv id="msg">
                            <ChildVid>
                                Verifying...
                            <ClipLoader color="#eee" loading={loadingStatus} />
                            </ChildVid>
                        </ParentDiv>
                    </Checking>
                </Content>

            </Overlay>
        </VWrapper >
    )
}

export default VerifyOtp;
