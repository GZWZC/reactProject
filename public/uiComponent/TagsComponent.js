import React from 'react'
import style from './TagsComponent.css'

export default class TagsComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let {data} = this.props.data;
        if(!data.length){
            return <div></div>
        }
        return <div className={style.tags_box}>
            {
                data.map((ele, index)=>{
                    if(!ele){
                        return <div key={index}></div>
                    }
                    return <span key={index} className={style.tag} onClick={() => this.props.startViewToShow({isLoading:true,isNotifyResult:true},`/LabelExpertIndex/${ele.Id}`)}>{ele.LabelName}</span>
                })
            }
        </div>
    }
}

