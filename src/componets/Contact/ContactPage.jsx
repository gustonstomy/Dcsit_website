import React from 'react'
import ContactHeader from './ContactHeader'
import Contact from './Contact'
import LeaveMessageForm from './LeaveAMessage'

export default function ContactPage() {
  return (
    <>
      <ContactHeader/>
        <Contact/>
        <LeaveMessageForm/>
    </>
  )
}
