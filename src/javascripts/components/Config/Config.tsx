import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Config.scss";

interface ConfigProps {
  onQuizStart: () => void;
  onSetLevel: (level: string) => void;
  onSetKey: (musicKey: string) => void;
}

const Config = (props: ConfigProps) => {
  const [level, setLevel] = useState<string>("初級");
  const [levels] = useState<Array<string>>(["初級", "中級", "上級"]);
  const [musicKey, setMusicKey] = useState<string>("C");
  const [musicKeys] = useState<Array<string>>([
    "C",
    "C♯（D♭）",
    "D",
    "D♯(E♭)",
    "E",
    "F",
    "F♯(G♭)",
    "G",
    "A",
    "A♯（B♭）",
    "B",
  ]);

  const ChangeKey = (mk: string) => {
    setMusicKey(mk);
    props.onSetKey(mk);
  };

  const ChangeLevel = (level: string) => {
    setLevel(level);
    props.onSetLevel(level);
  };

  const levelDescription = () => {
    if (level === "初級") {
      return <span>メジャースケールの音のみ出題されます</span>;
    } else if (level === "中級") {
      return <span>メジャースケール外の音が3つ出題されます</span>;
    } else {
      return <span>全ての音が出題されます</span>;
    }
  };

  return (
    <div className="config">
      <h2>相対音感とは？？</h2>
      <p>
        相対音感は、基準となる音との相対的な音程によって音の高さを識別する能力である。音楽を美しいと感じるには、相対音感が必要であるから、ほとんどすべての人が本質的に持っている能力と言える。
        音楽を職業とする人は音楽教育の過程でソルフェージュの訓練を受けることが多いため、一般人より正確に身につけているのが一般的である。（Wiki）
        <br></br>
        相対音感を身につけると作曲や耳コピ、楽器の習得などに大いに役にたつこと間違いなしです！
      </p>
      <h2>トレーニング方法</h2>
      <p>
        キーの主音（KeyがCならド）と、もう１つ別の音が鳴ります。主音の音を手掛かりにどの音か当ててみてください。
      </p>
      <div className="config__key-setting">
        <h2>設定</h2>
        <h3>Key: {musicKey}</h3>
        <div className="config__key-setting__button">
          {musicKeys.map((mk, index) => {
            if (mk === musicKey) {
              return (
                <Button
                  key={index}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    ChangeKey(mk);
                  }}
                >
                  {mk}
                </Button>
              );
            } else {
              return (
                <Button
                  key={index}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    ChangeKey(mk);
                  }}
                >
                  {mk}
                </Button>
              );
            }
          })}
        </div>
      </div>

      <div className="config__select-level">
        <h3>
          レベル: {level}（{levelDescription()}）
        </h3>
        <div className="config__select-level__button">
          {levels.map((lv, index) => {
            if (lv === level) {
              return (
                <Button
                  key={index}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    ChangeLevel(lv);
                  }}
                >
                  {lv}
                </Button>
              );
            } else {
              return (
                <Button
                  key={index}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    ChangeLevel(lv);
                  }}
                >
                  {lv}
                </Button>
              );
            }
          })}
        </div>
      </div>

      <div className="config__start-button">
        <Button
          variant="contained"
          color="secondary"
          fullWidth={true}
          onClick={props.onQuizStart}
        >
          スタート
        </Button>
      </div>
    </div>
  );
};

export default Config;
