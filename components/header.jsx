"use client"
import {useState, useEffect} from "react";

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleToggleChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getBackgroundColor = (topic) => {
    switch (topic) {
      case 'HTML':
        return '#FFF1E9';
      case 'CSS':
        return '#E0FDEF';
      case 'JS':
        return '#EBF0FF';
      case 'Accessibility':
        return '#F6E7FF';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <div className="header">
      {selectedTopic && (
        <span className='ResultsTopic'>
          <img 
            src={topicImages[selectedTopic]} 
            alt={selectedTopic} 
            style={{ 
              backgroundColor: getBackgroundColor(selectedTopic),
              width: '50px',
              height: '50px',
              borderRadius: '50%'
            }} 
          />
          <h4>{selectedTopic}</h4>
        </span>
      )}
      <img src={sun} alt="Sun Icon" />
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleToggleChange}
        />
        <span className="slider round"></span>
      </label>
      <img src={moon} alt="Moon Icon" />
    </div>
  );
}