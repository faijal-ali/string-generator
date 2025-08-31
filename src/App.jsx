import React from "react";

function App() {
  // States
  const [length, setLength] = React.useState(0);
  const [password, setPassword] = React.useState("");

  // Characters to use for password generation
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  // Function to generate random password
  const generatePassword = () => {
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }

    setPassword(result);
  };

  return (
    <div className="bg-gray-900 h-screen w-screen flex justify-center items-center">
      <div className="w-[1000px] h-56 bg-black rounded-md flex flex-col justify-center items-center gap-y-10">
        
        {/* Heading */}
        <h1 className="text-lg font-bold italic text-green-500">
          Random password generator
        </h1>
        
        {/* Input & Button Section */}
        <div className="flex gap-x-5">
          {/* Input for password length */}
          <input
            type="number"
            className="w-96 h-10 bg-grey-400 rounded-md text-white text-center border-2 border-green-500 italic"
            onChange={(e) => setLength(e.target.value)}
            placeholder="Type number of characters"
          />

          {/* Generate button */}
          <button
            className="w-25 h-10 bg-green-500 rounded-md text-black font-bold hover:bg-green-600 italic"
            onClick={generatePassword}
          >
            Generate
          </button>

          {/* Display generated password */}
          <input
            type="text"
            className="w-96 h-10 bg-grey-400 rounded-md text-white text-center border-2 border-green-500 italic"
            value={password}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
