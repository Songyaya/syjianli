import React from 'react';
require('styles/reset.css');
require('styles/App.css');
import Info from './Info.js'




class AppComponent extends React.Component {
	constructor(){
		super()
		this.state={
			name:{
				title:'基本信息',
				de:['姓   名：宋阳阳','性别：女','出生年月：1993年12月','学  历：本科','联系电话 :  13717516403','工作经验：2年','住址 :  北京市大兴区','邮   箱：13717516403@163.com']
			},
			name1:{
				title:'求职意向',
				de:['求职岗位：Web前端工程师 / HTML5工程师','期望月薪：10-12K','求职类型：全职','目前状况：离职，可随时上岗']
			},
			name2:{
				title:'专业技能',
				de:['1、两年WEB前端相关工作经验','2、熟悉WEB标准化，能熟练运用DIV+CSS，css3，html5，jquery等来完成PC端和移动端布局。','3、掌握Javascript，angularJS等，能够使用它们实现前端交互效果；','4、熟练运用HTML5前端框架搭建移动端页面，并解决适配问题。','5、熟练运用Jquery库，css3，swiper实现网页动画效果，能够利用媒体查询，制作符合规范的响应式网站。','6、熟悉JSON，Ajax，有独立开发具有兼容主流浏览器的web前端页面的能力。','7、 熟悉bootstrap移动端框架。','8、熟练使用Photoshop、AI、 Dreamweaver、HBuilder、sublime Text 等软件；','9、了解SVN，git使用流程，了解nodeJS。','10、有良好的代码习惯，具备良好的团队协作和沟通表达能力。']
			},
				name3:{
				title:'工作经验：',
				de:['2015.4—2017.2','世纪博联网络有限公司   |  WEB前端工程师','行业类别：互联网/电子商务','企业性质：民营','工作描述：','根据工作安排，高效的完成代码编写，确保符合规范','负责公司现有项目和新项目的前端编写修改调试','与设计团队配合，能够实现设计师的设计理念','与后端团队配合，实现代码有效对接','项目经验：','1、Bug发布工具https://github.com/Songyaya/songy.git','项目描述：该项目主要是发布bug，分别分配给设计、前台、后台，项目用到技术：angular，js，jquery，ajax','项目职责：','网站的页面制作/网页动态效果的实现/该项目css开发规范与约束的编写/json后台数据调取/cookie的使用','2、公司员工信息系统https://github.com/Songyaya/songyy.git','项目描述：该项目是公司的内部员工信息收集系统，运用node.js搭建后台，mysql编写数据库，angular编写前台网页','项目职责：运用mysql编写数据库，运用node.js搭建后台，前台angular用ajax调用数据实现对数据的各项操作','3、金榜世纪教育（http://www.51jinbang.com）','项目描述：把该项目进行了新的排版，为其增添了新的色彩。','项目职责：负责修改布局和样式，加入JQ效果。','4、知家网 www.zmoclub.com（PC端）','项目描述：通过“线上+线下+联盟”模式，帮助传统企业拥抱互联网，为企业快速培养转型所需的新岗位和新能力。','项目职责：','1)利用div+css进行页面的布局排版；','2)使用HTML5+CSS3实现专题页的排版制作、兼容性的解决、终端测试；','3)采用svn进行多人协同开发项目；','4)使用自动化构建工具，打包压缩编译js、css数据等功能；']
			},
				name4:{
				title:'自我评价',
				de:['性格开朗，容易相处，团队荣誉感强，责任心强坚守诚信正直原则，勇于挑战自我开发自身潜力。善于学习，勤奋务实，刻苦钻研适应能力强，能够在很短时间内融入一个新的领域，适应它并且把它做好。']
			},
		}
	}
	
	render() {
    return (
      <div className="Content">
		<h1>个人简历</h1>
		<Info aaa={this.state.name}/>
		<Info aaa={this.state.name1}/>
		<Info aaa={this.state.name2}/>
		<Info aaa={this.state.name3}/>
		<Info aaa={this.state.name4}/>
	  </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
