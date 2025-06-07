import { useState } from 'react';
import './App.css';

function App() {
  // const [properties, setProperties] = useState({ icon: '', text: '' });
  const [bannerProps, setBannerProps] = useState({icon:'', Text:''});
  [
    {
      icon:"https://cdn-icons-png.flaticon.com/128/190/190411.png",
      massageText:'Successfully'
    }
  ]
  return (
    <>
      <div className="bg-indigo-900 text-center py-4 lg:px-4">
        <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <img src={bannerProps.icon}  />
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"></span>
          <span className="font-semibold mr-2 text-left flex-auto">{bannerProps.text}</span>
          <svg className="fill-current opacity-75 h-4 w-4" ><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4 ">
        {/* <button onClick={()=>setBannerProps({icon:button.icon,massageText:button.text})}></button> */}
        <button onClick={() => setBannerProps({ icon: "https://cdn-icons-png.flaticon.com/128/190/190411.png", text: "Success" })}>Success</button>
        <button onClick={() => setBannerProps({ icon: "https://cdn-icons-png.flaticon.com/128/3756/3756712.png", text: "Warning" })}>Warning</button>
        <button onClick={() => setBannerProps({ icon: "https://cdn-icons-png.flaticon.com/128/9426/9426995.png", text: "Error" })}>Error</button>
        <button onClick={() => setBannerProps({ icon: "https://cdn-icons-png.flaticon.com/128/9195/9195785.png", text: "Info" })}>Info</button>
      </div>
    </>
  );
}

export default App;
