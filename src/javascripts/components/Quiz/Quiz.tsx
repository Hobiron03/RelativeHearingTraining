import React, { useState } from "react";
import Piano from "../Piano/Piano";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Slider from "@material-ui/core/Slider";
import "./Quiz.scss";

interface QuizProps {
  musicKey: string;
  level: string;
}

const useStyles = makeStyles({
  notecard: {
    width: 110,
    height: 110,
    transition: "0.2s all",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#ececec",
    },
  },
  note: {},
});

function valuetext(value) {
  return `${value}門目`;
}

const Quiz = (props: QuizProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement>(
    new Audio(`../../../medias/${props.musicKey}.wav`)
  );

  const classes = useStyles();

  return (
    <div className="quiz">
      <div className="quiz__header">
        <h2 className="quiz__header__title">Quiz: {valuetext(1)}</h2>
      </div>

      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
      <div className="quiz__desc">
        <h2>Level: {props.level}</h2>
        <h2>key: {props.musicKey} </h2>
      </div>

      <div className="quiz__sound">
        <Card className={classes.notecard}>
          <CardContent className={classes.note}>
            <div className="quiz__sound__note">
              <MusicNoteIcon fontSize="large"></MusicNoteIcon>
            </div>
          </CardContent>
        </Card>

        <Card className={classes.notecard}>
          <CardContent className={classes.note}>
            <div className="quiz__sound__note">
              <MusicNoteIcon fontSize="large"></MusicNoteIcon>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="quiz__piano">
        <Piano></Piano>
      </div>

      <div className="quiz__footer">
        <Fab color="primary" aria-label="back">
          <ArrowLeftIcon />
        </Fab>
        <Fab color="primary" aria-label="next">
          <ArrowRightIcon />
        </Fab>
      </div>
    </div>
  );
};

export default Quiz;
