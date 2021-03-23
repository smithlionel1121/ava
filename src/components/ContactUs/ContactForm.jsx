import React, { Fragment, useState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";

export default function ContactForm() {
  const [addAdress, setAddAdress] = useState(false);
  const [apiResponse, SetApiResponse] = useState();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = formData => {
    const {
      FullName,
      EmailAddress,
      Message,
      AddressLine1,
      AddressLine2,
      CityTown,
      StateCounty,
      Postcode,
      Country,
      ...rest
    } = formData;

    const numbersArr = Object.values(rest);
    const PhoneNumbers = numbersArr.filter(function (id) {
      return rest[id];
    });
    const AddressDetails = {
      AddressLine1,
      AddressLine2,
      CityTown,
      StateCounty,
      Postcode,
      Country,
    };

    const data = {
      FullName,
      EmailAddress,
      Message,
      PhoneNumbers,
      AddressDetails,
    };
    data.bIncludeAddressDetails = addAdress;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
      requestOptions
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        SetApiResponse(data);
        setMessageSent(true);
      });
  };

  const [numberInputs, setNumberInputs] = useState(1);

  const addNumberInput = () => {
    if (numberInputs < 2) {
      setNumberInputs(c => c + 1);
    }
  };

  const [messageSent, setMessageSent] = useState(false);

  return (
    <Fragment>
      {messageSent ? (
        <Redirect
          push
          to={{ pathname: "/contact/sent", state: { apiResponse } }}
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form-form">
          <div className="contact-form-split">
            <div className="contact-form-split-left">
              <label htmlFor="FullName">Full Name</label>

              <input
                className="contact-text"
                type="text"
                name="FullName"
                ref={register({ required: true, maxLength: 80 })}
              />
            </div>
            <div className="contact-form-split-right">
              <label htmlFor="email">Email</label>
              <input
                className="contact-text"
                type="email"
                name="EmailAddress"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
            </div>
          </div>

          <br />
          {Array.from(Array(numberInputs)).map((x, idx) => (
            <Fragment key={`input${idx + 1}`}>
              <label htmlFor={`PhoneNumber${x}`}>Phone number {idx + 1} </label>
              <div>
                <input
                  className="contact-text"
                  type="tel"
                  name={`PhoneNumber${idx + 1}`}
                  ref={register({ maxLength: 12 })}
                />
              </div>
            </Fragment>
          ))}
          <button className="lighter-long" onClick={addNumberInput}>
            <b>Add new phone number</b>
          </button>
          <br />
          <label htmlFor="message">Message</label>
          <br />

          <textarea
            className="contact-textarea"
            name="Message"
            ref={register({ required: true, max: 500 })}
          />

          <br />
          <input
            type="checkbox"
            placeholder="bIncludeAddressDetails"
            name="bIncludeAddressDetails"
            ref={register}
            checked={addAdress}
            onClick={() => setAddAdress(!addAdress)}
            readOnly
          />
          <label htmlFor="bIncludeAddressDetails">Add address</label>

          <br />
          {!!addAdress && (
            <div>
              <div className="contact-form-split">
                <div className="contact-form-split-left">
                  <label htmlFor="AddressLine1">Address Line 1</label>
                  <input
                    className="contact-text"
                    type="text"
                    name="AddressLine1"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="contact-form-split-right">
                  <label htmlFor="AddressLine2">Address Line 2</label>
                  <input
                    className="contact-text"
                    type="text"
                    name="AddressLine2"
                    ref={register({ required: true })}
                  />
                </div>
                <br />
              </div>
              <div className="contact-form-split">
                <div className="contact-form-split-left contact-form-split">
                  <div className="contact-form-split-left">
                    <label htmlFor="CityTown">City/Town</label>

                    <input
                      className="contact-text"
                      type="text"
                      name="CityTown"
                      ref={register}
                    />
                  </div>
                  <div className="contact-form-split-right">
                    <label htmlFor="StateCounty">State/County</label>

                    <input
                      className="contact-text"
                      type="text"
                      name="StateCounty"
                      ref={register}
                    />
                  </div>
                  <br />
                </div>
                <div className="contact-form-split-right contact-form-split">
                  <div className="contact-form-split-left">
                    <label htmlFor="Postcode">Postcode</label>

                    <input
                      className="contact-text"
                      type="text"
                      name="Postcode"
                      ref={register}
                    />
                  </div>
                  <div className="contact-form-split-right">
                    <label htmlFor="Country">Country</label>

                    <input
                      className="contact-text"
                      type="text"
                      name="Country"
                      ref={register}
                    />
                  </div>
                  <br />
                </div>
                <br />
              </div>
            </div>
          )}

          <div className="center">
            <button className="contact-footer" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </Fragment>
  );
}
