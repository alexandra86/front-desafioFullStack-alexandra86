import styled from "styled-components";

export const StyledContainerDeleteModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalContent {
    max-width: 31.25rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: #051d40;
  }
  .headerModal {
    max-width: 31.25rem;
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

  .areaDeleteInfo {
    width: 100%;
    height: 12.75rem;
    background-color: #7fadeb;
    padding: 0.625rem 0rem 0rem 0.313rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
  }

  .freseDelete {
    margin-top: 0.625rem;
    font-size: 1.125rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    line-height: 1.5rem;
  }

  .btConfirmDelete {
    max-width: 12.438rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    background-color: #cd8427;
    border: 0.125rem solid #051d40;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #000000;
  }

  .btConfirmDelete:hover {
    background: #cd8427;
    border: none;
  }

  .btCancelDelete {
    max-width: 12.438rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    background-color: #bce363;
    border: 0.125rem solid #051d40;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #000000;
  }

  .btCancelDelete:hover {
    background-color: #9f2fff;
    border: none;
    color: #ffffff;
  }

  .areaButtonsDelete {
    margin-top: 1rem;
    max-width: 12.438rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }

  @media (max-width: 43.75rem) {
    .modalContent {
      width: 94%;
    }
    .areaButtonsDelete {
      flex-direction: column;
    }

    .freseDelete {
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      text-align: center;
      line-height: 1.5rem;
    }

    .areaDeleteInfo {
      height: 18.75rem;
    }
  }
`;
