import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Config.scss";

const Config = () => {
  const [musicKey, setMusicKey] = useState<string>("C");
  const [musicKeys, setMusicKeys] = useState<Array<string>>([
    "C",
    "C# (D♭)",
    "D",
    "D# (E♭)",
    "E",
    "F",
    "F# (G♭)",
    "G",
    "A",
    "A# (B♭)",
    "B",
  ]);

  const ChangeKey = (key: string) => {
    setMusicKey(key);
  };

  return (
    <div className="config">
      <h2>トレーニング方法</h2>
      <p>
        キーの主音（KeyがCならド）と、もう１つ別の音が鳴ります。主音の音を手掛かりにどの音か当ててみてください。
      </p>
      <h2>設定</h2>
      <p> トレーニングの設定を行います。</p>
      <div className="config__key-setting">
        <h3>Key: {musicKey}</h3>
        <div className="config__key-setting__button">
          {musicKeys.map((mk, index) => {
            if (mk === musicKey) {
              return (
                <Button
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
      <Button variant="contained" color="secondary" fullWidth={true}>
        スタート
      </Button>
    </div>
  );
};

export default Config;
