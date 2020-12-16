import React from "react";
import styled from "styled-components";
import '../icons.css';
import {
  PageContainer,
  HomePageInnerContainer,
} from "../styledComponents/containers";
import { HomePageBtn , HomePageBtnTitle } from "../styledComponents/elements";
import NoteIcon from "@material-ui/icons/Note";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ListAltIcon from '@material-ui/icons/ListAlt';
// import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function HomePage() {
  const history = useHistory();
  
  const style = {
    fontSize:"80px"
  
  }
  return (
    <PageContainer>
      <HomePageInnerContainer>
        <HomePageBtn onClick={() => history.push("/notes")}>
          <HomePageBtnTitle>פתקים</HomePageBtnTitle>
          <NoteIcon className="iconsStyle" />
        </HomePageBtn>
        <HomePageBtn>
        <HomePageBtnTitle>יומן</HomePageBtnTitle>

          <EventNoteIcon className="iconsStyle"/>
        </HomePageBtn>
        <HomePageBtn

          onClick={() => history.push("/soldiers")}
        >
                    <HomePageBtnTitle>חיילים</HomePageBtnTitle>

          <PermContactCalendarIcon className="iconsStyle"/>
        </HomePageBtn>
        <HomePageBtn
          onClick={() => history.push("/nohehut")}
        >
                    <HomePageBtnTitle>נוכחות</HomePageBtnTitle>

          <ListAltIcon className="iconsStyle"/>
        </HomePageBtn>
      </HomePageInnerContainer>
    </PageContainer>
  );
}

export default HomePage;
