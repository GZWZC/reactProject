import $ from 'jquery';


// AskIndex
// 问吧首页--标签--获取数据
export const getAllTags = () => (dispatch, getState) => {
    let url = `AskIndex/GetAllProfessorLabels`;
    $.ajax({
        url: url,
        type: 'POST',
        success: (data) => {
            if(data && !data.error){
                localStorage.tags = JSON.stringify(data);
                dispatch({
                    type: 'GET_TAGS_DATA',
                    data: data
                })
            }else if(data && data.error){
                //提交回答失败
                if(data.error== 10007 || data.error == 10831 || data.error == 10263){
                    callAppLogin();
                }else if(data.noticeUrl){
                    window.location.href = data.noticeUrl;
                }else{
                    alert(data.msg);
                }
            }
        }
    })
}
// 问吧首页--标签--删除数据
export const delAllTags = () => (dispatch, getState) => {
    dispatch({
        type: 'DEL_TAGS_DATA'
    })
}