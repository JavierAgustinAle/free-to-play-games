import React from 'react';
import './Filters.css'

interface Props {
  setPlatform: Function,
  setCategory: Function,
  setSortBy: Function
}

const Filters = ({ setPlatform, setCategory, setSortBy }: Props) => {


  return (
    <div className='col-10 pb-3'>
      <div className='row pl-2 pr-2 pb-3'>
        <div className='col-4'>
          <span className='mr-1 text-muted'>Platform: &nbsp;</span>
          <select className="select bg-dark text-muted select-filters"
            onChange={e => setPlatform(e.target.value)}>
            <option value="all">All Platforms</option>
            <option value="pc">PC</option>
            <option value="browser">Browser</option>
          </select>
        </div>

        <div className='col-4'>
          <span className='mr-1 text-muted'>Category: &nbsp;</span>
          <select className="select bg-dark text-muted select-filters"
            onChange={e => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="mmorpg">Mmorpg</option>
            <option value="shooter">Shooter</option>
            <option value="strategy">Strategy</option>
            <option value="action">Action</option>
            <option value="racing">Racing</option>
            <option value="sports">Sports</option>
            <option value="mmo">Mmo</option>
            <option value="survival">Survival</option>
            <option value="social">Social</option>
          </select>
        </div>

        <div className='col-4'>
          <span className='mr-1 text-muted'>Sort By: &nbsp;</span>
          <select className="select bg-dark text-muted select-filters"
            onChange={e => setSortBy(e.target.value)}>
            <option value="relevance" >Relevance</option>
            <option value="release-date">Release Date</option>
            <option value="popularity">Popularity</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>
    </div>
  )
};

export default Filters;