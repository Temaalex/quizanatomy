import data from '../../bd.json';
import Doctor from '../../pictures/Doctor.png';

const TheEnd = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor" >{data.contents[105].textDoctor}</p>
      </div>
      <img className="Doctor"src={Doctor}alt="Doctor"/>
    </div>
    </main>
  )
  
}

export default TheEnd