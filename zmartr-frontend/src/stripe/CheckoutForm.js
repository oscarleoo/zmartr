import React from 'react';
import { CardElement } from 'react-stripe-elements';

// https://itnext.io/create-stripe-subscription-payments-using-react-aws-lambda-pt-2-building-our-react-frontend-28a6a167f7b9

const style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a',
  },
};

const CheckoutForm = () => (
  <CardElement style={style} />
);

export default CheckoutForm;
