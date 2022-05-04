import { Integer, Button, ButtonBox } from './Paginator.styled';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export const Paginator = ({ page, totalPage, changePage }) => {
  const onClick = e => {
    const { name } = e.currentTarget;
    console.log(name);
    name === 'forward' && page !== totalPage && changePage(page + 1);
    name === 'back' && page !== 1 && changePage(page - 1);
  };
  return (
    <ButtonBox>
      <Button onClick={onClick} name="back">
        <FiArrowLeft />
      </Button>
      <Integer>{page}</Integer>
      <Button onClick={onClick} name="forward">
        <FiArrowRight />
      </Button>
    </ButtonBox>
  );
};
