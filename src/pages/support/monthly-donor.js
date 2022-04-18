// import libaries
import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Scroll from "react-scroll";

//import components
import { Container, Row, Col } from "react-bootstrap";
import DonationForm from "../../components/forms/donation-form";
import Input from "../../components/forms/input";
import InputNumber from "../../components/forms/input-number";

// const monthly_donor_URI =
// "http://localhost:8080/monthly-donor/submit";
const monthly_donor_URI =
  "https://hund-soker-hem.herokuapp.com/monthly-donor/submit";

function MonthlyDonor() {
  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);

  const { t } = useTranslation("translation", { keyPrefix: "monthly-donor" });

  const [sum, setSum] = useState(null);
  const [bankName, setBankName] = useState("");
  const [clearingNumber, setClearingNumber] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");

  const [monthlyDonorRegistered, setMonthlyDonorRegistered] = useState(false);

  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [monthlyDonorRegistered]);

  const handleChange = (e) => {
    e.preventDefault();

    setBankName(e.target.value);
  };

  const handleSubmitStepOne = (e) => {
    e.preventDefault();

    if (sum === null) {
      console.log("Välj ett alternativ");
    } else {
      setStepTwo(true);
      Scroll.scroller.scrollTo("stepTwo");
    }
  };

  const handleSubmitStepTwo = (e) => {
    e.preventDefault();

    setStepThree(true);
    Scroll.scroller.scrollTo("stepThree");
  };

  const handleSubmitStepThree = (e) => {
    e.preventDefault();

    const newMonthlyDonor = {
      firstName: firstName,
      lastName: lastName,
      birthYear: birthYear,
      address: address,
      city: city,
      zipcode: zipcode,
      email: email,
      sum: sum,
      bankName: bankName,
      clearingNumber: clearingNumber,
      bankAccountNumber: bankAccountNumber,
    };

    fetch(monthly_donor_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMonthlyDonor),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    setMonthlyDonorRegistered(true);
  };

  return (
    <div className="monthly-donor">
      <div className="dog-header">
        <Row>
          <Col lg="6">
            <figure className="dog-img">
              <img
                src={require("../../assets/images/monthly-donor.png")}
                alt={"En hund"}
              />
            </figure>
          </Col>
          <Col lg="6">
            <div className="info">
              <Container fluid>
                <Row>
                  {!monthlyDonorRegistered && (
                    <>
                      <h3>{t("title")}</h3>
                      <div className="border"></div>
                      <p>{t("description-part-one")}</p>
                      <p>{t("description-part-two")}</p>
                      <p>
                        Har du frågor är du välkommen att kontakta oss på{" "}
                        <span className="pink">info@hundsokerhem.se</span>
                      </p>
                    </>
                  )}
                  {monthlyDonorRegistered && (
                    <>
                      <h3>{t("registered-title")}</h3>
                      <div className="border"></div>
                      <p>{t("registered-description-part-one")}</p>
                      <p>{t("registered-description-part-two")}</p>
                    </>
                  )}
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
      {!monthlyDonorRegistered && (
        <div>
          <Container fluid>
            <Row>
              <Col lg="6">
                <div className="info">
                  <h3>{t("subtitle")}</h3>
                  <p>{t("sub-description")}</p>
                  <h5>{t("heading-one")}</h5>
                  <p>{t("text-one")}</p>
                </div>
              </Col>
              <Col lg="6">
                <div
                  className={
                    stepOne
                      ? "donation-form-content is-active mb"
                      : "donation-form-content mb"
                  }
                >
                  <h6 id="stepOne">{t("monthly-donor-step-one")}</h6>
                  <h5>{t("monthly-donor-form-title")}</h5>
                  <DonationForm setState={setSum} />
                  <form onSubmit={handleSubmitStepOne}>
                    <input
                      type="submit"
                      value="Vidare till dina uppgifter"
                      className="button no-icon primary"
                    />
                  </form>
                </div>
                <div
                  className={
                    stepTwo
                      ? "donation-form-content is-active mb"
                      : "donation-form-content mb"
                  }
                >
                  <h6 id="stepTwo">{t("monthly-donor-step-two")}</h6>
                  <h5>{t("monthly-donor-form-step-two-title")}</h5>
                  {stepTwo && (
                    <form onSubmit={handleSubmitStepTwo}>
                      <div className="grid-container">
                        <div className="grid-item">
                          <div className="input-content">
                            <label>Banknamn</label>
                            <label className="required">*</label>
                            <select
                              name="bankName"
                              id="bankName"
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled selected hidden>
                                Välj bank...
                              </option>
                              <option value="Nordea">Nordea</option>
                              <option value="SEB">SEB</option>
                              <option value="Swedbank">Swedbank</option>
                              <option value="Handelsbanken">
                                Handelsbanken
                              </option>
                              <option value="ICA">ICA</option>
                              <option value="Länsförsäkringar">
                                Länsförsäkringar
                              </option>
                              <option value="DanskeBank">DanskeBank</option>
                              <option value="SBAB">SBAB</option>
                            </select>
                          </div>
                        </div>
                        <div className="grid-item"></div>
                        <div className="grid-item">
                          <InputNumber
                            label={"Clearingnummer"}
                            placeholder={"Ditt clearingnummer..."}
                            value={clearingNumber}
                            setState={setClearingNumber}
                          />
                        </div>
                      </div>
                      <InputNumber
                        label={"Banknummer"}
                        placeholder={"Ditt banknummer..."}
                        value={bankAccountNumber}
                        setState={setBankAccountNumber}
                      />
                      <input
                        type="submit"
                        value={t("monthly-donor-form-step-two-button")}
                        className="button no-icon primary"
                      />
                    </form>
                  )}
                </div>
                <div
                  className={
                    stepThree
                      ? "donation-form-content is-active"
                      : "donation-form-content"
                  }
                >
                  <h6 id="stepThree">{t("monthly-donor-step-three")}</h6>
                  <h5>{t("monthly-donor-form-step-three-title")}</h5>
                  {stepThree && (
                    <form onSubmit={handleSubmitStepThree}>
                      <div className="grid-container">
                        <div className="grid-item">
                          <Input
                            label={"Förnamn"}
                            placeholder={"Ditt förnamn..."}
                            value={firstName}
                            setState={setFirstName}
                          />
                        </div>
                        <div className="grid-item"></div>
                        <div className="grid-item">
                          <Input
                            label={"Efternamn"}
                            placeholder={"Ditt efternamn..."}
                            value={lastName}
                            setState={setLastName}
                          />
                        </div>
                      </div>
                      <InputNumber
                        label={"Födelseår"}
                        placeholder={"XXXX"}
                        value={birthYear}
                        setState={setBirthYear}
                      />
                      <Input
                        label={"Adress"}
                        placeholder={"Din adress..."}
                        value={address}
                        setState={setAddress}
                      />
                      <div className="grid-container">
                        <div className="grid-item">
                          <Input
                            label={"Stad"}
                            placeholder={"Din stad..."}
                            value={city}
                            setState={setCity}
                          />
                        </div>
                        <div className="grid-item"></div>
                        <div className="grid-item">
                          <Input
                            label={"Postnummer"}
                            placeholder={"Ditt postnummer..."}
                            value={zipcode}
                            setState={setZipcode}
                          />
                        </div>
                      </div>
                      <Input
                        label={"E-postadress"}
                        placeholder={"exempel@exempel.se"}
                        value={email}
                        setState={setEmail}
                      />
                      <input
                        type="submit"
                        value={t("monthly-donor-form-step-three-button")}
                        className="button no-icon primary"
                      />
                    </form>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default MonthlyDonor;
