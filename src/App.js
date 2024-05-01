import "./App.css";
// This is the Main [CEO] file -->  PRIMARYstate LivesHere
//---> Components are housed here
//---> Hooks === useState, useEffect
import Homepage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";

function App() {
  const topics = ["Employee Directory", "Employee"]
  // ------> Data that will be distributed through to the components below


// 1.Make Employee Data
    let allEmployees = [
      {
        name: "James King",
        position: "President [CEO]",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1wbG95ZWUlMjBoZWFkc2hvdHN8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "Julie Taylor",
        position: "VP of Marketing",
        image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1wbG95ZWUlMjBoZWFkc2hvdHN8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "Eugene Lee",
        position: "CFO",
        image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWUlMjBoZWFkc2hvdHN8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "Johanne Williams",
        position: "VP of Engineering",
        image: "https://images.unsplash.com/photo-1573878222998-40b24a653ac8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVtcGxveWVlJTIwaGVhZHNob3RzfGVufDB8fDB8fHww"
      },
      {
        name: "Ray Moore",
        position: "VP of Sales",
        image: "https://images.unsplash.com/photo-1559192823-e1d8e87def54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlJTIwaGVhZHNob3RzfGVufDB8fDB8fHww"
      },
      {
        name: "Paul Jones",
        position: "QA Manager",
        image: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGVtcGxveWVlJTIwaGVhZHNob3RzfGVufDB8fDB8fHww"
      }
    ]
    
  return (
    // ----->What we wanna see displayed on screen
    <div className="App">
      <Homepage title={topics[0]}  workers={allEmployees} />
      {/* --------passing state to other components {props:} */}
      <EmployeePage title={topics[1]}  workers={allEmployees}/>
      {/* ----------------------------------Components */}
    </div>
  );
}

export default App;