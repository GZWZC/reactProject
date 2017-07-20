import { connect } from 'react-redux'
import { getAllTags,delAllTags } from '../actions'
import Ask from '../pageComponent/AskIndex.js'

const mapStateToProps = (state, ownProps) => ({
    TagsData:state.TagsReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // 获取所有标签-数据
    getDataForTags:() => {
        dispatch(getAllTags())
    },
    // 删除所有标签-数据
    delDataForTags:() => {
        dispatch(delAllTags())
    }
    
})

const AskIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(Ask)

export default AskIndex
