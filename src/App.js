import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import Title from "./components/Title";
import { db, storage } from "./firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

function App() {
  
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

<<<<<<< HEAD
  
=======
  // Получение файла загрузок и добавление его в storage Firebase
>>>>>>> 2d50ff346102c1003f1cc639d305644d1fed9acc
  const addFile = async e => {
    const file = e.target.files[0]
    const storageRef = ref(storage, 'files/' + file.name)
    const upload = uploadBytesResumable(storageRef, file)

    upload.on('state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, err => console.log(err.code),
      () => {
        getDownloadURL(upload.snapshot.ref).then(downloadURL => {
          setFile(downloadURL)
        })
        
      }
    )
  }
  
// Создание задачи и добавление ее в базу данных firebase
  const createTodo = async e => {
    e.preventDefault()
    if (title.trim().length === 0 || description.trim().length === 0 || !date) {
      alert('Введите название, дату и описание')
    } else {
      await addDoc(collection(db, 'todos'), {
        title,
        date,
        description,
        file,
        completed: false,
        elasped: false
      })
      setTitle('')
      setDate('')
      setDescription('')
      setFile(null)
    }
  }

  //Чтение массива задач из firebase
  useEffect(() => {
    const res = query(collection(db, 'todos'))
    const arr = onSnapshot(res, querySnapshot => {
      let allTodos = []
      querySnapshot.forEach(doc => {
        allTodos.push({ ...doc.data(), id: doc.id })
      });
      setTodos(allTodos)
    })
    return () => arr()
  }, [])
  
  //Изменение состояния выполнения задачи
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  //Удаление задачи
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div className="container">
      <Title todos={todos} />
      <AddTask createTodo={createTodo} title={title} setTitle={setTitle} date={date} setDate={setDate} description={description} setDescription={setDescription} addFile={addFile} />
      <Tasks todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
