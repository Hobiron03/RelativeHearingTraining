import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext.js";
import Piano from "../Piano/Piano";
import QuizTop from "../QuizTop/QuizTop";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ClearIcon from "@material-ui/icons/Clear";
import "./Quiz.scss";
import { SET_PRESSED_NOTE } from "../../actions/index";

interface QuizProps {
  musicKeyName?: string;
  level?: string;

  currentQuestion?: number;
  mainSound?: HTMLAudioElement;
  questionSound?: HTMLAudioElement;
  onQuizEnd: () => void;
}
//ここでクイズを作っておく？
interface Question {
  id: number;
  sound: HTMLAudioElement;
  soundName: string;
}
interface QuizData {
  keySound: HTMLAudioElement;
  keySoundName: string;
  questions: Array<Question>;
}

const Quiz = (props: QuizProps) => {
  const { state, dispatch } = useContext(AppContext);
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [mistakeNumber, setMistakeNumber] = useState<number>(0);
  const [quizData, setQuizData] = useState<QuizData>({
    keySound: state.noteSounds.C,
    keySoundName: "C",
    questions: [],
  });

  useEffect(() => {
    const init = () => {
      setQuizData(CreateQuizData());
    };
    init();

    dispatch({
      type: SET_PRESSED_NOTE,
      pressedNote: "",
    });
  }, []);

  useEffect(() => {
    CheckAnswer();
  }, [state.pressedNote.pressedNote]);

  const CheckAnswer = () => {
    if (quizData.questions[currentQuestionNumber - 1]) {
      if (
        state.pressedNote.pressedNote ===
        quizData.questions[currentQuestionNumber - 1].soundName
      ) {
        //正解
        setIsAnswered(true);
      } else if (state.pressedNote.pressedNote == "") {
        //回答なし
      } else {
        //不正解
        setMistakeNumber(mistakeNumber + 1);
      }
    }
  };

  const solveResult = () => {
    if (quizData.questions[currentQuestionNumber - 1]) {
      if (
        state.pressedNote.pressedNote ===
        quizData.questions[currentQuestionNumber - 1].soundName
      ) {
        return (
          <div className="quiz__correct">
            <p>正解！！！</p>
            <RadioButtonUncheckedIcon
              fontSize="large"
              color="secondary"
            ></RadioButtonUncheckedIcon>
          </div>
        );
      } else if (state.pressedNote.pressedNote == "") {
        return;
      } else {
        return (
          <div className="quiz__correct">
            <p>不正解...</p>
            <ClearIcon fontSize="large" color="primary"></ClearIcon>
          </div>
        );
      }
    }
  };

  const ReturnRondomSound = (): {
    sound: HTMLAudioElement;
    soundName: string;
  } => {
    const randomNum = Math.floor(Math.random() * (13 - 1) + 1);
    switch (randomNum) {
      case 1:
        return { sound: state.noteSounds.Gb, soundName: "Gb" };
      case 2:
        return { sound: state.noteSounds.G, soundName: "G" };
      case 3:
        return { sound: state.noteSounds.Ab, soundName: "Ab" };
      case 4:
        return { sound: state.noteSounds.A, soundName: "A" };
      case 5:
        return { sound: state.noteSounds.Bb, soundName: "Bb" };
      case 6:
        return { sound: state.noteSounds.B, soundName: "B" };
      case 7:
        return { sound: state.noteSounds.C, soundName: "C" };
      case 8:
        return { sound: state.noteSounds.Db, soundName: "Db" };
      case 9:
        return { sound: state.noteSounds.D, soundName: "D" };
      case 10:
        return { sound: state.noteSounds.Eb, soundName: "Eb" };
      case 11:
        return { sound: state.noteSounds.E, soundName: "E" };
      case 12:
        return { sound: state.noteSounds.F, soundName: "F" };
      case 13:
        return { sound: state.noteSounds.Fs, soundName: "Fs" };
    }
  };

  // TODO: Quizデータを作る処理を実装
  const CreateQuizData = (): QuizData => {
    const quizData = {
      keySound: state.noteSounds.C,
      keySoundName: "C",
      questions: [],
    };

    for (let i = 0; i < 10; i++) {
      const soundInfo: {
        sound: HTMLAudioElement;
        soundName: string;
      } = ReturnRondomSound();
      const question = {
        id: i,
        sound: soundInfo.sound,
        soundName: soundInfo.soundName,
      };
      quizData.questions.push(question);
    }

    setIsCreated(true);
    return quizData;
  };

  //矢印ボタンを押すと次の問題に進むgo or 前に戻るback
  const ChagneQuestion = (dirction: string) => {
    if (dirction === "go") {
      // setIsAnswered(false);
      if (currentQuestionNumber === 10) {
        //go to result
        setIsShowResult(true);
        console.log();
      } else {
        setCurrentQuestionNumber(currentQuestionNumber + 1);
      }
      dispatch({
        type: SET_PRESSED_NOTE,
        pressedNote: "",
      });
    } else {
      currentQuestionNumber === 1
        ? setCurrentQuestionNumber(1)
        : setCurrentQuestionNumber(currentQuestionNumber - 1);
      // setCurrentQuestionSound(returnCurrenQuestionSound());
      dispatch({
        type: SET_PRESSED_NOTE,
        pressedNote: "",
      });
    }
  };

  const returnCurrenQuestionSound = () => {
    if (quizData.questions[currentQuestionNumber - 1]) {
      return quizData.questions[currentQuestionNumber - 1].sound;
    } else {
      return state.noteSounds.C;
    }
  };

  const ShowResult = () => {
    if (isShowResult) {
      return <p>End</p>;
    } else {
      return;
    }
  };

  return isCreated ? (
    <div className="quiz">
      <QuizTop
        musicKey={quizData.keySoundName}
        level={"初級"}
        mistakeNumber={mistakeNumber}
        questionSound={returnCurrenQuestionSound()}
        currentQuestionNumber={currentQuestionNumber}
        mainSound={quizData.keySound}
      ></QuizTop>

      {solveResult()}

      <div className="quiz__piano">
        <Piano></Piano>
      </div>

      <div className="quiz__footer">
        <Fab
          color="primary"
          aria-label="back"
          onClick={() => ChagneQuestion("back")}
        >
          <ArrowLeftIcon />
        </Fab>
        <Fab
          color="primary"
          aria-label="go"
          onClick={() => ChagneQuestion("go")}
          disabled={!isAnswered}
        >
          <ArrowRightIcon />
        </Fab>
      </div>
      {ShowResult()}
    </div>
  ) : (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default Quiz;
