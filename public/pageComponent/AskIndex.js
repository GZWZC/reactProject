import React from 'react'
import TagsComponent from '../uiComponent/TagsComponent'

export default class AskIndex extends React.Component {
    constructor(props){
        super(props)
        props.getDataForTags();
    }
    render(){
        return(
            <div>
                <h1>Demo</h1>
                <TagsComponent data={this.props.TagsData}/>
           </div>
        );
    }
}

