import { BsStarFill, BsStar } from 'react-icons/bs';

import { Container } from './styles';

export function Stars({ rating }) {
  return (
    <Container>
      <span> {rating >= 1 ? <BsStarFill /> : <BsStar />} </span>
      <span> {rating >= 2 ? <BsStarFill /> : <BsStar />} </span>
      <span> {rating >= 3 ? <BsStarFill /> : <BsStar />} </span>
      <span> {rating >= 4 ? <BsStarFill /> : <BsStar />} </span>
      <span> {rating >= 5 ? <BsStarFill /> : <BsStar />} </span>
    </Container>
  )
}
