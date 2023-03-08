import React, { useState, useEffect } from "react";

function App() {
  const [memesData, setMemesData] = useState(null);
  const [meme, setMeme] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setMemesData(data);
      });
    getRandomImage();
  }, []);
  const getRandomImage = () => {
    const image =
      memesData &&
      memesData.data.memes[
        Math.floor(Math.random() * memesData.data.memes.length)
      ];
    setMeme(image);
  };
  useEffect(() => {
    getRandomImage();
  }, [memesData]);

  return (
    <main className="max-w-[550px] mx-auto max-h-screen ">
      <nav
        className="flex items-center justify-between w-full text-white px-9 h-16"
        style={{
          background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
        }}
      >
        <img className="h-[26px]" src="./assets/logo.png" alt="" />
        <h4 className="font-medium text-[12px] leading-[14.25px]">
          React Course - Project 3
        </h4>
      </nav>
      <div className="flex flex-col items-center  m-4 gap-4">
        <div className="flex w-full gap-4 py-4 justify-center">
          <input
            onChange={(e) => setFirst(e.target.value)}
            className="px-2 w-[50%] h-9 border border-[#D5D4D8] rounded-[5px] focus:outline-none focus:border-4 focus:border-sky-400"
            placeholder=""
            value={first}
          />
          <input
            onChange={(e) => setSecond(e.target.value)}
            className="px-2 w-[50%] h-9 border border-[#D5D4D8] rounded-[5px]  focus:outline-none focus:border-4 focus:border-sky-400"
            value={second}
          />
        </div>
        <button
          style={{
            background:
              "linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%)",
          }}
          className="w-full h-10 rounded-[5px] text-xl"
          onClick={() => {
            getRandomImage();
          }}
        >
          Get a new meme image 🖼
        </button>
        <div
          className={`relative text-4xl font-bold h-[500px]  p-4 text-white`}
        >
          <p className="absolute top-4 inset-x-4 mx-auto text-center  text-auto">
            {first}
          </p>
          <img
            className="w-full object-contain h-full"
            src={meme?.url}
            alt=""
          />
          <p className="absolute bottom-4 inset-x-4 mx-auto text-auto text-center">
            {second}
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
