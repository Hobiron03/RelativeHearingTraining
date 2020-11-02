const FetchSoundData = () => {
  //firebase
  //mock
  const Gb = new Audio("../../../medias/Gb（F♯）.wav");
  const G = new Audio("../../../medias/G.wav");
  const Ab = new Audio("../../../medias/Ab（G♯）.wav");
  const A = new Audio("../../../medias/A.wav");
  const Bb = new Audio("../../../medias/Bb（A♯）.wav");
  const B = new Audio("../../../medias/B.wav");
  const C = new Audio("../../../medias/C.wav");
  const Db = new Audio("../../../medias/Db（C♯）.wav");
  const D = new Audio("../../../medias/D.wav");
  const Eb = new Audio("../../../medias/Eb（D♯）.wav");
  const E = new Audio("../../../medias/E.wav");
  const F = new Audio("../../../medias/F.wav");
  const Fs = new Audio("../../../medias/F♯（Gb）.wav");

  return {
    Gb,
    G,
    Ab,
    A,
    Bb,
    B,
    C,
    Db,
    D,
    Eb,
    E,
    F,
    Fs,
  };
};

export default FetchSoundData;
