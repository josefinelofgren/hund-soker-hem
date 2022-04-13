// import libaries
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

//import components
import { Container, Row, Col } from "react-bootstrap";
import Input from "../../components/forms/input";
import Checkbox from "../../components/forms/checkbox";
import RadioButton from "../../components/forms/radio-button";
import InputNumber from "../../components/forms/input-number";

// fetch
// const selected_dog_URI = "http://localhost:8080/available-dogs/selected-dog";
const selected_dog_URI =
  "https://hund-soker-hem.herokuapp.com/available-dogs/selected-dog";

// const registration_of_interest_URI =
//   "http://localhost:8080/registration-of-interest/submit";
const registration_of_interest_URI =
  "https://hund-soker-hem.herokuapp.com/registration-of-interest/submit";

function RegistrationOfInterest() {
  const { t } = useTranslation("translation", {
    keyPrefix: "registration-of-interest",
  });
  let params = useParams();
  let path = params.name;

  const [selectedDog, setSelectedDog] = useState({});
  const [imgPath, setImgPath] = useState("loading.png");

  // states for registration of interest form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [residence, setResidence] = useState("");
  const [environment, setEnvironment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [work, setWork] = useState("");
  const [family, setFamily] = useState("");
  const [allergies, setAllergies] = useState("");
  const [aloneTime, setAloneTime] = useState("");
  const [aloneTimeChanges, setAloneTimeChanges] = useState("");
  const [firstWeeks, setFirstWeeks] = useState("");
  const [approval, setApproval] = useState(false);
  const [dogs, setDogs] = useState("");
  const [animals, setAnimals] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [dailyLife, setDailyLife] = useState("");
  const [insurance, setInsurance] = useState("");
  const [references, setReferences] = useState("");
  const [relationship, setRelationship] = useState("");
  const [registrationSent, setRegistrationSent] = useState(false);

  let selectedDogPath = {
    path: path,
  };

  useEffect(() => {
    fetch(selected_dog_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedDogPath),
    })
      .then((res) => res.json())
      .then((result) => {
        setSelectedDog(result);
        setImgPath(result.img);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [registrationSent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRegistrationOfInterest = {
      firstName: firstName,
      lastName: lastName,
      selectedDog: selectedDog.name,
      birthYear: birthYear,
      address: address,
      city: city,
      zipcode: zipcode,
      residence: residence,
      environment: environment,
      phoneNumber: phoneNumber,
      email: email,
      work: work,
      family: family,
      allergies: allergies,
      aloneTime: aloneTime,
      aloneTimeChanges: aloneTimeChanges,
      firstWeeks: firstWeeks,
      approval: approval,
      dogs: dogs,
      animals: animals,
      previousExperience: previousExperience,
      activityLevel: activityLevel,
      dailyLife: dailyLife,
      insurance: insurance,
      references: references,
      relationship: relationship,
    };

    fetch(registration_of_interest_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRegistrationOfInterest),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    setRegistrationSent(true);
  };

  return (
    <div className="registration-of-interest">
      <div className="dog-header">
        <Row>
          <Col lg="6">
            <figure className="dog-img">
              <img
                src={require(`../../assets/images/${imgPath}`)}
                alt={"En hund"}
              />
            </figure>
          </Col>
          <Col lg="6">
            <div className="info">
              <Container fluid>
                <Row>
                  {!registrationSent && (
                    <>
                      <h3>{t("title")}</h3>
                      <div className="border"></div>
                      <p>{t("description")}</p>
                      <h5>{t("subtitle")}</h5>
                      <p>
                        {t("sub-description")}
                        <Link to="/att-adoptera">
                          <span className="pink"> att adoptera</span>
                        </Link>{" "}
                        har vi samlat viktig information till dig som funderar
                        på att adoptera. Läs gärna igenom den innan du
                        fortsätter din intresseanmälan.{" "}
                      </p>
                    </>
                  )}
                  {registrationSent && (
                    <>
                      <h3>
                        {t("title-registration-sent", {
                          name: selectedDog.name,
                        })}
                      </h3>
                      <div className="border"></div>
                      <p>
                        {t("description-registration-sent-part-one", {
                          name: selectedDog.name,
                        })}
                      </p>
                      <p>
                        {t("description-registration-sent-part-two", {
                          name: selectedDog.name,
                        })}
                      </p>
                    </>
                  )}
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
      {!registrationSent && (
        <Container fluid>
          <Row>
            <div className="registration-of-interest-form">
              <h4>
                {t("registration-of-interest-info-title", {
                  name: selectedDog.name,
                })}
              </h4>
              <p>
                {t("registration-of-interest-info-description", {
                  name: selectedDog.name,
                })}
                <Link to="/hitta-min-match">
                  <span className="pink"> matchningsformulär</span>
                </Link>
                , där vi sedan presenterar de hundar som eventuellt skulle kunna
                passa in hos dig baserat på dina svar.
              </p>
              <h6>{t("registration-of-interest-info-subtitle")}</h6>
              <p>
                {t("registration-of-interest-info-sub-description", {
                  name: selectedDog.name,
                })}
              </p>
              <h6>{t("registration-of-interest-info-subtitle-two")}</h6>
              <p>
                {t("registration-of-interest-info-sub-description-two", {
                  name: selectedDog.name,
                })}
              </p>
            </div>
          </Row>
          <Row>
            <form onSubmit={handleSubmit}>
              <h4>
                {t("registration-of-interest-form-title", {
                  name: selectedDog.name,
                })}
              </h4>
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
                label={"Telefonnummer"}
                placeholder={"+46 7X XX XX XXX"}
                value={phoneNumber}
                setState={setPhoneNumber}
              />
              <Input
                label={"E-postadress"}
                placeholder={"exempel@exempel.se"}
                value={email}
                setState={setEmail}
              />
              <Input
                label={"Yrkestitel / Huvudsaklig sysselsättning"}
                placeholder={"Ange ditt svar..."}
                value={work}
                setState={setWork}
              />
              <Input
                label={"Vilken hund vill du anmäla ditt intresse för?"}
                placeholder={"Ange ditt svar..."}
                value={selectedDog.name}
              />
              <div className="radio-button-input">
                <label>{"Hur bor du?"}</label>
                <RadioButton
                  name={"residence"}
                  value={"Lägenhet"}
                  setState={setResidence}
                />
                <RadioButton
                  name={"residence"}
                  value={"Hus"}
                  setState={setResidence}
                />
                <RadioButton
                  name={"residence"}
                  value={"Radhus"}
                  setState={setResidence}
                />
              </div>
              <div className="radio-button-input">
                <label>{"I vilken miljö bor du?"}</label>
                <RadioButton
                  name={"environment"}
                  value={"Stadsmiljö"}
                  setState={setEnvironment}
                />
                <RadioButton
                  name={"environment"}
                  value={"Lantligt"}
                  setState={setEnvironment}
                />
                <RadioButton
                  name={"environment"}
                  value={"Tätort"}
                  setState={setEnvironment}
                />
                <RadioButton
                  name={"environment"}
                  value={"Närförort"}
                  setState={setEnvironment}
                />
              </div>
              <Input
                label={
                  "Hur många personer finns i hushållet och i vilka åldrar?"
                }
                placeholder={"Ange ditt svar..."}
                value={family}
                setState={setFamily}
              />
              <Input
                label={"Har det funnits pälsallergier i familjen?"}
                placeholder={"Ange ditt svar..."}
                value={allergies}
                setState={setAllergies}
              />
              <Input
                label={
                  "Var kommer hunden att vara på dagarna? Med dig eller kommer du att behöva använda dig av hundpassning? Om hundpassning, vilken typ (hunddagis, hundvakt etc.)?"
                }
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={aloneTime}
                setState={setAloneTime}
              />
              <Input
                label={
                  "Om du studerar, får ny arbetsplats, är arbetslös eller sjukskriven – hur kommer du att lösa ensamtiden om detta ändras?"
                }
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={aloneTimeChanges}
                setState={setAloneTimeChanges}
              />
              <Input
                label={
                  "Hur löser du de första veckorna med nya hunden? Kan du vara hemma med hunden?"
                }
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={firstWeeks}
                setState={setFirstWeeks}
              />
              <Input
                label={
                  "Finns det andra hundar i hemmet? Om ja, vilken ras, ålder och kön? Är den andra hunden kastrerad?"
                }
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={dogs}
                setState={setDogs}
              />
              <Input
                label={"Finns det andra djur i hemmet? Om ja, vad för djur?"}
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={animals}
                setState={setAnimals}
              />
              <Input
                label={
                  "Har du erfarenhet av hundar sedan tidigare? Finns det erfarenhet av omplaceringshundar?"
                }
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={previousExperience}
                setState={setPreviousExperience}
              />
              <Input
                label={
                  "Hur skulle du uppskatta din dagliga aktivitetsnivå? Låg, medium eller hög?"
                }
                placeholder={"Ange ditt svar..."}
                value={activityLevel}
                setState={setActivityLevel}
              />
              <Input
                label={
                  "Hur skulle en vardag med dig se ut för en hund? Vad kan du erbjuda hunden? Vad vill du göra/få ut av att ha en hund?"
                }
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={dailyLife}
                setState={setDailyLife}
              />
              <Input
                label={"Kommer du att försäkra hunden?"}
                placeholder={"Ange ditt svar..."}
                value={insurance}
                setState={setInsurance}
              />
              <Input
                label={
                  "Beskriv hur du kommer gå tillväga för att skapa en bra relation till din hund."
                }
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={relationship}
                setState={setRelationship}
              />
              <Input
                label={
                  "Lämna två referenser med namn och telefonnummer. Familj och nära vänner godkänns inte som referenser utan det är en arbetsgivare, granne eller bekant vi söker."
                }
                placeholder={"Ange ditt svar..."}
                size={"md"}
                value={references}
                setState={setReferences}
              />
              <Checkbox
                size={"sm"}
                value={approval}
                setState={setApproval}
                label={
                  <span>
                    Jag intygar att jag har tagit del och samtycker till
                    informationen och handlingarna jag kan ta del av och läsa om
                    i <span className="pink">integritetspolicyn</span>.
                  </span>
                }
              />
              <input
                type="submit"
                value="Skicka intresseanmälan"
                className="button no-icon primary"
              />
            </form>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default RegistrationOfInterest;
