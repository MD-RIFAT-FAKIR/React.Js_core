import { useState } from "react"

const LeftSection = () => {

    let [addNote, setNote] = useState({
        title:'',
        description:''
    })

    
    let handelInput = (e) => {
        setNote({
            ...addNote,
            [e.target.name]:e.target.value
            
        })
    }


    const [allNotes, setAllNote] = useState([]);

    let handelSubmission = (e) => {
        e.preventDefault();
        setAllNote([
            ...allNotes,
            addNote
        ])

        setNote({
            title:'',
            description:''
        })
    }


    const Remove = (idx) => {
        let getAllNote = [...allNotes]
        getAllNote.splice(idx,1);

        setAllNote(getAllNote)

    }




    return (

        <div className="h-screen w-full flex ">
            <div className="h-full w-1/2 flex items-center justify-center bg-blue-400">
            <form onSubmit={handelSubmission} className= "flex justify-between rounded-2xl flex-col items-center h-96 w-96 bg-slate-700 border rounded- border-slate-600 p-8 shadow-xl">
                
                <div>
                    <input
                        type="text"
                        name="title"
                        value={addNote.title}
                        onChange={handelInput}
                        placeholder="Your name"
                        required
                        className=" w-full h-15 rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                    />
                     <textarea
                        name="description"
                        value={addNote.description}
                        onChange={handelInput}
                        placeholder="Write note..."
                        className="mt-5 h-40  w-full rounded-lg bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition resize-none"
                    />
                </div>
                <button className=" w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-2 rounded-lg transition active:scale-[0.98]">Add Note</button>
            </form>
            </div>





            <div id="noteSection" className="h-full w-1/2 bg-slate-700 flex flex-wrap overflow-scroll items-center justify-center">
                
                {allNotes.map( (note, idx) => {
                    return (
                        <div key={idx} className="h-72 w-52 bg-sky-500 flex flex-col  justify-between m-5 rounded-2xl shrink-0 p-4">
                            <div>
                                <h1 className="text-2xl">{note.title}</h1>
                                <p className="text-sm mt-2">{note.description}</p>
                                </div>
                            <button onClick={() => Remove(idx) } className="bg-slate-800 text-blue-500 rounded py-1">Delete</button>
                        </div>
                    )
                })}

            </div>


        </div>

        
    )
}

export default LeftSection