import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getData, isWaiting } from "providers/Standings/selectors";
import { fetchStandings } from "providers/Standings/actions";

export const Container = ({ getStandings, data }) => {
  useEffect(() => {
    getStandings();
  }, []);

  return <div>oi</div>;
};

const mapStateToProps = createStructuredSelector({
  data: getData(),
  isLoading: isWaiting(),
});

const mapDispatchToProps = (dispatch) => ({
  getStandings: () => dispatch(fetchStandings()),
});

Container.propTypes = {
  data: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
