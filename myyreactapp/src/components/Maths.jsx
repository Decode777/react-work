

const pi=3.1415962;

function doublePi(){
    return pi*2;
}

function TriplePi(){
    return pi*3;
}
export const MathsComponent = () => {
    return (
    <>
    <div>
    <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{TriplePi()}</li>
    </ul>   
    </div>
    </>
    )

}

export default pi;  // we can have only 1 default export
export { TriplePi, doublePi };
