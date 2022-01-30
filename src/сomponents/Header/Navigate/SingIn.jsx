import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'antd';

function SingIn() {
  return (
    <Button type="default">
      <Link to="Login">Sing In</Link>
    </Button>
  );
}

export default SingIn;
