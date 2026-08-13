//child component of App components
import { Bookmark } from 'lucide-react';

const Card = ( {job} ) => {

    return (  
        <div className="card-container">
            <div className="card">

            <div className="header">
                <div>
                    <img src={job.img} alt="" />
                </div>
                <div>
                    <button> <span>save</span> <Bookmark size={16} strokeWidth={0.5} /></button>
                </div>
                
            </div>

            <div className="job-info">
                <div>
                    <h5 className="comp-name">
                        {job.company} <span>{job.posted}</span> 
                    </h5>
                </div>
                <div>
                    <h3 className="job-title">{job.title}</h3>
                </div>
                <div className='job-desc'>
                    <p className="job-type">{job.type}</p>
                    <p className="pos-level">{job.level}</p>
                </div>
            </div>

            <div className="footer">
                <div>
                    <p className="hourlyRate">{job.rate}</p>
                    <p className='location'>{job.location}</p>
                </div>
                <div>
                    <button>Apply now</button>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Card