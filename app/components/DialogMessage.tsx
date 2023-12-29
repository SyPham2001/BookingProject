import Script from 'next/script'
import React from 'react'

const DialogflowMessenger: React.FC = () => {
  return (
    <>
      <Script src='https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'></Script>
      <df-messenger
        chat-title='VietBookingApp'
        agent-id='9c41be2e-0c27-4272-a910-9c60231406cf'
        language-code='en'
      ></df-messenger>
    </>
  )
}

export default DialogflowMessenger
