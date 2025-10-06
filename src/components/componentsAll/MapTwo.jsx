import data from '../../bd.json';
import Doctor from '../../pictures/Doctor.png';
import MapOneCaries from '../../pictures/MapTwo.png'

const MapTwo = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor" >{data.contents[78].textDoctor}</p>
      </div>
      <img className="Doctor"src={Doctor}alt="Doctor"/>
    </div>
      <img className="maps"
        src={MapOneCaries}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapTwo