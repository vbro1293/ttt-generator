// ==========Import React redux's connect function
import { connect } from "react-redux";

//===========Import in the component to wrap
import PlayersList from "../components/collect/PlayersList";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        players: state.get("players"),
    };
};


// connect up mapStateToProps with the PlayersList component
// PlayersLists' props are now controlled by this file
export default connect(mapStateToProps)(PlayersList);