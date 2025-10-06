import data from '../../bd.json';
import Doctor from '../../pictures/Doctor.png';
import MapOneBacteria from '../../pictures/MapOne.png'

const MapOne = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor" >{data.contents[72].textDoctor}</p>
      </div>
      <img className="Doctor"src={Doctor}alt="Doctor"/>
    </div>
      <img className="maps"
        src={MapOneBacteria}
        alt="Maps"
        />
    </main>
  )
  
}

export default MapOne