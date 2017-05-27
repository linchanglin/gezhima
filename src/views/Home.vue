<template>
	<div class="container">

		<div class="header">
			<el-menu theme="line" :default-active="activeIndex" class="el-menu-demo nav" style="padding:0 20px" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">南京格之玛园林科技有限公司</el-menu-item>
				<el-menu-item index="4" style="float: right"><a href="">关于格之玛</a></el-menu-item>
				<el-submenu index="3" style="float: right">
					<template slot="title">产品与服务</template>
					<el-menu-item index="3-1">选项1</el-menu-item>
					<el-menu-item index="3-2">选项2</el-menu-item>
					<el-menu-item index="3-3">选项3</el-menu-item>
				</el-submenu>
				<el-menu-item index="2" style="float: right">行业解决方案</el-menu-item>
				
			</el-menu>
		</div>


		<div class="body">

			<div class="carousel">
				<el-carousel height="560px" indicator-position="outside">
					<el-carousel-item v-for="image in images" :key="image">
						<img :src="image" class="image">
					</el-carousel-item>
				</el-carousel>
			</div>

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
				

		</div>

		<div class="footer" style="bottom: 0; background-color: #eef1f6; color: #000000; width: 100%; height: 50px; font-size: 14px;display: flex; justify-content: center; align-items: center">
			 南京格之玛园林科技有限公司
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

.title1 {
background-color: #eef1f6; color: deepskyblue; font-size: 25px;padding: 20px 40px; border-radius: 15px;
}
.title1:hover {
	background-color: #ffffff; border: 3px solid deepskyblue
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