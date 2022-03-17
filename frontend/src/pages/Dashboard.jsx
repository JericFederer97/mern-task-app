import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import Spinner from '../components/Spinner'
import { getTasks, reset } from '../features/tasks/taskSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks)

  useEffect(() => {
    if (isError) {
      alert(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getTasks())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>{ user && user.name.toUpperCase() } </h1>
        <p>Dashboard</p>
      </section>

      <TaskForm />

      <section className='content'>
        { tasks.length > 0 ? (
          <div className='tasks'>
            {
              tasks.map((task) => {
                return <TaskItem key={task._id} task={task} />
              })
            }
          </div>
        ) : (<h3>No tasks to display. Please Add new task.</h3>) }
      </section>
    </>
  )
}

export default Dashboard