import { useEffect, useState } from "react";
import Collection from "./Collection.tsx";
export default function CategoryList({onClick}:{onClick : (category:string) => void}) {
    const [data,setData] = useState<CategoryResponse | null>(null)
    useEffect(() => {
        fetch("https://opentdb.com/api_category.php").then(response => response.json()).then(json => setData(json));
    },[])
    return <div>{
            data ? <Collection items={data.trivia_categories.map(c => c.name)} onClick={onClick}/> : ""}
        </div>
}

interface CategoryResponse {
    trivia_categories: Category[]
}

interface Category {
    id: number,
    name: string
}