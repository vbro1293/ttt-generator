// ==========Import React redux's connect function
import { connect } from "react-redux";

//===========Import in the component to wrap
import Rounds from "../components/show/Rounds";

// mapStateToProps is passed in the current state returns object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        players: state.get("players"),
    };
};

// connect up mapStateToProps with the Rounds component
export default connect(mapStateToProps)(Rounds);