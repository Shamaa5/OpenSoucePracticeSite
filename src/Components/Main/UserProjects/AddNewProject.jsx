import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { postUserProject } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

function AddNewProject(props) {
  const userId = useSelector((state) => state.auth.user.id);
  const Error = useSelector((state) => state.userReducer.Error);
  const ErrorMessage = useSelector((state) => state.userReducer.ErrorMessage);
  const dispatch = useDispatch();
  const [link, setLink] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const addRepo = () => {
    dispatch(postUserProject(link, userId, difficulty));
    setLink('');
  };
  const onFinish = () => {
    addRepo();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <CSSTransition
      timeout={150}
      in={props.visible}
      classNames="my-node"
      unmountOnExit
      mountOnEnter
    >
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2>Add github repository owner name/project name</h2>
          <Form.Item
            name="link"
            rules={[
              {
                required: true,
                message: 'Please input link!',
              },
            ]}
          >
            <Input
              placeholder="intocode/pre-bootcamp"
              allowClear
              onPressEnter={addRepo}
              size="large"
              style={{ width: '30%', marginBottom: 20 }}
              onChange={(e) => setLink(e.target.value)}
              value={link}
            />
          </Form.Item>
          {Error && <div className="Error">{ErrorMessage}</div>}

          <div style={{ marginBottom: 30 }}>
            <h4>Please, choose difficulty of project</h4>
            <Form.Item
              name="difficulty"
              rules={[
                {
                  required: true,
                  message: 'Please choose difficulty!',
                },
              ]}
            >
              <Radio.Group onChange={(e) => setDifficulty(e.target.value)}>
                <Radio value={'Easy'}>Easy</Radio>
                <Radio value={'Medium'}>Medium</Radio>
                <Radio value={'Hard'}>Hard</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CSSTransition>
  );
}
AddNewProject.propTypes = {
  visible: PropTypes.bool,
};
export default AddNewProject;
