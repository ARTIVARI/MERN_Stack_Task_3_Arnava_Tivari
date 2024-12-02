import React, { useContext } from 'react';
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import ToggleBtn from './components/ToggleBtn';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    
  };

  return (
    <div style={appStyle}>
      <div className='flex flex-col gap-3 m-3 font-mono'>
      <div className='m-1 flex flex-row-reverse'>
        <button onClick={toggleTheme}>
          <ToggleBtn />
        </button>
      </div>

      <div className='flex sm:flex-row flex-col-reverse text-center'>
        <div className='flex flex-col justify-center items-center basis-1/2 gap-5'>
          <div>
            <h1 className='text-5xl font-bold'>Arnava Tivari</h1>
            <h1>MERN Stack Developer</h1>
          </div>

          <div className='flex flex-row gap-4'>
            <div>
              <FaSquareXTwitter />
            </div>
            <div>
              <FaSquareGithub />
            </div>
            <div>
              <FaLinkedin />
            </div>
          </div>

          <div>
            <p>With a passion for developing modern React web Apps for commercial businesses.</p>
          </div>

          <div>
            <button className='py-2 px-5 bg-amber-500 text-black text-xl rounded-full'>Resume</button>
          </div>
        </div>

        <div className='flex justify-center items-center basis-1/2'>
          <img className='rounded-full sm:h-96 h-52 sm:w-96 w-52' src='hero.png' alt="Hero" />
        </div>
      </div>
    </div>
    </div>
  );
};

// Wrap App in ThemeProvider
const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
