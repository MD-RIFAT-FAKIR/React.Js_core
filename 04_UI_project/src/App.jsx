import PageSection from '../src/components/PageSection'

const App = () => {
  const Customars = [
    {
      id:1,
      img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      color:"blue",
      opinion:"Sattiesfied"
    },
    {
      id:2,
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      color:"orange",
      opinion:"Awsome"
    },
    {
      id:3,
      img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      color:"cyan",
      opinion:"Incredable"
    },
    {
      id:4,
      img:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      color:"pink",
      opinion:"Observation"
    },
    {
      id:5,
      img:"https://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHx3b3JraW5nfGVufDB8fDB8fHww",
      color:"yellow",
      opinion:"Great"
    },
    {
      id:6,
      img:"https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHx3b3JraW5nfGVufDB8fDB8fHww",
      color:"pink",
      opinion:"Ovipped"
    },
    {
      id:7,
      img:"https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHx3b3JraW5nfGVufDB8fDB8fHww",
      color:"green",
      opinion:"Sattiesfied"
    },
  ];
  return (
    <div className='h-full w-full'>
        <PageSection customer={Customars}/>
    </div>
  )
}

export default App