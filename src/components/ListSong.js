import { useContext, useEffect, useState } from "react"
import { Songs } from "../Context"

export default function ListSong(){
    const {DataSongs, handleSetSong, song} = useContext(Songs);
    const [idSong ,setIdSong] = useState(0);

    const handleIdSong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() =>{
        setIdSong(song.id)
    },[song])
    return(
        <div className="col-span-2 overflow-hidden overflow-y-scroll">
            <table className="relative w-full table-auto">
                <thead className="sticky top-0 h-12 text-white bg-slate-700">
                    <tr>
                        <th className="w-[10%] min-w-[30px]">#</th>
                        <th className="w-[60] text-left">Title</th>
                        <th className="w-[20%]">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"/></th>
                    </tr>
                </thead>
                <tbody className=" mt-4 bg-[#1e293b] text-center">
                    {DataSongs.map((song,index) =>(
                        
                    <tr key={index} className={`h-12 text-[#A3A3A3] hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`} onClick={() => handleIdSong(song.id)}>
                        <td>{index+1}</td>
                        <td className="text-start">{song.name}</td>
                        <td>{song.author}</td>
                        <td><a href={song.url}><i className="fa fa-download"></i></a></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}