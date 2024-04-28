import './App.css'
import Card from './components/Card'

function App() {

  const technology = "ReactJS with SpringBoot";
  const description ="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  return (
    <>
      <h1 className="bg-green-400 pd shadow rounded-xl p-4 mb-4">
        Tailwind class
      </h1>
      <Card technology={technology} description={description} readMore="Learn more" />
      <Card technology={description} description={technology}  />


    </>
  )
}

export default App
