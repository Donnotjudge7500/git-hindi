import RenderArray from "./arrayRender";
function Sukku() {
    return (
        <>
            <h2>Hello Shivakshi</h2>
            <div className="bhushan">
                <ul>
                    <li>Sakshi</li>
                    <li>Shiv</li>
                    <li>Shivakshi</li>
                    <li>Sukku</li>
                    <li>Chidiya</li>
                </ul>
            </div>
            <RenderArray />
            <div>
                { true ? ('bhushan') : ('singh') }
                {/* We can also use the ternary operator in place of ifelse statement. */}
            </div>
            <div>
                { true && 'Sakshi Shiv' }
                {/* If we don't have else statement then we can use this method to tackle ifelse condition. */}
            </div>
        </>
    )
}

export default Sukku;