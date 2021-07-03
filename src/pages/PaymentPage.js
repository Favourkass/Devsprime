import React from 'react';
import PaymentComponets from '../components/payment';

function PaymentPage(props) {
    return (
        <>
            <PaymentComponets
                course_id={props.match.params.course_id}
            />
        </>
    )
}

export default PaymentPage;
