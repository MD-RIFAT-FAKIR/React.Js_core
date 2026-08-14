import { MoveUpRight } from 'lucide-react';

const LeftContent = () => {
    return (
        <div className="h-full w-1/4  flex flex-col justify-between px-5">

            <div>
                <h1 className="uppercase text-3xl/11 mb-5 font-extrabold">
                    prosopectinve <br /> coustomer <br />
                    segmaentation
                </h1>
                <p className='mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quisquam quis praesentium recusandae fuga eius elit.?</p>
            </div>

            <div className='m-2'>
                <MoveUpRight size={32} />
            </div>

        </div>
    )
}

export default LeftContent