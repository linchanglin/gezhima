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
	
		<div style="padding: 0 4em 4em">
			<div>
				<h2 style="font-size: 3em; font-weight: 800; letter-spacing: 6px; color: #212121;text-align: center;">产品墙</h2>
				<p style="color: #999999;font-size: .9em; margin: 1em auto 0;line-height: 1.8em;width: 65%;text-align: center;">
					格玛企业坐落于风景秀丽的六朝古都——南京。公司经过15年发展积累了雄厚的技术力量和生产能力，子公司：南京格之玛园林科技有限公司、南京格玛造明灯饰有限公司、滁州格玛照明机械制造有限公司，分别在园林景观行业、城市照明亮化行业、雕塑制造行业独占鳌头，行业标杆！从2006年开始和上海浦东建筑设计院、上海同济大学建筑设计院、南京园林设计院等单位多次合作。
				</p>
			</div>
	
			<el-dialog v-model="dialogVisible" size="tiny">
				<img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
			<div style="margin-top: 4em; display: flex">
				<div style="padding: 0 15px;width: 25%;" v-for="product in products">
					<div class="w3-welcome-grid-info">
						<img style="height: 150px;" v-bind:src="product.image" @click="handlePictureCardPreview(product.image)">
						<h4>{{product.name}}</h4>
						<P>{{product.description0}}</p>
						<P>{{product.description1}}</p>
						<P>{{product.description2}}</p>
						<P>{{product.description3}}</p>
						<P>{{product.description4}}</p>
					</div>
				</div>
			</div>
	
			<div style="margin-top: 4em; display: flex">
				<div style="padding: 0 15px;width: 25%;" v-for="product in products1">
					<div class="w3-welcome-grid-info">
						<img style="height: 150px;" v-bind:src="product.image" @click="handlePictureCardPreview(product.image)">
						<h4>{{product.name}}</h4>
						<P>{{product.description0}}</p>
						<P>{{product.description1}}</p>
						<P>{{product.description2}}</p>
						<P>{{product.description3}}</p>
						<P>{{product.description4}}</p>
					</div>
				</div>
			</div>
	
			<div style="margin-top: 4em; display: flex">
				<div style="padding: 0 15px;width: 25%;" v-for="product in products2">
					<div class="w3-welcome-grid-info">
						<img style="height: 150px;" v-bind:src="product.image" @click="handlePictureCardPreview(product.image)">
						<h4>{{product.name}}</h4>
						<P>{{product.description0}}</p>
						<P>{{product.description1}}</p>
						<P>{{product.description2}}</p>
						<P>{{product.description3}}</p>
						<P>{{product.description4}}</p>
					</div>
				</div>
			</div>
	
		</div>
	
		<!-- <div style="height:620px; background-color: rgb(230, 230, 230)">
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
					</div> -->
	
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
	
		<div style="display: flex; justify-content: center; align-items: center; padding: 20px 0px; background: #211E1E; color: #ffffff; font-size: 14px">
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

            dialogVisible: false,
			
			products: [
				{ image: '/src/images/1.jpg', name: '八方来宾', description0: '整体尺寸：H=2.2m，L=1.4m', description1: '1.8只直径0.5m高分子复合材料整体花盆；', description2: '2.主体采用直径60mm焊管焊接成整体；', description3: '3.钢件进行热镀锌处理；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
				{ image: '/src/images/2.jpg', name: '八面玲珑', description0: '整体尺寸：H=3.0m，L=2.0m', description1: '1.8只边长0.5米高分子复合材料方形锥底整体花盆；', description2: '2.主体采用4根方柱；', description3: '3.钢件焊接好后，整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
				{ image: '/src/images/3.jpg', name: '步步高', description0: '整体尺寸：H=2.2m，L=1.5m', description1: '1.6只直径0.5m高分子复合材料整体花盆；', description2: '2.主体采用直径60mm焊管；', description3: '3.钢件焊接好后，整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
				{ image: '/src/images/4.jpg', name: '彩云', description0: '花盆可选尺寸：直径0.6m、直径0.8m、直径1.0m', description1: '1.花盆均为高分子复合材料整体花盆；', description2: '2.主体为厚度8mm的碳钢板数控切割而成；', description3: '3.所有钢件焊接完成后，进行热镀锌；', description4: '4.镀锌层做毛，进行200℃静电喷塑。' },
			],
			products1: [
				{ image: '/src/images/5.jpg', name: '层叠', description0: '整体尺寸：H=2.8m，φ=1.2m；', description1: '1.3只直径1.0m高分子复合材料整体花盆；', description2: '2.主体采用焊管及碳钢板焊接而成；', description3: '3.所有钢件整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
				{ image: '/src/images/6.jpg', name: '婀娜多姿', description0: '整体尺寸：H=3.8m，L=1.65m；', description1: '1.5只直径1.0m高分子复合材料分体花盆，2只船型配重铁盆；', description2: '2.主体采用直径89mm焊管焊接而成；', description3: '3.钢件整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
				{ image: '/src/images/7.jpg', name: '方古典', description0: '可选高度：0.6m，1.1m；', description1: '1.1只高分子复合材料整体花盆；', description2: '2.主体采用方焊管焊接而成；', description3: '3.钢件整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
				{ image: '/src/images/8.jpg', name: '凤舞九天', description0: '整体尺寸：H=3.0m，φ=3.0m；', description1: '1.9只边长0.4m正六边形钢花盆；', description2: '2.主体采用方焊管焊接而成；', description3: '3.所有钢件整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
			],
			products2: [
				{ image: '/src/images/9.jpg', name: '轱辘车', description0: '整体尺寸：H=2.8m，L=5.5m；', description1: '1.6只直径1.0m高分子复合材料分体花盆，4只直径1.0m高分子复合材料整体花盆；', description2: '2.主体采用焊管焊接而成，车轮及鹿是由厚5mm钢板数控切割而成；', description3: '3.所有钢件整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
				{ image: '/src/images/10.jpg', name: '海豚嬉浪', description0: '整体尺寸：H=4.7m，L=14.5m；', description1: '1.10只直径1.0m高分子复合材料分体花盆；', description2: '2.海豚和浪花为厚5mm钢板切割而成，通过蒙板焊接成整体；', description3: '3.所有钢件整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
				{ image: '/src/images/11.jpg', name: '蝴蝶', description0: '本产品无现货，可定制造型及大小；', description1: '如需订货，请提前联系我司，并留有足够的工期！', description2: '', description3: '', description4: '' },
				{ image: '/src/images/12.jpg', name: '花鼎', description0: '可选高度：1.8m，1.6m，1.2m，1.0m，0.8m，0.6m；', description1: '1.1只高分子复合材料整体花盆；', description2: '2.主体采用厚度8mm钢板数控切割而成；', description3: '3.所有钢件整体热镀锌；', description4: '4.镀锌层做毛后，进行200℃静电喷塑。' },
			],





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
		},

		handlePictureCardPreview(file) {
            this.dialogImageUrl = file;
            this.dialogVisible = true;
        },
	}
}
</script>

<style>
p {
	margin: 0;
}

.w3-welcome-grid-info {
	padding: 1em;
	border: solid 1px #e4e4e4;
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	-o-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-ms-transition: 0.5s all;
}

.w3-welcome-grid-info img {
	width: 100%;
}

.w3-welcome-grid-info h4 {
	color: #212121;
	font-size: 1em;
	font-weight: 600;
	text-transform: uppercase;
	margin: 1em 0;
}

.w3-welcome-grid-info p {
	color: #999999;
	font-size: .9em;
	margin: 0;
	line-height: 1.8em;
}

.w3-welcome-grid-info:hover {
	background: #fec303;
	border: solid 1px #fec303;
}

.w3-welcome-grid-info:hover p {
	color: #FFFFFF;
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