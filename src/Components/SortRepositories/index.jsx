import React from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SortDiffTop, SortStarsTop, SortStartBot } from '../../redux/actions';

function SortRepositories() {
  const dispatch = useDispatch();

  const sortByStarsTop = () => {
    dispatch(SortStarsTop());
  };
  const sortByStarsBot = () => {
    dispatch(SortStartBot());
  };
  const sortByDifficultyTop = () => {
    dispatch(SortDiffTop());
  };
  const sortByDifficultyBot = () => {
    dispatch(SortDiffTop());
  };

  const { SubMenu } = Menu;
  const menu = (
    <Menu>
      <SubMenu key={1} title="Stars">
        <Menu.Item key={'sortStarsTop'} onClick={sortByStarsBot}>
          From smallest to largest
        </Menu.Item>
        <Menu.Item key={'sortStarsBot'} onClick={sortByStarsTop}>
          From largest to smallest
        </Menu.Item>
      </SubMenu>
      <SubMenu key={2} title="Difficulty">
        <Menu.Item key={'sortDiffTop'} onClick={sortByDifficultyBot}>
          From smallest to largest
        </Menu.Item>
        <Menu.Item key={'sortDiffBot'} onClick={sortByDifficultyTop}>
          From largest to smallest
        </Menu.Item>
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
