import React, { Fragment, useState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { Route } from "react-router";
import ContactForm from "./ContactForm";
import SentForm from "./SentForm";

export default function ContactUs() {
  return (
    <div className="container">
      <div className=" contact-form-split contact-form-left-only">
        <div className="contact-form-split-left contact-form-container">
          <h3>Contact Form</h3>
          <p>
            <b>
              Ut sem lacus, dapibus sit amet justo et, consectetur facilisis
              leo.
            </b>
          </p>
          <Route exact path="/contact/" component={ContactForm} />
          <Route path="/contact/sent" component={SentForm} />
        </div>
        <div className="contact-form-split-right logo-bg" />
      </div>
    </div>
  );
}
