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
  const [difficulty, setDifficulty] = useState('');

  const addRepo = () => {
    dispatch(postUserProject(link, userId, difficulty));
    setLink('');
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
        <h2>Add github repository owner name/project name</h2>
        <Input
          placeholder="intocode/pre-bootcamp"
          allowClear
          onPressEnter={addRepo}
          size="large"
          style={{ width: '30%', marginBottom: 20 }}
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
        {Error && <div className="Error">{ErrorMessage}</div>}
        <div style={{ marginBottom: 30 }}>
          <h4>Please, choose difficulty of project</h4>
          <Radio.Group onChange={(e) => setDifficulty(e.target.value)}>
            <Radio value={'Easy'}>Easy</Radio>
            <Radio value={'Medium'}>Medium</Radio>
            <Radio value={'Hard'}>Hard</Radio>
          </Radio.Group>
        </div>
        <Button type="primary" disabled={loading} onClick={addRepo}>
          Submit
        </Button>
      </div>
    </CSSTransition>
  );
}
AddNewProject.propTypes = {
  visible: PropTypes.bool,
};
export default AddNewProject;
