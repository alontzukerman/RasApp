import React from "react";
import styled from "styled-components";
import { PageContainer, FormContainer } from "../styledComponents/containers";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";
function HomePage() {
  const history = useHistory();

  return (
    <PageContainer>
      <FormContainer>
        <Button variant="outlined" onClick={() => history.push("/notes")}>
          פתקים
        </Button>
        <Button variant="outlined">יומן</Button>
        <Button variant="outlined" onClick={() => history.push("/soldiers")}>
          חיילים
        </Button>
        <Button variant="outlined" onClick={() => history.push("/nohehut")}>
          נוכחות
        </Button>
      </FormContainer>
    </PageContainer>
  );
}

export default HomePage;
