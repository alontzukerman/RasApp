import React from "react";
import styled from "styled-components";
import "../icons.css";
import {
  HomePageContainer,
  HomePageInnerContainer,
} from "../styledComponents/homepage";
import { HomePageBox, HomePageBoxTitle } from "../styledComponents/homepage";
import NoteIcon from "@material-ui/icons/Note";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ListAltIcon from "@material-ui/icons/ListAlt";
// import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function HomePage() {
  const history = useHistory();

  return (
    <HomePageContainer>
      <HomePageInnerContainer>
        <HomePageBox onClick={() => history.push("/notes")}>
          <HomePageBoxTitle>פתקים</HomePageBoxTitle>
          <NoteIcon className="iconsStyle" />
        </HomePageBox>
        <HomePageBox onClick={() => history.push("/calendar")}>
          <HomePageBoxTitle>יומן</HomePageBoxTitle>

          <EventNoteIcon className="iconsStyle" />
        </HomePageBox>
        <HomePageBox onClick={() => history.push("/soldiers")}>
          <HomePageBoxTitle>חיילים</HomePageBoxTitle>

          <PermContactCalendarIcon className="iconsStyle" />
        </HomePageBox>
        <HomePageBox onClick={() => history.push("/nohehut")}>
          <HomePageBoxTitle>נוכחות</HomePageBoxTitle>

          <ListAltIcon className="iconsStyle" />
        </HomePageBox>
      </HomePageInnerContainer>
    </HomePageContainer>
  );
}

export default HomePage;
