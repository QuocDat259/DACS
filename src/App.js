import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [Work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  const handlesAdd = () =>{
        // toast.success('Celebrate')
        if(todos?.some(item => item.id === Work?.replace(/\s/g, '') ) ){
          toast.warn('Công việc đã được thêm vào trước đó')
        }else{
          setTodos (prev => [...prev, {id: Work.replace(/\s/g, ''), job: Work}])
          setWork("")
        }       
  }
  const handlesDeleteJob = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id))
  }
  return (
    <>
        <div className="flex flex-col gap-8 h-screen items-center border border-red-500 justify-center">
      <div className="flex gap-8">
      <input 
      type="text" 
      className="outline-none border border-blue-600 px-4 py-2 w-[400px] rounded-md"
      value={Work}
      onChange={e => setWork(e.target.value)}
      />      
      <button
      type="button"
      className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
      onClick={handlesAdd}
      >
        Add
      </button>
      </div>
      <div>
        <h3 className="font-bold text-x1">
          Content
        </h3>
        <ul>
          {todos?.map((item) =>{
            return(
              <li key={item.id} className="flex gap-10 items-center">
                <span className="my-2">{item.job}</span>
                <span onClick={() => handlesDeleteJob(item.id)} className="my-2 cursor-pointer p-2">x</span>
              </li>
            )
          } )}           
        </ul>
      </div>
    </div>
    <ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </>
  );
}

export default App;