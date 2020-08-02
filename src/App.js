import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "../src/components/ui/Header";
import CharacterGrid from "../src/components/characters/CharacterGrid";
import axios from "axios";
import Search from "./components/ui/Search";

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState("")

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${name}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItem();
  }, [name])

  return (
    <div className="Container">
      <Header/>
      <Search getQuery={(name)=>setName(name)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
