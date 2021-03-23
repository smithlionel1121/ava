import React from "react";
import { withRouter } from "react-router";
import "./ContactForm.css";

function SentForm(props) {
  if (!props.location.state?.apiResponse?.Status) {
    return (
      <div className="errors-res">
        {props.location.state?.apiResponse?.Errors?.map(err => (
          <div className="text-left">{`${err.FieldName} - ${err.messageCode}`}</div>
        ))}
      </div>
    );
  }
  return (
    <div className="success-res">
      <span>
        <b>Your message has been sent</b>
      </span>
      <br />
      <span>We will be in contact with you within 24 hours.</span>
    </div>
  );
}

export default withRouter(SentForm);
