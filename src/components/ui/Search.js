import React, {useState} from 'react'

const Search = ({getQuery}) => {
  const [text, setText] = useState('')

  const onChange = (name) => {
    setText(name)
    getQuery(name)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search
