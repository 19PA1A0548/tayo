import Canvas from "./Canvas";
import Map from "./Map";
export default function CandM(){
    return(
        <div>
            <Canvas />
            <h1 style={{textAlign:"center"}}>
                Leaflet Map
            </h1>
            <Map/>
        </div>
    )
}