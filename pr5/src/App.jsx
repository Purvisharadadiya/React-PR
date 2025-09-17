
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';



function App() {

  let [task, setTask] = useState({});
  let [tasklist, setTaskList] = useState([]);
  let [index, setIndex] = useState(-1);
  let [loading, setLoading] = useState(false);
  let [member, setmember] = useState([]);
  let [proson, setproson] = useState(["menger", "time", "epolye "])

  useEffect(() => {

    setTimeout(() => {
      getlocalstorageData();
    }, 500);
  }, [setTaskList]);

  let getlocalstorageData = (() => {
    let data = JSON.parse(localStorage.getItem("Data"));
    if (data !== null) {
      setTaskList(data);
      setLoading(true);
    }
    else {
      setTaskList([]);
    }
  })

  let getinputdata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newmember = [...member];
    if (name === 'member') {
      let pos = newmember.findIndex((v, i) => v == value);
      if (newmember.includes(value)) {
        if (pos != -1) {
          newmember.splice(pos, 1);
        }
      }
      else {
        newmember.push(value);
      }
      setmember(newmember);
      value = newmember

    }
    setTask({ ...task, [name]: value });

  }

  let submitdata = (e) => {
    e.preventDefault();
    let newlist = [...tasklist];
    if (index != -1) {
      setmember = [list[pos], member]
      newlist[index] = task;
    }
    else {
      task.id = Math.floor(Math.random() * 100);
      newlist.push(task);
    }
    localStorage.setItem("Data", JSON.stringify(newlist));
    setTaskList(newlist);
    setLoading(true);
    setTask({});
    setmember([])
    setIndex(-1);

  }

  

  let removeData = (id) => {
    let newlist = [...tasklist];
    let pos = newlist.findIndex((v, i) => v.id == id);
    newlist.splice(pos, 1);
    localStorage.setItem("Data", JSON.stringify(newlist));
    setTaskList(newlist);
  }

  let updateData = (id) => {
    let list = [...tasklist];
    let pos = list.findIndex((v, i) => v.id == id); {
      if (pos != -1) {
        setTask(list[pos]);
        setmember(list[pos].member)
        setIndex(pos);
      }
      else {


      }
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Crud</h1>
      <form method='post' onSubmit={(e) => { submitdata(e) }}>
        <table border={1} align='center'>
          <tr>
            <td>Enter Name:</td>
            <td><input type="text" name='task' value={task.task ? task.task : ""} onChange={(e) => { getinputdata(e) }} /></td>
          </tr>
          <tr>
            <td>Enter last Name:</td>
            <td><input type="text" name='last' value={task.last ? task.last : ""} onChange={(e) => { getinputdata(e) }} /></td>
          </tr>
          <tr>
            <td>redio button:</td>
            <td>
              <input type="radio" name="priority" value="urgent" onChange={(e) => getinputdata(e)} checked={task.priority == 'urgent' ? ' checked' : ""}
              /> urgent
              <input type="radio" name="priority" value="overdut" onChange={(e) => getinputdata(e)} checked={task.priority == 'overdut' ? ' checked' : ""}
              /> overdut
            </td>
          </tr>
          <tr>
            <td>select by task</td>
            <td>

              <select name='proson' onChange={(e) => getinputdata(e)}>
                <option value=""> ----select our felid----</option>
                {proson.map((v, i) => (
                  <option value={v} selected={task.proson == v ? 'selected' : ""} >{v}

                  </option>
                ))}
              </select>
            </td>
          </tr>

          <tr>
            <td>Enter last Name:</td>
            <td><input type="text" name='img' value={task.img ? task.img : ""} onChange={(e) => { getinputdata(e) }} /></td>
          </tr>
          

            <tr>
              <td>seletct checkebox:</td>
             <td><input type="checkbox" name="member" value="purvisha" onChange={(e) => getinputdata(e)} checked={member.includes('purvisha') ? 'checked' : ""} /> purvisha
             <input type="checkbox" name="member" value="ayushi" onChange={(e) => getinputdata(e)} checked={member.includes('ayushi') ? 'checked' : ""} /> ayushi
             <input type="checkbox" name="member" value="denisha" onChange={(e) => getinputdata(e)} checked={member.includes('denisha') ? 'checked' : ""} /> denisha
             </td> 
            </tr>
            <tr>

            <td></td>
            <td>
              {index != -1 ?
                <input type='submit' name='edit' value="edit"></input>
                :
                <input type='submit' name='add' value="add"></input>
              }
            </td>
          </tr>
        </table>

      </form>
      <br></br>
      <table border={1} align='center'>
        <thead>
          <tr>
            <th>No:</th>
            <th>img</th>
            <th>Name:</th>
            <th>Last Name:</th>
            <th>priority</th>
            <th>select</th>
            <th>checkbox</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>

          {
            loading ?
              tasklist && tasklist.map((v, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <img src={v.img} alt="task image" width="80" height="80"
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                      />
                    </td>
                    <td>{v.task}</td>
                    <td>{v.last}</td>
                    <td>{v.priority}</td>
                    <td>{v.proson}</td>
                    <td>{v.member}</td>
                    <td>
                      <button onClick={() => removeData(v.id)}>Delete</button>
                      ||
                      <button onClick={() => updateData(v.id)}>Update</button>
                    </td>
                  </tr>
                )
              })
              :
              <p>Loading....</p>
          }
        </tbody>
      </table>
    </>
  )

}

export default App
