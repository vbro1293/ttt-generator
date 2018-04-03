// ==========Import React redux's connect function
import { connect } from "react-redux";

//===========Import in the component to wrap
import PlayersList from "../components/collect/PlayersList";

//===========Import action in
import { resetPlayers } from "../data/actions";

// mapStateToProps is passed in the current state returns object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        players: state.get("players"),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(resetPlayers()),
    };
};

// connect up mapStateToProps with the PlayersList component
export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);