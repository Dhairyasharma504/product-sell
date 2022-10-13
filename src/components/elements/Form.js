import React from 'react';
import useForm from 'react-hook-form';

function Test() {
  const { useForm, register } = useForm();
  const contactSubmit = (data) => {
    console.log(data);
  };

  return (
    <form name="contactform" onSubmit={contactSubmit}>
      <div className="col-md-6">
        <fieldset>
          <input
            name="name"
            type="text"
            size="30"
            placeholder="Name"
            ref={register}
          />
          <br />
          <input
            name="email"
            type="text"
            size="30"
            placeholder="Email"
            ref={register}
          />
          <br />
          <input
            name="phone"
            type="text"
            size="30"
            placeholder="Phone"
            ref={register}
          />
          <br />
          <input
            name="address"
            type="text"
            size="30"
            placeholder="Address"
            ref={register}
          />
          <br />
        </fieldset>
      </div>
      <div className="col-md-6">
        <fieldset>
          <textarea
            name="message"
            cols="40"
            rows="20"
            className="comments"
            placeholder="Message"
            ref={register}
          />
        </fieldset>
      </div>
      <div className="col-md-12">
        <fieldset>
          <button className="btn btn-lg pro" id="submit" value="Submit">
            Send Message
          </button>
        </fieldset>
      </div>
    </form>
  );
}
