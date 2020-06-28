import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
        <div>
            <form>
                <input 
                    type="text"
                    value={name.firstName}
                    placeholder="firstName" 
                    onChange={(e) => setName({...name, firstName: e.target.value})} 
                />
                <input 
                    type="text" 
                    value={name.lastName}
                    placeholder="lastName"
                    onChange={e => setName({...name, lastName: e.target.value})}
                />
            </form>
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
