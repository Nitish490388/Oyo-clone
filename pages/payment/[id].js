import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import axios from "axios";



const SinglePayment = () => {

    const router = useRouter();
    const makePayment = async () => {
        const val = {
            id: router.query?.id,
        };
        const { data } = await axios.post(`/api/razorpay`, val);
        const options = {
            key: process.env.RAZORPAY_KEY,
            name: "Nitish",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Thank You !",
            handler: function (response) { },
            prefill: {
                name: "Nitish",
                email: "jenanitish490@gmail.com",
                contact: 9861792516,
            },
        }

        const paymentObj = new window.Razorpay(options);
        paymentObj.open();
    }

    useEffect(() => {
        makePayment();
    }, []);

    return (
        <>
            <Script src="http://checkout.razorpay.com/v1/checkout.js" />
        </>
    );
};

export default SinglePayment;
