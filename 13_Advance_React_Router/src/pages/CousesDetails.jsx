import { useNavigate, useParams } from "react-router-dom"

const CousesDetails = () => {
  let   { values } = useParams()

  let navigate = useNavigate()

  const home = () => {
    navigate('/');
  }

  return (
    <div className="h-ful w-full flex items-center text-6xl justify-center">

        <button onClick={home} className="bg-amber-400 px-4 py-2 rounded text-sm border-0 active:scale-95 ">Home</button>

        Courser Deatails {values}
    </div>
   
  )
}



export default CousesDetails