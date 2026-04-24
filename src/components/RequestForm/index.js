/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { createClient } from "contentful-management";
import { navigate } from "gatsby";
import { cleanUrlSlash } from "src/utils";
import {
  Form,
  FormRow,
  FormCol,
  FormTwoCol,
  FormThreeCol,
  FormAction,
} from "src/components/Form";
import DefaultButton from "src/components/Button/DefaultButton";
import StateSelect from "src/components/StateSelect";

const RequestForm = ({ location, thanksURL, sourceURL, productDetail }) => {
  const [value, setValue] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    zipcode: "",
    width: "",
    length: "",
    height: "",
    message: "",
  });



  const validateEmail = (val) => {
    if (!val) return "Email is required";
    const regex = /^(?!\s)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(val)
      ? ""
      : "You have to input email value correctly. For example, name@example.com";
  };

  const validateZip = (val) => {
    if (!val) return "ZIP code is required";
    return /^\d{5}$/.test(val)
      ? ""
      : "Enter a valid ZIP code. It must be exactly five digits.";
  };

  const validateDim = (label, val) => {
    if (!val) return `${label} is required`;
    return /^\d{2,3}$/.test(val)
      ? ""
      : `${label} must be numeric and exactly 2 digits.`;
  };

  const validateMessage = (val) => {
    if (!val) return "Message is required";
    return val.trimStart().length >= 10
      ? ""
      : "Message must be at least 10 characters long.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const client = createClient({
      accessToken: 'CFPAT-mpmOO6TC819icXwuZjopv6NKiJdh9C91YTkrhb5BUPw'
    });
    // Run validations before submit
    const nextErrors = {
      email: validateEmail(email),
      zipcode: validateZip(zipcode),
      width: validateDim("Width", width),
      length: validateDim("Length", length),
      height: validateDim("Height", height),
      message: validateMessage(message),
    };
    setErrors(nextErrors);
    const hasErrors = Object.values(nextErrors).some((m) => m);
    if (hasErrors) {
      return;
    }
    if (
      fullname !== "" &&
      phone !== "" &&
      email !== "" &&
      width !== "" &&
      length !== "" &&
      height !== "" &&
      zipcode !== "" &&
      message !== ""
    ) {
      const data = {
        source: location.origin,
        form: "get-quote-form",
        page: location.href,
        full_name: fullname,
        phone_no: phone,
        email: email,
        state: selectedState?.value || "",
        width: width,
        length: length,
        height: height,
        zipcode: zipcode,
        comment: `Message:${message}  Width: ${width}  Length: ${length}  Height: ${height}  ${productDetail ? `ProductURL: ${location.origin + sourceURL}` : ""}  ${productDetail ? productDetail : ""}`,
      };
      console.log("data", data);
      try {
        // Prepare Contentful request
        const contentfulPromise = (async () => {
          const space = await client.getSpace("uh49lx4lkbed");
          const environment = await space.getEnvironment('master');
          return environment.createEntry('formData', {
            fields: {
              formName: { 'en-US': "Contact Form" },
              fullName: { 'en-US': fullname },
              email: { 'en-US': email },
              phoneNumber: { 'en-US': phone },
              state: { 'en-US': selectedState?.value || "" },
              width: { 'en-US': width },
              length: { 'en-US': length },
              height: { 'en-US': height },
              zipCode: { 'en-US': zipcode },
              message: { 'en-US': message },
              sourcePage: {
                'en-US': sourceURL ? location.origin + sourceURL : location.href
              }
            }
          });
        })();

        // Prepare CRM request
        const crmPromise = axios({
          method: "post",
          url: "https://crm.senseicrm.com/api/v1/create-lead",
          data: data,
          headers: { Authorization: "Bearer " + process.env.GATSBY_API_TOKEN },
        });

        // Run both in parallel
        await Promise.all([contentfulPromise, crmPromise]);

        if (typeof dataLayer !== 'undefined') {
          window.dataLayer.push({
            'event': 'form_submission',
            'formName': 'RequestForm',
            'enhanced_conversion_data': {
              'email': email,
              'phone_number': phone
            }
          });
        }
        navigate("/" + thanksURL);
        if (typeof window !== `undefined`) {
          document.body.classList.remove("modal-open");
        }
      } catch (error) {
        console.error(error);
        alert("There was a problem submitting the form. Please try again.");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Form className="form">
        <FormRow className="form-row">
          <FormTwoCol className="form-coltwo">
            <div className="form-group">
              <input
                type="text"
                id="fullname"
                className="form-control"
                placeholder="Full Name"
                pattern="^(?!\s*$)[A-Za-z\s]+$"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </FormTwoCol>

          <FormTwoCol className="form-coltwo">
            <div className="form-group">
              <input
                type="tel"
                id="phone_no"
                className="form-control"
                placeholder="Phone No."
                required
                pattern="[0-9]{10}"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </FormTwoCol>

          <FormCol className="form-coltwo">
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                required
                pattern="^(?!\s)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                title="Enter a valid email like name@example.com"
                value={email}
                onKeyDown={(e) => {
                  // prevent spaces while typing
                  if (e.key === " ") e.preventDefault();
                }}
                onPaste={(e) => {
                  // clean pasted text (remove spaces)
                  e.preventDefault();
                  const text = (e.clipboardData || window.clipboardData).getData("text");
                  const cleaned = text.replace(/\s+/g, "");
                  setEmail(cleaned);
                  setErrors((prev) => ({ ...prev, email: validateEmail(cleaned) }));
                }}
                onChange={(e) => {
                  // clean typed text (remove spaces)
                  const next = e.target.value;
                  const cleaned = next.replace(/\s+/g, "");
                  setEmail(cleaned);
                  setErrors((prev) => ({ ...prev, email: validateEmail(cleaned) }));
                }}
              />
              {errors.email && (
                <div className="error-label">{errors.email}</div>
              )}
            </div>
          </FormCol>

          <FormTwoCol className="form-coltwo">
            <div className="form-group">
              <input
                type="text"
                id="zip_code"
                className="form-control"
                placeholder="Zip Code"
                required
                title="Enter a valid Zip code. It must be exactly five digits"
                maxLength={5} // blocks extra digits
                pattern="^\d{5}$" // must be exactly 5 digits
                onChange={(e) => {
                  // remove non-digits and leading spaces
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length > 5) {
                    value = value.slice(0, 5);
                  }
                  setZipcode(value);
                  setErrors((prev) => ({ ...prev, zipcode: validateZip(value) }));
                }}
                value={zipcode}
              />
              {errors.zipcode && (
                <div className="error-label">{errors.zipcode}</div>
              )}
            </div>
          </FormTwoCol>

          <FormTwoCol className="form-coltwo">
            <div className="form-group form-group-select">
              <StateSelect
                id="state"
                value={selectedState}
                onChange={(option) => setSelectedState(option)} // gets full {label, value}
              />
            </div>
          </FormTwoCol>

          <FormThreeCol className="form-colthree">
            <div className="form-group">
              <input
                type="text"
                id="width"
                className="form-control"
                placeholder="Width"
                required
                inputMode="numeric"
                pattern="^\d{2,3}$"
                maxLength={3} // max 3 digits
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // keep only digits
                  if (value.length > 3) {
                    value = value.slice(0, 3);
                  }
                  setWidth(value);
                  setErrors((prev) => ({ ...prev, width: validateDim("Width", value) }));
                }}
                value={width}
              />
              {errors.width && (
                <div className="error-label">{errors.width}</div>
              )}
            </div>
          </FormThreeCol>
          <FormThreeCol className="form-colthree">
            <div className="form-group">
              <input
                type="text"
                id="length"
                className="form-control"
                placeholder="Length"
                required
                inputMode="numeric"
                pattern="^\d{2,3}$"
                maxLength={3} // only up to 3 digits
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // only numbers
                  if (value.length > 3) {
                    value = value.slice(0, 3);
                  }
                  setLength(value);
                  setErrors((prev) => ({ ...prev, length: validateDim("Length", value) }));
                }}
                value={length}
              />
              {errors.length && (
                <div className="error-label">{errors.length}</div>
              )}
            </div>
          </FormThreeCol>

          <FormThreeCol className="form-colthree">
            <div className="form-group">
              <input
                type="text"
                id="height"
                className="form-control"
                placeholder="Height"
                required
                inputMode="numeric"
                pattern="^\d{2}$"
                maxLength={2} // only up to 2 digits
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // only numbers
                  if (value.length > 2) {
                    value = value.slice(0, 2);
                  }
                  setHeight(value);
                  setErrors((prev) => ({ ...prev, height: validateDim("Height", value) }));
                }}
                value={height}
              />
              {errors.height && (
                <div className="error-label">{errors.height}</div>
              )}
            </div>
          </FormThreeCol>
          <FormCol>
            <div className="form-group">
              <textarea
                name="review"
                rows="3"
                id="message"
                className="form-control"
                placeholder="Enter Your Message"
                required
                minLength={10} // at least 10 characters
                value={message}
                onChange={(e) => {
                  let value = e.target.value;

                  // Prevent starting with a space
                  if (value.startsWith(" ")) {
                    value = value.trimStart();
                  }

                  setMessage(value);
                  setErrors((prev) => ({ ...prev, message: validateMessage(value) }));
                }}
              ></textarea>
              {errors.message && (
                <div className="error-label">{errors.message}</div>
              )}
            </div>
          </FormCol>
        </FormRow>
        <FormAction className="form-action">
          <button type="submit" aria-label="button"><DefaultButton text="Submit" /></button>
        </FormAction>
      </Form>
    </form>
  );
};

export default RequestForm;
