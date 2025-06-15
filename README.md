# Item List Manager - HackerRank REACT Interview Question

 \n deployed vercel app: <https://react-hackerrank-itemlist.vercel.app/>

# **Detailed Requirements**


1. When the application loads, it should display an empty list.
2. The input field should accept user text input.
3. When the button is clicked:
4. The text from the input field should be added to the list.
5. The input field should be cleared.
6. If the input field is empty and the button is clicked, nothing should be added to the list.

# **Sample Interaction**

## **Initial State**

* The list is empty.
* The input field is empty.

## **User Action 1**

* User types "First Item" in the input field.
* User clicks "Add Item" button.
* The list displays "First Item".

## **User Action 2**

* User types "Second Item" in the input field.
* User clicks "Add Item" button.
* The list displays:
  * "First Item"
  * "Second Item"

## Simplest Solution

```javascript
import { useState } from 'react'

function App() {
  // Initial state: empty list and empty input field
  const [list, setList] = useState<string[]>([])
  const [input, setInput] = useState('')

  return (
    <div>
      {/* Input field for user text */}
      <input 
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={() => {
        // Only add if input is not empty
        if (input) {
          // Add text to list
          setList([...list, input])
          // Clear input field
          setInput('')
        }
      }}>Add Item</button>

      {/* Display the list */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
```

 \n 