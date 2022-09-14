import { BiTrash, BiEdit } from "react-icons/bi";

const ListContainer = ({data,drop,edit}) => {
  return (
    <div className="addList mt-3 d-flex justify-content-between shadow-sm px-3 rounded-3">
        <p>{data.text}</p>
        <div>
        <BiTrash
         onClick={() => drop(data.id)} className="icon"
        />
        <BiEdit
         onClick={() => edit(data.id , data.text) } 
        />
        </div>
    </div>
  )

  console.log(data);
}

export default ListContainer