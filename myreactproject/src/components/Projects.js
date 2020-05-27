import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import GitHubIcon from '@material-ui/icons/GitHub';
  import YouTubeIcon from '@material-ui/icons/YouTube';
import { StylesProvider } from "@material-ui/core";
import Styles from "../components/Image.module.css";
import Covid from "../Images/covidOptimized.PNG";

function Projects() {
    return (
        <div>
            <h1>My Projects </h1>
        <Card className={Styles.cards}>
        <CardBody>
          <CardTitle>Recipe Book</CardTitle>
          <CardSubtitle>React</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>In this project I used useState and useEffect hooks to retrieve data from and API that gets recipes based on a ingredient that the user types into the search bar.</CardText>
          <CardLink href="#">
              <YouTubeIcon color="secondary"/>
          </CardLink>
          <CardLink href="#">
          <GitHubIcon color="primary" />
          </CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Covid-19</CardTitle>
          <CardSubtitle>I'm so humble</CardSubtitle>
        </CardBody>
        <CardImg  src={Covid} alt="Card image cap" />
        <CardBody>
          <CardText>In this project I created a COVID-19 tracker that fetched data from (https://covid19.mathdro.id/api).</CardText>
          <CardLink href="#">
          <YouTubeIcon color="secondary"/>
          </CardLink>
          <CardLink href="#">
          <GitHubIcon color="primary" />
          </CardLink>
        </CardBody>
      </Card>
        </div>
    );
};

export default Projects;