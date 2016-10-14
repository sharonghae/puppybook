import {connect} from 'react-redux';

import SinglePuppy from './SinglePuppy'

const mapStateToProps = ({selectedPuppy}) => ({
	selectedPuppy
});


const mapDispatchToProps = null;

export default connect(
	mapStateToProps,
	mapDispatchToProps
) (SinglePuppy);