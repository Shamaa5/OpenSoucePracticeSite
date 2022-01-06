import React, { useState } from 'react';
import { Button, Input, Radio } from 'antd';
import { postUserProject } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

function AddNewProject(props) {
  const userId = useSelector((state) => state.auth.user.id);
  const loading = useSelector((state) => state.userReducer.loading);
  const Error = useSelector((state) => state.userReducer.Error);
  const ErrorMessage = useSelector((state) => state.userReducer.ErrorMessage);
  const dispatch = useDispatch();

  const [link, setLink] = useState('');

  const onSearch = () => {
    dispatch(postUserProject(link, userId));
    setLink('');
  };

  return (
    <div className={props.visible ? 'alert in' : 'none'}>
      <h2>Add github repository owner name/project name</h2>
      <Input
        placeholder="intocode/pre-bootcamp"
        allowClear
        size="large"
        style={{ width: '30%', marginBottom: 20 }}
        onChange={(e) => setLink(e.target.value)}
        disabled={loading}
      />
      {Error && <div className="Error">{ErrorMessage}</div>}
      <div style={{ marginBottom: 30 }}>
        <h4>Please, choose difficulty of project</h4>
        <Radio.Group>
          <Radio value={1}>Easy</Radio>
          <Radio value={2}>Medium</Radio>
          <Radio value={3}>Hard</Radio>
        </Radio.Group>
      </div>
      <Button type="primary">Submit</Button>
    </div>
  );
}
AddNewProject.propTypes = {
  visible: PropTypes.bool,
};
export default AddNewProject;
