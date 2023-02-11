
import PersonsListContainer from './Persons/PersonsListContainer'
import "../index.css"





function HomePage({}) {
  return (
    <div>
        <h1 className="text-3xl font-bold my-10 font-mono">Esta es la homepage!</h1>
        <PersonsListContainer firstName="asd" lastName="dad" smallImage="dsada" city="alguna ciudad" country="dsada"/>
    </div>
  )
}

export default HomePage
