// ==========Import React redux's connect function
import { connect } from "react-redux";

//===========Import in the component to wrap
import RouteLink from "../components/RouteLink";

// mapStateToProps is passed in the current state, should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        noOfPlayers: state.get("players").size,
    };
};

// connect up mapStateToProps with the RouteLink component
export default connect(mapStateToProps)(RouteLink);