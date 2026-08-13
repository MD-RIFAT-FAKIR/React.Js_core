//parrent component
import Card from "./Card"

const App = () => {
  const JobList = [
  {
    id: 1,
    company: "Amazon",
    img: "data:image/png;base64,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",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior level",
    rate: "$120/h",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    company: "Google",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqBCl92-9ug8ad3PHtsqtNUKg7qhSw-zZBAyfDhu2rQ&s=10",
    posted: "2 days ago",
    title: "Product Designer",
    type: "Full-time",
    level: "Senior level",
    rate: "$135/h",
    location: "Mountain View, CA",
  },
  {
    id: 3,
    company: "Microsoft",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUY785M4RB_HMMwprmhTrmTFcIni8_MSYja7q9hSq3g&s",
    posted: "1 day ago",
    title: "Frontend Engineer",
    type: "Full-time",
    level: "Mid level",
    rate: "$110/h",
    location: "Redmond, WA",
  },
  {
    id: 5,
    company: "Meta",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqHEvWv-5N4c71IXMSDxMHF1dSrqA7WNbtzeK1KC4ug&s=10",
    posted: "4 days ago",
    title: "React Developer",
    type: "Full-time",
    level: "Mid level",
    rate: "$125/h",
    location: "Menlo Park, CA",
  },
  {
    id: 6,
    company: "Netflix",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNoES7EF7nAjyN7uiSIveFmc0W0kICDuuKsQ1RCF9Ag&s=10",
    posted: "6 days ago",
    title: "UX Researcher",
    type: "Full-time",
    level: "Senior level",
    rate: "$130/h",
    location: "Los Gatos, CA",
  },
  {
    id: 7,
    company: "Adobe",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bJ2b4jIfni6V3cISTXw_nr1L8RrXgc2m5g_ChwEX_A&s=10",
    posted: "2 days ago",
    title: "UI Designer",
    type: "Part-time",
    level: "Mid level",
    rate: "$95/h",
    location: "San Jose, CA",
  },
  {
    id: 8,
    company: "NVIDIA",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcQw1GSAPvvAnUxGaESdOws3UA3wRcEq1mG4qfNd_1A&s=10",
    posted: "1 day ago",
    title: "Frontend Developer",
    type: "Full-time",
    level: "Senior level",
    rate: "$140/h",
    location: "Santa Clara, CA",
  },
  {
    id: 9,
    company: "Tesla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFHlLjYnU42xf_QBPuZuPJVHYq-xegC5NgaHeZyrZ2w&s=10",
    posted: "7 days ago",
    title: "Product Designer",
    type: "Full-time",
    level: "Mid level",
    rate: "$115/h",
    location: "Austin, TX",
  },
  {
    id: 10,
    company: "OpenAI",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56Wxc7iBPESwrOshf5Y3b-GMGLGHqsZtcAk66zKvK3A&s=10",
    posted: "3 days ago",
    title: "UX Engineer",
    type: "Full-time",
    level: "Senior level",
    rate: "$150/h",
    location: "San Francisco, CA",
  },
];

  return (
    <>
      {JobList.map( (job) => {
        return(
          <Card key = {job.id} job = {job}/>
        )
      })}
    </>
  )
}

export default App