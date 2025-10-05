import data from '../../bd.json';
import Doctor from '../../pictures/Doctor.png';

const Error = () => {
  let text = data.contents[0].error_text_Doctor;
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor" key='1'>{text}</p>
      </div>
      <img className="Doctor" src={Doctor} alt="Doctor"/>
    </div>
      <div className='words'></div>
    </main>
  )
  
}

export default Error