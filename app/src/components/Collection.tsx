export default function Collection({items, onClick}:{items: string[], onClick : (category:string) => void}) {
    return <div style={{lineHeight:"2rem"}}>
      Choose a category:
        {items.map(item => <div style={{fontSize:"1rem", lineHeight:"1rem"}}>
            <a href={`#${item}`} className="App-link" onClick={() => onClick(item)}>{item}</a>
        </div>)}
    </div>
}