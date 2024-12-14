import { useState } from 'react'
import Timer from './Timer'
import Settings from './settings/Settings';
import SettingsContext from './settings/SettingsContext';

function App() {
  const [isSettings, SetisSettings] = useState(false);
  const [WorkTime, setWorkTime] = useState(25);
  const [PauseTime, setPauseTime] = useState(5);
  const [isStop, SetisStop] = useState(true);
  return (
    <main>
      <SettingsContext.Provider value={{
        isSettings,
        SetisSettings,
        WorkTime,
        PauseTime,
        setWorkTime,
        setPauseTime,
        isStop,
        SetisStop
      }}>
        <div style={{ marginTop: '100px' }}>
          {isSettings ? <Settings /> : <Timer />}
        </div>
      </SettingsContext.Provider>
    </main>
  )
}

export default App
