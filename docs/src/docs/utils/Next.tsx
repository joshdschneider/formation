import { useNavigate } from 'react-router-dom';
import { Button } from '@joshdschneider/formation';

type NextProps = {
  next?: PageButton;
  back?: PageButton;
};

type PageButton = {
  to: string;
  text: string;
};

function Next({ next, back }: NextProps) {
  const navigate = useNavigate();

  return (
    <div className='page-links'>
      {!!back ? <Button onClick={() => navigate(back.to)}>{back.text}</Button> : <span />}
      {!!next ? <Button onClick={() => navigate(next.to)}>{next.text}</Button> : <span />}
    </div>
  );
}

export default Next;
