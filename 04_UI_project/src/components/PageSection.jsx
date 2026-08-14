import NavBar from '../components/navbar/NavBar'
import ContentSection from '../components/content/ContentSection'

const PageSection = ({customer}) => {
    console.log('pagesectein:', customer);
    return (
        <div className='h-full w-full'>
            <NavBar />
            <ContentSection customer={customer}/>{}
        </div>
    )
}

export default PageSection