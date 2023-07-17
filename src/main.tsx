import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TopNavi from './components/top-navigate.tsx'
import ModelMain from './contents/model-main.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='w-full h-screen flex flex-col bg-gradient-radial from-gray-800 to-black justify-between items-center'>
      <TopNavi/>
      <ModelMain/>
    </div>
  </React.StrictMode>,
)
