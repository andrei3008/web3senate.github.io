import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Formular = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bifaw5g",
        "template_adhll56",
        form.current,
        "orVgfPa96YJ9utXlq"
      )
      .then(
        (result) => {
          alert("We have send the message " + result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <div className="chenar">
        <h1>Chestionar</h1>
        <p>Descriere 1</p>
        <p>Descriere2</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="chenar">
        <label>Your discord id :</label>
        <input type="text" name="discordid" required />
        </div>
        <div className="chenar">
        <label>Your Twitter handel : </label>
        <input type="text" name="twitterid" required />
        </div>
        <div className="chenar">
        <label>How did you start your NFT adventure in the crypto nft space?</label>
        <textarea name="q1" required />
        </div>
        <div className="chenar">
        <label>Would you be opened to helping the team and the community for some passive income?</label>
        <textarea name="q2" required />
        </div>
        <div className="chenar">
        <label>How much time would you be willing to spend to help our community?</label>
        <textarea name="q3" required />
        </div>
        <div className="chenar">
        <label>Describe in a few words your past work experiences and if you are an artist, a portfolio will help?</label>
        <textarea name="q4" required />
        </div>
        <div className="chenar">
        <label>Last, but not least, why do you want to join the team?</label>
        <textarea name="q5" required/>
        </div>
        <div className="chenar">
          <label>Attache your portofolio. (Dropbox, Google Drive, etc.)</label>
          <input type="text" name="q5" required/>
        </div>
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Formular;

// Styles
const StyledContactForm = styled.div`
  width: 50em;
  margin: 0 auto;

  html {
    height: 100vh;
    font-size: 16px;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      box-sizing: inherit;
      font-family: inherit;
      line-height: 1.15;
      margin: 0;
      width: 97%;
      padding: 0.7rem;
      font-size: 1.6rem;
      border: none;
      border-bottom: 2px solid var(--light-grey);
    }

    textarea {
      max-width: 100%;
      min-width: 98%;
      width: 97%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      font-size: 1.6rem;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      
    }

    label {
      display: block;
      margin-bottom: 0.7rem;
      font-weight: 900;
      font-size: 1.8rem;
      text-transform: uppercase;
      color: white;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #393939;
      color: white;
      border: none;
      width: 104%;
      margin-bottom: 5em;
    }
  }
`;
