import React, { useState } from "react";
import { ReactSearchSuggestionsInput } from "../src/components/react-search-suggestions-input";
import { Suggestion } from "../src/interfaces/suggestion";

export const Content = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions] = useState<Suggestion[]>([
  { id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b811-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b812-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b813-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b814-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b815-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b816-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b817-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b818-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b819-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b81a-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b81b-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b81c-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b81d-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b81e-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b81f-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b820-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b821-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b822-9dad-11d1-80b4-00c04fd430c8' },
  { id: '6ba7b823-9dad-11d1-80b4-00c04fd430c8' },
])
  return (
    <div style={{ width: '250px'}}>
      <ReactSearchSuggestionsInput value={searchValue} onChange={setSearchValue} aria-label="hii" suggestions={suggestions} />
    </div>
  )
}
