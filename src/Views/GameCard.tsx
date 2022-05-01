import React from 'react';
import '../App.css';
import { GameInterface } from '../Interfaces/Game';

interface Props {
  game: GameInterface
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div className="mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto">
        <div className="card h-100 mx-auto bg-dark" style={{ width: '20rem' }}>
          <div className="embed-responsive embed-responsive-1by1 zoom">
            <img className="card-img-top embed-responsive-item" src={game.thumbnail} alt={game.thumbnail} />
          </div>
          <div className="card-body">
            <h3 className="text-muted">{game.title}</h3>
            <br />
            <div className='row'>
              <h6 className='col-6'><span className='badge bg-secondary'>{game.platform}</span></h6>
              <h6 className='col-6'><span className='badge bg-primary'>{game.genre}</span></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameCard;