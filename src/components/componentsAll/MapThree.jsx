import data from '../../bd.json';
import Doctor from '../../pictures/Doctor.png';
import mapThree from '../../pictures/MapThree.png'

const MapThree = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor" >{data.contents[89].textDoctor}</p>
      </div>
      <img className="Doctor"src={Doctor}alt="Doctor"/>
    </div>
      <img className="maps"
        src={mapThree}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapThree