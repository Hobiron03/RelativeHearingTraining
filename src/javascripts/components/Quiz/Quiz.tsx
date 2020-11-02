import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext.js";
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
  currentQuestion?: number;
  mainSound?: HTMLAudioElement;
  questionSound?: HTMLAudioElement;
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
  nonactive: {
    opacity: 0,
  },
  active: { opacity: 100 },
  note: {},
});

function valuetext(value) {
  return `${value}門目`;
}

const Quiz = (props: QuizProps) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);

  const [isKeyNoteActive, setIsKeyNoteActive] = useState<boolean>(false);
  const [isQuizNoteActive, setIsQuizNoteActive] = useState<boolean>(false);
  const [mainSoundAudio, setMainSoundAudio] = useState<HTMLAudioElement>(
    new Audio(`../../../medias/${props.musicKey}.wav`)
  );
  const [questionSoundAudio, setQuestionSoundAudio] = useState<
    HTMLAudioElement
  >(new Audio(`../../../medias/${props.musicKey}.wav`));

  useEffect(() => {
    QuizController();
    console.log("Hello, Context");
    console.log(state);
  }, []);

  const QuizController = () => {
    setTimeout(() => {
      PlayMainSound();
      setTimeout(PlayQuestionSound, 1000);
    }, 1000);
  };

  const PlayMainSound = () => {
    setIsKeyNoteActive(true);
    if (mainSoundAudio.paused) {
      mainSoundAudio.play();
    } else {
      mainSoundAudio.currentTime = 0;
    }
  };

  const PlayQuestionSound = () => {
    setIsQuizNoteActive(true);
    if (questionSoundAudio.paused) {
      questionSoundAudio.play();
    } else {
      questionSoundAudio.currentTime = 0;
    }
  };

  return (
    <div className="quiz">
      <div className="quiz__header">
        <h2 className="quiz__header__title">Quiz: {props.currentQuestion}</h2>
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
        <div
          className={isKeyNoteActive ? classes.active : classes.nonactive}
          onClick={PlayMainSound}
        >
          <Card className={classes.notecard}>
            <CardContent className={classes.note}>
              <div className="quiz__sound__note">
                <MusicNoteIcon fontSize="large"></MusicNoteIcon>
              </div>
              <p className="quiz__sound__note-name">{props.musicKey}</p>
            </CardContent>
          </Card>
        </div>

        <div
          className={isQuizNoteActive ? classes.active : classes.nonactive}
          onClick={PlayQuestionSound}
        >
          <Card className={classes.notecard}>
            <CardContent className={classes.note}>
              <div className="quiz__sound__note">
                <MusicNoteIcon fontSize="large"></MusicNoteIcon>
              </div>
              <p className="quiz__sound__note-name">?</p>
            </CardContent>
          </Card>
        </div>
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
