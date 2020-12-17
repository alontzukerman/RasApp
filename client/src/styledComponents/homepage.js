import styled from 'styled-components';

export const HomePageContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomePageInnerContainer = styled.div`
  height: 100% ;
  width: 80% ;
  display: grid ;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px ;
  align-items: center ;
`;

export const HomePageBox = styled.div`
  cursor: pointer;
  border-radius: 5px;
  border-top: 5px solid #c7bf32;
  background-color: #ede43b;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s background ease ;
  &:hover {
    background-color: #f3ed74
  }
  &:hover .iconsStyle {
    transform: rotate(5deg);
  }
  &:hover h2 {
    letter-spacing: 2px;
  }
`;
export const HomePageBoxTitle = styled.h2`
  margin-bottom: 1.4em;
  transition: letter-spacing 0.2s ease;
`;