import { useState } from 'react';
import './Tag.css'

function Tag ()
{
    const [tags, setTags] = useState([])

    function handleKeyDown(e)
    {
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index)
    {
        setTags(tags.filter((el, i) => i !== index))
    }

    return(
        <>
        <div>
            <h2>Enter some tags</h2>
        </div>
        
        <div className='tags-input-container'>
            {/* <div className='tag-item'>
                <span className='text'>hello</span>
                <span className='close'>&times;</span>
            </div> */}
            { tags.map((tag, index) => (
                <div className='tag-item' key={index}>
                    <span className='text'>{tag}</span>
                    <span className='close' onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className='tags-input' placeholder='add tag' />
        </div>
        </>
    )
}

export default Tag;