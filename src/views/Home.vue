<template>
	<div class="container">

		<div class="header">
			<el-menu theme="line" :default-active="activeIndex" class="el-menu-demo nav" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">处理中心</el-menu-item>
				<el-submenu index="2">
					<template slot="title">我的工作台</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
					<el-menu-item index="2-3">选项3</el-menu-item>
				</el-submenu>
				<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
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

			<div class="card" style="padding: 0 15px">
				<el-row :gutter="30" style="margin: 0;padding: 0">
					<el-col :span="6" v-for="(o, index) in 4" :key="o">
						<el-card :body-style="{ padding: '0px' }">
							<img src="/src/images/1.jpg" class="image">
							<div style="padding: 14px;">
								<span>好吃的汉堡</span>
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

		<div class="footer"></div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				images: [
					'/src/images/1.jpg',
					'/src/images/2.jpg',
					'/src/images/3.jpg',
					'/src/images/4.jpg',
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