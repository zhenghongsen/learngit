import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'
import { Button } from 'antd-mobile'

class VisibleFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileterList: [{
        name: 'All',
        value: 'SHOW_ALL'
      }, {
        name: 'Completed',
        value: 'SHOW_COMPLETED'
      }, {
        name: 'Uncompleted',
        value: 'SHOW_UNCOMPLETED'
      }]
    }
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this)
  }
  
  setVisibilityFilter(filter) {
    this.props.onBtnClick(filter)
  }
  render() {
    return (
      <div>
        <span className="vertical-align-top">Filter: </span>
        {
          this.state.fileterList.map(filter => (
            <Button type="primary" 
              className="margin-right-10"
              disabled={ filter.value === this.props.visibilityFilter ? true : false }
              onClick={ () => this.setVisibilityFilter(filter.value) } 
              key={filter.value} 
              inline 
              size="small">{filter.name}</Button>
            // <button disabled={ filter.value === this.props.visibilityFilter ? 'disabled' : '' } key={filter.value} onClick={ () => this.setVisibilityFilter(filter.value)}>{filter.name}</button>
          ))
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBtnClick: filter => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

VisibleFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleFilter)

export default VisibleFilter