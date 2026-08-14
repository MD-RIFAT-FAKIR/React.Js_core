import { MoveRight } from 'lucide-react';

const RightCard = ({customer}) => {

    return (
        <div className="h-full w-52 shrink-0 overflow-hidden relative rounded-2xl">
                <img className="w-full h-full object-cover " src={customer.img} alt="" />
                    
            <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'  >
                <h1 style={{backgroundColor:customer.color}} className=" w-9 h-9 rounded-full flex items-center justify-center text-1xl font-semibold">{customer.id}</h1>

                <div>
                    <p className='text-cyan-50 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos debitis nobis eum!
                    </p>

                    <div className='flex justify-between items-center
                    '>
                        <button style={{backgroundColor:customer.color}} className='text-sm font-semibold  px-14 py-2 rounded-full'>{customer.opinion}</button>
                        <MoveRight className='text-cyan-50' size={18}/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default RightCard