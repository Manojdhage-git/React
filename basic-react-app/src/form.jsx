// Event Objects
function formSubmit(event){
    event.preventDefault();
    console.log("Form is submitted");

}

export default function Form(){
    return(
        <form>
            <input type="text" placeholder="Enter something" />
            <button onClick={formSubmit}>Submit</button>
        </form>
    )
}