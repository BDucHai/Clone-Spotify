import { useContext } from "react"
import { Songs } from "../Context"

export default function DetailSong(){
    const {song} = useContext(Songs)
    console.log(song.links.images[0])
    console.log(song.links.images[1])
    return(
        <div className="col-span-1 p-3 bg-slate-700">
            <div className="text-[#38bdf8] font-bold text-start">Now playing</div>
            <div className="text-[#A3A3A3] text-2xl text-start">{song.name}</div>
            <div className="flex items-center justify-center mt-16">
                <img className="w-64" src={song.links.images[0].url} alt=""/>
            </div>
            <div className="flex items-center h-24 justify-evenly">
                <img className="w-16 rounded-full" src={song.links.images[1].url} alt=""/>
                <span className="text-xl text-white ">Alanaaaa</span>
            </div>
        </div>
    )
}