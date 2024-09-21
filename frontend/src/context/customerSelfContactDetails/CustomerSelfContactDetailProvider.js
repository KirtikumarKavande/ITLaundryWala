import React from 'react'
import CustomerSelfContactDetails from './customerSelfContactDetails'
import * as Yup from 'yup';
import DOMPurify from 'dompurify';
import { toast } from 'react-hot-toast';

const CustomerSelfContactDetailProvider = ({ children }) => {
    const validationSchema = Yup.object().shape({
        address: Yup.string().required('Address is required').max(100, 'Address is too long'),
        mobileNumber: Yup.string()
            .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
            .min(10, 'Mobile number must be at least 10 digits')
            .required('Mobile number is required'),
        name: Yup.string().required('Name is required').max(50, 'Name is too long'),
        pickupDate: Yup.string().required('Pickup Date is required'),
        pickupTime: Yup.string().required('Pickup Time is required'),
    });
    function customerDetailPicker(data) {
        const sanitizedData = {
            address: DOMPurify.sanitize(data.address),
            mobileNumber: DOMPurify.sanitize(data.mobileNumber),
            name: DOMPurify.sanitize(data.name),
            pickupDate: DOMPurify.sanitize(data.pickupDate),
            pickupTime: DOMPurify.sanitize(data.pickupTime),
        };

        // Validate the sanitized data
        validationSchema
            .validate(sanitizedData, { abortEarly: false })
            .then((validatedData) => {
                console.log('Data is valid:', validatedData);
                // Proceed with further processing
            })
            .catch((validationErrors) => {
                validationErrors.inner.forEach((error) => {
                    // Display error message using React Hot Toast
                    toast.error(error.message);
                });
            });

    }

    const customerSelfDetails = {
        customerDetailPicker: customerDetailPicker
    }

    return (
        <CustomerSelfContactDetails.Provider value={customerSelfDetails}>
            {children}
        </CustomerSelfContactDetails.Provider>
    )
}

export default CustomerSelfContactDetailProvider