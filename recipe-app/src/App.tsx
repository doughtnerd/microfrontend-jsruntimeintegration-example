import React from 'react'

export const App = (): JSX.Element => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Example dish"/>

                <label htmlFor="name">Description</label>
                <input type="text" id="description" placeholder="A real yummy example dish"/>

                <label htmlFor="name">ImageURL</label>
                <input type="text" id="imageUrl" placeholder="http://google.com/images/some-random-image"/>

                <label htmlFor="name">ingredients</label>
                <input type="text" id="ingredients" placeholder="tomato,onion,beef" />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
