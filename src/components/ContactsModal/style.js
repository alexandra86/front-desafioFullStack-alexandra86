import styled from "styled-components";

export const StyledContainerContactsModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalContentContacts {
    max-width: 23.0625rem;
    height: 31.25rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: #051d40;
  }
  .headerModal {
    max-width: 23.0625rem;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleModal {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #f8f9fa;
  }
  .btCloseModal {
    max-width: 0.6875rem;
    width: 100%;
    height: 1.625rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }
  .btCloseModal:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
  }

  .handleListContacts {
    max-width: 23.0625rem;
    width: 100%;
    height: 100%;
    padding: 0.75rem 1.25rem;
    background-color: #7fadeb;
    line-height: 2rem;
    overflow: auto;
  }

  .handleListContacts::-webkit-scrollbar {
    width: 0.5rem;
  }

  .handleListContacts::-webkit-scrollbar-thumb {
    background-color: #051d40;
  }

  .handleListContacts::-webkit-scrollbar-thumb:hover {
    background-color: #051d40;
  }

  @media (max-width: 43.75rem) {
    .modalContentContacts {
      width: 91%;
    }
  }
`;
