import { useState } from 'react'
import { Route } from 'wouter'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './base.css'
import './app.css'
import { AboutPage } from '../routes/about/about.tsx'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/vite-starter">
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR - anytime you want to . . .
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      </Route>
      <Route path="/">
        <p className="read-the-docs">
          Display Test
        </p>
      </Route>
    </div>
  )
}

