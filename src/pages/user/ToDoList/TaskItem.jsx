import { useState } from 'react'
import { Button, Input, Form, Card, Space } from 'antd'
import { useNavigate, generatePath, Link } from 'react-router-dom'
import { ROUTES } from 'constants/routes'

function TaskItem({ item, handleSaveUpdate, handleDelete }) {
  const navigate = useNavigate()
  const [isUpdate, setIsUpdate] = useState(false)

  const handleDetail = () => {
    navigate(generatePath(ROUTES.USER.TODOLIST_DETAIL, { id: item.id }),{state:{title: item.title, content: item.content}});
  }

  return (
    <>
      {isUpdate ?
        <Card size="small" title="Update Task">
          <Form name="updateTask" layout="vertical" onFinish={(values) => { handleSaveUpdate(item.id, values); setIsUpdate(false)}} initialValues={{
            title: item.title,
            content: item.content
          }}>
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
            
            <Space style={{ marginTop: 8 }}>
              <Button type="primary" ghost htmlType="submit" >
                Save
              </Button>
              <Button onClick={() => setIsUpdate(false)} >
                Cancel
              </Button>
              <Button danger onClick={() => handleDelete(item.id)}>Delete</Button>
            </Space>
          </Form>
        </Card>
        :
        <Card size="small" title={item.title} style={{ marginTop: 16 }}>
          <div>{item.content}</div>
          <Space style={{ marginTop: 8 }}>
            <Button onClick={handleDetail}>
              Detail
            </Button>
            <Button type="primary" ghost onClick={() => setIsUpdate(true)}>
              Update
            </Button>
            <Button danger onClick={() => handleDelete(item.id)}>Delete</Button>
          </Space>
        </Card>
      }

    </>
  )
}

export default TaskItem
