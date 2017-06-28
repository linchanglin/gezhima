<template>
	<div class="container">
	
		<div class="header">
			<el-menu theme="line" :default-active="activeIndex" class="el-menu-demo nav" style="padding:0 20px; background-color: #212121;" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1" style="display: flex;align-items: center;font-size: 20px; border: 0px solid white">
					<img style="width: 40px; height: 40px;margin-right: 10px;" src="/src/images/logo.jpg" class="image">
					<span>格之玛</span>
	
				</el-menu-item>
				<el-menu-item index="4" style="float: right; color: #ffffff">
					<a href="">关于我们</a>
				</el-menu-item>
				<!--<el-submenu index="3" style="float: right; color: #ffffff">
							<template slot="title">产品与服务</template>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
							<el-menu-item index="3-3">选项3</el-menu-item>
						</el-submenu>-->
				<el-menu-item index="2" style="float: right; color: #ffffff">产品墙</el-menu-item>
	
			</el-menu>
		</div>
	
		<div class="carousel" style="background-color: #282828">
			<!--<el-carousel height="560px" indicator-position="outside">
				<el-carousel-item v-for="image in images" :key="image">
					<img :src="image" class="image">
				</el-carousel-item>
			</el-carousel>-->
	
			<el-carousel height="560px"  :interval="5000" arrow="always">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3>{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
	
		<div style="padding: 4em">
			<div>
				<h2 style="font-size: 3em; font-weight: 800; letter-spacing: 6px; color: #212121;text-align: center;">产品墙</h2>
				<p style="color: #999999;font-size: .9em; margin: 1em auto 0;line-height: 1.8em;width: 65%;text-align: center;">
					格玛企业坐落于风景秀丽的六朝古都——南京。公司经过15年发展积累了雄厚的技术力量和生产能力，子公司：南京格之玛园林科技有限公司、南京格玛造明灯饰有限公司、滁州格玛照明机械制造有限公司，分别在园林景观行业、城市照明亮化行业、雕塑制造行业独占鳌头，行业标杆！从2006年开始和上海浦东建筑设计院、上海同济大学建筑设计院、南京园林设计院等单位多次合作。
				</p>
			</div>
			<div style="margin-top: 4em; display: flex">
				<div style="padding: 0 15px;width: 25%;">
					<div class="w3-welcome-grid-info">
						<img style="height: 150px;" src="">
						<h4>四体合一</h4>
						<P>格玛企业坐落于风景秀丽的六朝古都——南京。公司经过15年发展积累了雄厚的技术力量和生产能力，子公司：南京格之玛园林科技有限公司</p>
					</div>
				</div>

				<div style="padding: 0 15px;width: 25%;">
					<div class="w3-welcome-grid-info">
						<img style="height: 150px;" src="">
						<h4>四体合一</h4>
						<P>格玛企业坐落于风景秀丽的六朝古都——南京。公司经过15年发展积累了雄厚的技术力量和生产能力，子公司：南京格之玛园林科技有限公司</p>
					</div>
				</div>

				<div style="padding: 0 15px;width: 25%;">
					<div class="w3-welcome-grid-info">
						<img style="height: 150px;" src="">
						<h4>四体合一</h4>
						<P>格玛企业坐落于风景秀丽的六朝古都——南京。公司经过15年发展积累了雄厚的技术力量和生产能力，子公司：南京格之玛园林科技有限公司</p>
					</div>
				</div>

				<div style="padding: 0 15px;width: 25%;">
					<div class="w3-welcome-grid-info">
						<img style="height: 150px;" src="">
						<h4>四体合一</h4>
						<P>格玛企业坐落于风景秀丽的六朝古都——南京。公司经过15年发展积累了雄厚的技术力量和生产能力，子公司：南京格之玛园林科技有限公司</p>
					</div>
				</div>

			</div>
			
	
		</div>
	
		<!--<div>
					<div class="card" style="padding: 0px 20px 100px 20px;">
						<div style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center">
							<div class="title1">行业解决方案</div>
						</div>
						<div>
							<el-row :gutter="30" style="margin: 0;padding: 0">
								<el-col :span="6" v-for="(o, index) in 4" :key="o">
									<el-card :body-style="{ padding: '0px' }">
										<img src="/dist/images/1.jpg" class="image">
										<div style="padding: 14px;">
											<span>江苏南京</span>
											<div class="bottom clearfix">
												<time class="time">{{ currentDate }}</time>
												<el-button type="text" class="button">操作按钮</el-button>
											</div>
										</div>
									</el-card>
								</el-col>
							</el-row>
						</div>
						<div style="margin-top: 30px;">
							<el-row :gutter="30" style="margin: 0;padding: 0">
								<el-col :span="6" v-for="(o, index) in 4" :key="o">
									<el-card :body-style="{ padding: '0px' }">
										<img src="/dist/images/1.jpg" class="image">
										<div style="padding: 14px;">
											<span>江苏南京</span>
											<div class="bottom clearfix">
												<time class="time">{{ currentDate }}</time>
												<el-button type="text" class="button">操作按钮</el-button>
											</div>
										</div>
									</el-card>
								</el-col>
							</el-row>
						</div>
					</div>
				</div>-->
	
		<div style="height:620px; background-color: rgb(230, 230, 230)">
			<div style="display: flex; flex-direction: column;justify-content: center; align-items: center; padding: 0px 40px">
				<div style="height: 50px;font-size: 35px;margin: 40px 0;">关于我们</div>
				<div style="line-height: 2; text-indent: 1cm">
					<p>
						格玛企业坐落于风景秀丽的六朝古都——南京。公司经过15年发展积累了雄厚的技术力量和生产能力，子公司：南京格之玛园林科技有限公司、南京格玛造明灯饰有限公司、滁州格玛照明机械制造有限公司，分别在园林景观行业、城市照明亮化行业、雕塑制造行业独占鳌头，行业标杆！从2006年开始和上海浦东建筑设计院、上海同济大学建筑设计院、南京园林设计院等单位多次合作。
					</p>
					<p>
						园林景观产品在不断吸收国内外同类产品优点的同时，在设计理念上不仅为了产品功能，更重要的是通过计算机辅助设计，把绿植立体绿化、雕塑和钢结构造型等诸多因素融为一体。创造出世间没有的产品，大量布置到广场、公园、街区，产生更多的城市景观小品。做到了“园林设计艺术和花器制造技术的完美结合”。
					</p>
					<p>
						专用花盆成就园林花器花架，做到立体种植！产品适合在大型广场、景观大道、商业街区、度假区等公共场所使用，弥补了硬化地坪的绿化不足。
					</p>
	
					<p>
						园林景观产品在生产厂区有5000平米展示厅，陈列目前市场上仅有的稀缺产品，欢迎现场观摩！ 欢迎海内外客商考察指导，共创美丽城市！
					</p>
				</div>
			</div>
		</div>
	
		<div style="background: #282828; padding: 50px 100px;display: flex; flex-direction: row; justify-content: space-between; align-items: flex-start; font-size: 15px;">
	
			<div style="width: 50%;height: 100%; display: flex;justify-content: center; align-item: center; font-size: 16px; color: green">
				<div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 0 40px 0 15px;">
					<p style="margin-bottom: 16px; color: #ffffff">
						公司简介
					</p>
					<p style="color: #828282;line-height: 28px;font-size: 13px;">
						格玛企业坐落于风景秀丽的六朝古都——南京。公司经过15年发展积累了雄厚的技术力量和生产能力，子公司：南京格之玛园林科技有限公司、南京格玛造明灯饰有限公司、滁州格玛照明机械制造有限公司，分别在园林景观行业、城市照明亮化行业、雕塑制造行业独占鳌头，行业标杆！从2006年开始和上海浦东建筑设计院、上海同济大学建筑设计院、南京园林设计院等单位多次合作。
					</p>
				</div>
			</div>
	
			<!--<div style="width: 50%;height: 100%; display: flex;justify-content: center; align-item: center; font-size: 16px; color: green">
							<div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
								<p>南京格之玛园林科技有限公司</p>
								<p>销售负责人：139 5160 2757</p>
							</div>
						</div>
				
						<div style="width: 50%;height: 100%; display: flex;justify-content: center; align-item: center; font-size: 16px; color: green">
							<div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
								<p>南京格之玛园林科技有限公司</p>
								<p>销售负责人：139 5160 2757</p>
							</div>
						</div>-->
	
			<div style="display: flex; justify-content: flex-start; align-items: flex-start">
				<div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start">
	
					<p style="margin-bottom: 16px; color: #ffffff">
						联系方式
					</p>
					<div style="margin-bottom: 16px;">
						<p style="color: #828282;line-height: 28px;font-size: 13px;">
							南京地址：南京市江宁区竹山路59号江宁万达广场1号楼C座1520-1521室
						</p>
						<p style="color: #828282;line-height: 28px;font-size: 13px;">
							电话：025-52214519
						</p>
					</div>
					<div>
						<p style="color: #828282;line-height: 28px;font-size: 13px;">
							安徽地址：安徽省全椒县经济技术开发区丰乐大道279号
						</p>
						<p style="color: #828282;line-height: 28px;font-size: 13px;">
							电话：0550-5189188 5188780
						</p>
					</div>
	
				</div>
			</div>
	
		</div>
	
		<div style="display: flex; justify-content: center; align-items: center; padding: 20px 0px; background: #211E1E; color: #ffffff;">
			<p>
				Copyright © 2017.Company name All rights reserved.
			</p>
		</div>
	
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '1',
			activeIndex2: '1',
			images: [
				'/dist/images/1.jpg',
				'/dist/images/2.jpg',
				'/dist/images/3.jpg',
				'/dist/images/4.jpg',
			],
			currentDate: new Date()
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>

<style>

p {
	margin: 0;
}

.w3-welcome-grid-info{
    padding: 1em;
    border: solid 1px #e4e4e4;
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	-o-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-ms-transition: 0.5s all;
}
.w3-welcome-grid-info img{
	width:100%;
}
.w3-welcome-grid-info h4{
	color:#212121;
	font-size:1em;
	font-weight:600;
	text-transform:uppercase;
	margin:1em 0;
}
.w3-welcome-grid-info p{
	color:#999999;
	font-size:.9em;
	margin:0;
	line-height:1.8em;
}
.w3-welcome-grid-info:hover{
	background:#fec303;
    border: solid 1px #fec303;
}
.w3-welcome-grid-info:hover p{
	color:#FFFFFF;
}



















.title1 {
	background-color: #eef1f6;
	color: deepskyblue;
	font-size: 25px;
	padding: 20px 40px;
	border-radius: 15px;
}

.title1:hover {
	background-color: #ffffff;
	border: 3px solid deepskyblue
}













/*.nav {
	display: flex;
	background-color: #20A0FF;
	padding: 0 20px;
}

.body {
	padding: 20px;
}*/

.image {
	width: 100%;
	display: block;
}

.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}

.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}

.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}
</style>