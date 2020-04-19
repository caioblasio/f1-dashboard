import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getData, isWaiting } from "providers/Seasons/selectors";
import { fetchSeason } from "providers/Seasons/actions";

export const Container = ({ getSeason, data }) => {
  useEffect(() => {
    getSeason("2005");
  }, []);

  console.log(data);

  return <div>oi</div>;
};

const mapStateToProps = createStructuredSelector({
  data: getData("2005"),
  isLoading: isWaiting(),
});

const mapDispatchToProps = (dispatch) => ({
  getSeason: (year) => dispatch(fetchSeason(year)),
});

Container.propTypes = {
  data: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
