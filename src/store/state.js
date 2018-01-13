
const state = {
	//弹窗状态
	popStatus: false,
	// 新建页面对应id
	routerId:1,
	// 多个弹窗下的弹窗对应数值，根据不同的数值显示不同的弹窗
	popNum:0,
	//产品关联内容存储
    connectionArr:[],
    //排序类型存储
    orderType:'',
    //搜索id
    id:null,
    //搜索标题
    title:'',
    //起始时间
    begin:'',
    //结束时间
    end:'',
    //筛选内容类型
    articleType:'',
    //筛选图文类型
    imageType:'',
    //每一条的id
    articleId: '',
    //每一条的位置id 实际上是index
    articleIndex: null

}

export default state