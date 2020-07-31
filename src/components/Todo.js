import React from 'react'

function Todo({ id, event, item, onCheck }) {
    return (
        <>
            <li>
                <input type="html" id={id} value={item}
                        // onChange={() => { modif(event.target.value) }}

                    // onChange={(e) => { setUpdate(e.target.value, item.key) }}
                />

                {/* {item} */}
                <button onClick={() => { onCheck(id) }}> Delete</button>
                {/* <button onClick={() => { onCheck(id) }}> Modify</button> */}

            </li>

        </>
    )
}
export default Todo;