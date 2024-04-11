import GooglePayButton from '@google-pay/button-react'
import {useSelector} from 'react-redux'


function GooglePayMenttButton() {

    const totalPrice = useSelector(state => state.cart.totalPrice);

    return (
      <div className="w-full" >
        <GooglePayButton
        className="rounded-md px-6 py-3 w-full  md:ml-[19rem] text-sm font-semibold  text-white "
        
          environment="TEST"
        
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: totalPrice.toString(),
              currencyCode: "INR",
              countryCode: "IN",
            },
            shippingAddressRequired: true,
            callbackIntents: ["PAYMENT_AUTHORIZATION"],
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log(paymentRequest);
          }}
          onPaymentAuthorized={paymentData =>{
            console.log('paymentData ' + paymentData);
            return { transactionState: 'SUCCESS'}
          }}
          existingPaymentMethodRequired='false'
          buttonColor="black"
          buttonType="buy"
        ></GooglePayButton>
      </div>
    );
  }

  export default GooglePayMenttButton;