import React, { useEffect, useContext, useState } from "react";
import AppContext from "../../contexts/AppContext.js";
import "./QuizTop.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Slider from "@material-ui/core/Slider";

interface QuizProps {
  musicKey: string;
  level?: string;
  currentQuestionNumber: number;
  mainSound: HTMLAudioElement;
  questionSound: HTMLAudioElement;
}

// const mockQuizProps: QuizProps = {
//   musicKey: "C",
//   level: "初級",
//   currentQuestionNumber: 3,
//   // mainSound?: HTMLAudioElement,
//   // questionSound?: HTMLAudioElement
// };

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

const QuizTop = (props: QuizProps) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);

  const [isKeyNoteActive, setIsKeyNoteActive] = useState<boolean>(false);
  const [isQuizNoteActive, setIsQuizNoteActive] = useState<boolean>(false);
  // const [mainSoundAudio, setMainSoundAudio] = useState<HTMLAudioElement>(
  //   new Audio(`../../../medias/${mockQuizProps.musicKey}.wav`)
  // );
  const [mainSoundAudio, setMainSoundAudio] = useState<HTMLAudioElement>(
    props.mainSound
  );
  const [
    questionSoundAudio,
    setQuestionSoundAudio,
  ] = useState<HTMLAudioElement>(props.questionSound);

  useEffect(() => {
    //クイズ開始
    QuizController();
  }, []);

  useEffect(() => {
    console.log(questionSoundAudio === props.questionSound);
    setQuestionSoundAudio(props.questionSound);
    QuizController();
  }, [props.currentQuestionNumber]);

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
    <div>
      <div className="quiz__header">
        <h2 className="quiz__header__title">
          Quiz: {props.currentQuestionNumber}
        </h2>
      </div>
      {/* TODO: Sliderの値を変更する処理をかく */}
      <Slider
        defaultValue={1}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        value={props.currentQuestionNumber}
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
          onClick={() => {
            PlayMainSound();
          }}
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
          onClick={() => PlayQuestionSound()}
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
    </div>
  );
};

export default QuizTop;
