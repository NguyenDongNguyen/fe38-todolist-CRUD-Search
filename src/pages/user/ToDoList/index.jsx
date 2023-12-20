import { useState } from 'react'
import { Button, Input, Form, Card, Space } from 'antd'
import { Link, generatePath } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import TaskItem from './TaskItem'
import { ROUTES } from 'constants/routes'

function ToDoListPage() {
  const [form] = Form.useForm();
  const [filterTaskList, setFilterTaskList] = useState('')
  const [taskList, setTaskList] = useState(() => {
        const storageTaskList = JSON.parse(localStorage.getItem("task"));
        return (storageTaskList ?? []);
  })

  const handleAddTask = (values) => {
    // Add task vào state
    const newTask = {
      id: uuidv4(),
      title: values.title,
      content: values.content,
    }
    setTaskList([newTask, ...taskList])
    const jsonTaskList = JSON.stringify([newTask, ...taskList]);
    localStorage.setItem("task", jsonTaskList);
    form.resetFields();
  }

  const handleSaveUpdate = (id, values) => {
    const index = taskList.findIndex((item) => item.id === id)
    const newTaskList = [...taskList]
    const taskListUpdate = {
      id: id,
      title: values.title,
      content: values.content
    }
    newTaskList.splice(index, 1, taskListUpdate)
    setTaskList(newTaskList)
    const jsonTaskList = JSON.stringify(newTaskList);
    localStorage.setItem("task", jsonTaskList);
  } 

  const handleDelete = (id) => {
    const newTaskList = [...taskList]
    const taskListDeleted = newTaskList.filter((item) => item.id !== id)
    setTaskList(taskListDeleted)
    const jsonTaskList = JSON.stringify(taskListDeleted);
    localStorage.setItem("task", jsonTaskList);
  }

  const searchTaskList = taskList.filter((item) => {
    console.log('>>> check item', item)
    if (filterTaskList === '') {
      return taskList
    } else if (item.title.toLowerCase().includes(filterTaskList.toLowerCase())) {
      return item
    }
  })

  const renderTaskList = searchTaskList.map((item, index) => {
    return <TaskItem key={item.id} item={item} handleSaveUpdate={handleSaveUpdate} handleDelete={handleDelete} />
  })

  return (
    <div style={{ width: '100%', margin: '0 auto', maxWidth: 700 }}>
      <h2>To Do List</h2>
      <Card size="small" title="Add Task">
        <Form form={form} name="addTask" layout="vertical" onFinish={(values) => handleAddTask(values)}>
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Title is required!',
              },
              {
                max: 10,
                min: 3,
                type: 'string',
                message: 'Title must be less than 10 characters!',
              },
            ]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            label="Nội dung"
            name="content"
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Content is required!',
              },
            ]}
          >
            <Input placeholder="Content" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form>
      </Card>
      <Input placeholder='Search...' style={{marginTop: 16}} onChange={(e) => setFilterTaskList(e.target.value)} />
      <div>{renderTaskList}</div>
    </div>
  )
}

export default ToDoListPage
