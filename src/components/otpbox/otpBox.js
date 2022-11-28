import React, { useState } from "react";
import './otpBox.css'

const OtpBox = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

       
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            
            <div className="row">
            <label  htmlFor="otp">
                   OTP
                 </label>
                <div className="otpContainer">
                    
                    
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                id="otp"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                   
                    
                </div>
            </div>
        </>
    );
};

export default OtpBox;