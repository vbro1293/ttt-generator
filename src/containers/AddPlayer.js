// ==========Import React redux's connect function
import { connect } from "react-redux";

//===========Import in the component to wrap
import AddPlayer from "../components/collect/AddPlayer";

//===========Import action
import { addPlayer } from "../data/actions";

// map dispatch to props gets given store's dispatch method as the first argument, returns object which gets passed in as props to the wrapped component
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: value => dispatch(addPlayer(value))
    };
};

// connect up mapDispatchToProps with the AddPlayer component
export default connect(null, mapDispatchToProps)(AddPlayer);