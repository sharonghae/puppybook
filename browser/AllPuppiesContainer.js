import { connect } from 'react-redux'
import AllPuppies from './AllPuppies'
import {asyncFetchPuppies} from './action-creators'

const mapStateToProps = ({allPuppies}) => ({
	allPuppies
}) 



export default connect(
	mapStateToProps,
	null
)(AllPuppies)