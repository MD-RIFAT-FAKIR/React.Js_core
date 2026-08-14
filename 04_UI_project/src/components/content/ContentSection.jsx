import LeftContent from '../content/LeftContent.jsx'
import RightContent from '../content/RightContent.jsx'

const ContentSection = ({customer}) => {
    console.log("contestSection", customer);
    return (
        <div className='h-full w-full flex gap-5 px-15 py-7'> 
            <LeftContent />
            <RightContent customer={customer}/>
        </div>
    )
}

export default ContentSection