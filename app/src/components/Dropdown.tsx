export default function Dropdown({items, onClick}:{items: string[], onClick : (category:string) => void}) {
    return <details className="dropdown">
      <summary className="btn m-1">Categories</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {items.map(item => <div>
            <a href={`#${item}`} className="App-link" onClick={() => onClick(item)}>{item}</a>
        </div>)}
      </ul>
    </details>
}