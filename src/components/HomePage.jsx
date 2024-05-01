import Header from "./Header"
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

const Homepage = ({title, workers}) => {
  return (
    <div className="homepage">
        <Header topic={title}/>
        <SearchBar/>
        <EmployeeList staff={workers}/>
    </div>
  )
}
export default Homepage