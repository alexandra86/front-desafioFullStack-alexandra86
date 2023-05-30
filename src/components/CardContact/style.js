import styled from "styled-components";
import trash from "../../img/trash.svg";
import lapis from "../../img/pencil.png";
import fundoLi from "../../img/fundoLi.jpg";

export const StyleCardContact = styled.li`
  max-width: 18.313rem;
  width: 100%;
  height: 12.0625rem;
  padding: 0.8125rem 0.38875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-image: url(${fundoLi});
  border-radius: 0.25rem;

  .areClient {
    max-width: 18.75rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .areaDateTime {
    max-width: 18.75rem;
    width: 100%;
    display: flex;
  }

  .registerDate {
    margin-top: 0.313rem;
    margin-bottom: 0.313rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.888125rem;
    color: #005c53;
  }
  .areabuttons {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }
  .identification {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 0.76125rem;
    color: #000000;
    line-height: 1.125rem;
  }

  .emphasis {
    color: #45214a;
  }
  .btDelete {
    background-image: url(${trash});
    background-position: center;
    background-repeat: no-repeat;
    width: 2.23438rem;
    height: 3rem;
  }
  .btDelete:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
  }
  .btEdit {
    background-image: url(${lapis});
    background-position: center;
    background-repeat: no-repeat;
    width: 2.813rem;
    height: 2.438rem;
  }
  .btEdit:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
  }
  @media (max-width: 43.75rem) {
    padding: 0.625rem 0.3125rem;
    .areabuttons {
      gap: 0.1875rem;
    }
  }
`;
