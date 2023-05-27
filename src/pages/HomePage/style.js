import styled from "styled-components";

export const StyledHomePage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: #121214;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .headerHome {
    margin-top: 1.8125rem;
    margin-bottom: 1.773125rem;
    max-width: 90rem;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .areaUser {
    margin-bottom: 2.3125rem;
    max-width: 90rem;
    width: 60%;
    height: 7.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .areaWelcome {
    margin-top: 2.8125rem;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #f8f9fa;
  }

  .course {
    margin-top: 2.8125rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: #868e96;
  }

  .areaInformation {
    max-width: 90rem;
    width: 60%;
    height: 7.375rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2.3125rem;
    gap: 1.4375rem;
  }

  .areaTechnology {
    max-width: 90rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleTechnology {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #f8f9fa;
  }

  .ulCardTech {
    max-width: 90rem;
    width: 100%;
    background-color: #212529;
    border-radius: 0.25rem;
    padding: 1.4375rem 1.625rem 1.4375rem 1.375rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .btComeBackLogin {
    max-width: 4.218125rem;
    width: 100%;
    height: 2.506875rem;
    padding: 0rem 1rem;
    border-radius: 0.25rem;
    border: 0.07625rem solid #212529;
    background-color: #212529;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: #f8f9fa;
  }

  .btComeBackLogin:hover {
    border: 0.07625rem solid #343b41;
    background-color: #343b41;
  }

  .btOpenModal {
    max-width: 2.030625rem;
    width: 100%;
    height: 2rem;
    background-color: #212529;
    font-size: 0.67rem;
    padding: 0.625rem 0.625rem;
    color: #ffffff;
  }

  @media (max-width: 56.25rem) {
    .areaUser {
      display: flex;
      align-items: center;
      width: 60%;
    }
    .areaTechnology {
      display: flex;
      align-items: center;
      gap: 0;
      width: 100%;
    }
  }

  @media (max-width: 43.75rem) {
    .headerHome {
      margin-top: 1.8125rem;
      margin-bottom: 1.773125rem;
      max-width: 90rem;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logoKenziHub {
      max-width: 6.595625rem;
      width: 100%;
      height: 0.914375rem;
    }
    .areaUser {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 80%;
      gap: 0.625rem;
    }

    .areaInformation {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 80%;
      line-height: 1.75rem;
    }
    .ulCardTech {
      padding: 0.625rem 0.3125rem;
    }
  }
`;
