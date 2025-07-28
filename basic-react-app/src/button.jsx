// Handling Click EVents
function doSomething(){
    console.log("Button was Clicked");

}

export default function Button(){
    return <div>
        <button onClick={doSomething}>clicked</button>
    </div>
}