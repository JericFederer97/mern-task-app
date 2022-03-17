import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { RiCloseCircleFill } from 'react-icons/ri'

function TaskItem({ task }) {
  const dispatch = useDispatch()

  return (
    <div className="task">
      <div>
        { new Date(task.createdAt).toLocaleString('ja-JP') }
      </div>
      <h2>{ task.text }</h2>
      <button onClick={() => dispatch(deleteTask(task._id))} className="remove-task">
        <RiCloseCircleFill size={20} />
      </button>
    </div>
  )
}

export default TaskItem;
