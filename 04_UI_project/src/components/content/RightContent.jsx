import RightCard from '../content/RightCard'

const RightContent = ({customer}) => {
    console.log("rightcontent", customer);
    return (
        <div id="rihtcontent" className="overflow-x-auto h-full w-3/4 p-4 flex gap-4 flex-nowrap">
            {customer.map((item) => (
                <RightCard key={item.id} customer={item}/>
            ))}
        </div>
    )
}

export default RightContent