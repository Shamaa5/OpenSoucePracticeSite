import React from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SortStartTop } from '../../redux/actions';

function SortRepositories() {
  const dispatch = useDispatch();

  const sortByStarsTop = () => {
    dispatch(SortStartTop());
  };
  const sortByStarsBot = () => {
    dispatch();
  };
  const sortByDifficultyTop = () => {
    dispatch();
  };
  const sortByDifficultyBot = () => {
    dispatch();
  };
  const sortByNameTop = () => {
    dispatch();
  };
  const sortByNameBot = () => {
    dispatch();
  };
  const { SubMenu } = Menu;
  const menu = (
    <Menu>
      <SubMenu key={1} title="Stars">
        <Menu.Item onClick={sortByStarsBot}>From smallest to largest</Menu.Item>
        <Menu.Item onClick={sortByStarsTop}>From largest to smallest</Menu.Item>
      </SubMenu>
      <SubMenu key={2} title="Difficulty">
        <Menu.Item onClick={sortByDifficultyBot}>
          From smallest to largest
        </Menu.Item>
        <Menu.Item key={3} onClick={sortByDifficultyTop}>
          From largest to smallest
        </Menu.Item>
      </SubMenu>
      <SubMenu key={4} title="Name">
        <Menu.Item onClick={sortByNameBot}>From smallest to largest</Menu.Item>
        <Menu.Item onClick={sortByNameTop}>From largest to smallest</Menu.Item>
      </SubMenu>
    </Menu>
  );
  return (
    <div className="sort">
      <Dropdown overlay={menu}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          href={undefined}
        >
          Sort by <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
}

export default SortRepositories;
