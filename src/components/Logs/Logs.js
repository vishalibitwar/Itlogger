import React ,{useEffect} from 'react';
import LogItem from './LogItem'
import PreLoader from '../layout/PreLoader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {getLogs} from '../../actions/logActions';

const Logs = ({log:{ logs, loading }, getLogs }) => {
  useEffect(() =>{
     getLogs();
     //eslint-disabled-next-line
  }, []);


  if(loading || logs === null){
     return  <PreLoader />;
  }
  return (
   <ul className="collection with-header">
      <li className="collection-header">
    <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? ( <p className="center">No Logs to show...</p>) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
   </ul>
  )
}

const mapStateToProps = state => ({
    log:state.log
});

Logs.propTypes = {
   log: PropTypes.object.isRequired,
   getLogs : PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getLogs  })(Logs);