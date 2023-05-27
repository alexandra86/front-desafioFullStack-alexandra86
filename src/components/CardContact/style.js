import styled from "styled-components";
import trash from "../../img/trash.svg";
import lapis from "../../img/lapisRoxo.png";

export const StyleCardContact = styled.li`
  max-width: 90rem;
  width: 100%;
  height: 3.0625rem;
  padding: 0.8125rem 1.38875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121214;
  border-radius: 0.25rem;

  .technology {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 0.888125rem;
    color: #ffffff;
  }
  .areaCourse {
    display: flex;
    align-items: center;
    gap: 1.375rem;
  }
  .nivelCourse {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.76125rem;
    color: #868e96;
  }
  .btDelete {
    background-image: url(${trash});
    width: 1.234375rem;
    height: 1rem;
  }
  .btDelete:hover {
    -webkit-transform: scale(1.5);
    -webkit-transition: scale(1.5);
  }
  .btEdit {
    background-image: url(${lapis});
    width: 2rem;
    height: 1.875rem;
  }
  .btEdit:hover {
    -webkit-transform: scale(1.3);
    -webkit-transition: scale(1.3);
  }
  @media (max-width: 43.75rem) {
    padding: 0.625rem 0.3125rem;
    .areaCourse {
      gap: 0.1875rem;
    }
  }
`;
