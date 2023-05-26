import styled from "styled-components";

export const StyledLoginPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.875rem;
  background-color: #051d40;

  .secLogin {
    max-width: 31.25rem;
    width: 100%;
    height: 34.8125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.25rem;
    border: 0.1125rem solid #8698d9;
    padding: 1.625rem 1.5rem;
    background-color: #7fadeb;
  }

  .titleLogin {
    margin-bottom: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    color: #000000;
  }

  .formLogin {
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .lbLogin {
    margin-bottom: 0.3125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: #000000;
  }

  .iptLogin {
    max-width: 28.25rem;
    width: 100%;
    height: 4.375rem;
    margin-bottom: 0.9375rem;
    padding: 1.25rem 0.9375rem;
    margin-bottom: 0.3125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    background-color: #d9e8fc;
    color: #000000;
    outline: none;
    border: 0.1125rem solid #8698d9;
    border-radius: 0.5rem;
  }

  .iptLogin::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .iptLogin:focus {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .iptLogin:hover {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .btLogar {
    max-width: 28.25rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: #9f2fff;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }
  .btLogar:hover {
    background-color: #fc8dca;
  }

  .messageCreateRegister {
    margin-left: 4.375rem;
    margin-bottom: 1.3125rem;
    max-width: 20.4375rem;
    width: 100%;
    height: 2.375rem;
    text-align: center;
    line-height: 1.125rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: #000000;
  }

  .btGoToRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: #343b41;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }

  .btGoToRegister:hover {
    background-color: #999999;
    color: #e0e0e0;
  }

  .secApresentation {
    max-width: 31.25rem;
    width: 100%;
    height: 34.8125rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.625rem 1.5rem;
    background-color: #051d40;
  }

  .areaImageAndMessage {
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    max-width: 23.5625rem;
    width: 100%;
    height: 5.9375rem;
    display: flex;
    padding: 1.0625rem 0rem 1.125rem 0.875rem;
    gap: 1.1875rem;
    background-color: #ffffff;
    border: 0.0625rem solid #e0e0e0;
    border-radius: 0.3125rem;
  }

  .areaError {
    color: #e60000;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
  }

  @media (max-width: 67.5rem) {
    margin-top: 5.3125rem;
    flex-direction: column-reverse;
    gap: 0rem;

    .secApresentation {
      height: 9.8125rem;
    }

    .secLogin {
      border: none;
    }

    .messageCreateRegister {
      margin-top: 0.875rem;
    }

    .areaImageAndMessage {
      height: 8.9375rem;
      max-width: 28.25rem;
      width: 100%;
    }

    .reminder {
      margin-bottom: 0.4rem;
    }

    .hidden {
      display: none;
    }
  }

  @media (max-width: 28.125rem) {
    .messageCreateRegister {
      margin-left: 1rem;
      width: 89%;
    }
  }
`;
