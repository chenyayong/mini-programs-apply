<template>
	<view class="app">
		<!-- <view class=""><image src="https://img01.yzcdn.cn/vant/apple-2.jpg" mode="widthFix"></image></view> -->
		<view class=""><uni-notice-bar showIcon text="免认证注册小程序,劲省300元"></uni-notice-bar></view>
		<view class="">
			<view class="van-cell van-field">
				<view class="van-cell__title van-field__label"><text>企业名称</text></view>
				<view class="van-cell__value van-field__value">
					<view class="van-field__body"><input type="text" v-model="formData.name" placeholder="请输入请企业名称" class="van-field__control" /></view>
				</view>
			</view>
			<view class="van-cell van-field">
				<view class="van-cell__title van-field__label"><text>企业类型</text></view>
				<view class="van-cell__value van-field__value">
					<view class="van-field__body">
						<picker range-key="name" @change="bindPickerChange" :value="code_type_array_index" :range="code_type_array">
							<view class="picker">{{ code_type_array[code_type_array_index].name }}</view>
						</picker>
						<!-- <input type="text" value="" placeholder="请选择企业类型" class="van-field__control" /> -->
					</view>
				</view>
			</view>
			<view class="van-cell van-field">
				<view class="van-cell__title van-field__label"><text>企业代码</text></view>
				<view class="van-cell__value van-field__value">
					<view class="van-field__body"><input type="text" v-model="formData.code" placeholder="请输入企业代码" class="van-field__control" /></view>
				</view>
			</view>
			<view class="van-cell van-field">
				<view class="van-cell__title van-field__label"><text>法人姓名</text></view>
				<view class="van-cell__value van-field__value">
					<view class="van-field__body">
						<input type="text" v-model="formData.legal_persona_name" placeholder="请输入法人姓名" class="van-field__control" />
					</view>
				</view>
			</view>
			<view class="van-cell van-field">
				<view class="van-cell__title van-field__label"><text>法人微信号</text></view>
				<view class="van-cell__value van-field__value">
					<view class="van-field__body">
						<input type="text" v-model="formData.legal_persona_wechat" placeholder="请输入法人微信号" class="van-field__control" />
					</view>
				</view>
			</view>
		</view>
		<view class="" style="padding: 50rpx;">
			<button class="van-button van-button--primary van-button--normal van-button--block" @click="submit">
				<view class="van-button__content"><view class="van-button__text">提交</view></view>
			</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			formData: {
				name: '',
				code_type: 1,
				code: '',
				legal_persona_name: '',
				legal_persona_wechat: ''
			},
			code_type_array: [
				{
					name: '统一社会信用代码',
					value: 1
				},
				{
					name: '组织机构代码',
					value: 2
				},
				{
					name: '营业执照注册号',
					value: 3
				}
			],
			code_type_array_index: 0
		};
	},
	computed: {},
	methods: {
		/**
		 * 提交表单
		 */
		async submit() {
			const that = this;
			if (this.verify(this.formData)) {
				try {
					const res = await this.$request('/api/index/addApplyInfo', 'post', this.formData)
					// const res = {
					// 	msg: 'ok',
					// 	code: 20000
					// };
					uni.showToast({
						title: res.msg,
						icon: 'none',
						mask: true
					});
					if(res.code === 20000){
						setTimeout(() => {
							this.resetFormData();
							uni.switchTab({
								url: '/pages/tabbar/logs'
							});
						}, 1500);
					}
				} catch (error) {
					console.log('error', error)
				}
			}
		},
		/**
		 * 校验表单
		 */
		verify(data) {
			if (!data.name) {
				uni.showToast({
					title: '请输入企业名称',
					icon: 'none',
					mask: true
				});
				return false;
			}
			if (!data.code) {
				uni.showToast({
					title: '请输入企业代码',
					icon: 'none',
					mask: true
				});
				return false;
			}
			if (!data.legal_persona_name) {
				uni.showToast({
					title: '请输入法人姓名',
					icon: 'none',
					mask: true
				});
				return false;
			}
			if (!data.legal_persona_wechat) {
				uni.showToast({
					title: '请输入法人微信号',
					icon: 'none',
					mask: true
				});
				return false;
			}
			return true;
		},
		/**
		 * 重置表单
		 */
		resetFormData() {
			this.formData = {
				name: '',
				code_type: 1,
				code: '',
				legal_persona_name: '',
				legal_persona_wechat: ''
			};
		},

		bindPickerChange(event) {
			const value = parseInt(event.detail.value);
			this.code_type_array_index = value;
			this.formData.code_type = this.code_type_array[value].value;
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}
</style>
<style scoped lang="scss">
picker {
	width: 100%;
	height: 100%;
	text-align: left;
}

.van-button {
	position: relative;
	display: inline-block;
	box-sizing: border-box;
	height: 44px;
	margin: 0;
	padding: 0;
	font-size: 16px;
	line-height: 1.2;
	text-align: center;
	border-radius: 2px;
	cursor: pointer;
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;
	-webkit-appearance: none;
}
.van-button--normal {
	padding: 0 15px;
	font-size: 14px;
}
.van-button::before {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100%;
	background-color: #000;
	border: inherit;
	border-color: #000;
	border-radius: inherit;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	opacity: 0;
	content: ' ';
}
.van-button--block {
    display: block;
    width: 100%;
}
.van-button__content {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 100%;
}
.van-button--normal {
    padding: 0 15px;
    font-size: 14px;
}
.van-button--primary {
	color: #fff;
	background-color: #07c160;
	border: 1px solid #07c160;
}

.van-cell {
	position: relative;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	box-sizing: border-box;
	width: 100%;
	padding: 10px 16px;
	overflow: hidden;
	color: #323233;
	font-size: 14px;
	line-height: 24px;
	background-color: #fff;
}
.van-cell::after {
	position: absolute;
	box-sizing: border-box;
	content: ' ';
	pointer-events: none;
	right: 16px;
	bottom: 0;
	left: 16px;
	border-bottom: 1px solid #ebedf0;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}
.van-cell__title,
.van-cell__value {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
}
.van-field__label {
	-webkit-box-flex: 0;
	-webkit-flex: none;
	flex: none;
	box-sizing: border-box;
	width: 6.2em;
	margin-right: 12px;
	color: #646566;
	text-align: left;
	word-wrap: break-word;
}

.van-cell__value {
	position: relative;
	overflow: hidden;
	color: #969799;
	text-align: right;
	vertical-align: middle;
	word-wrap: break-word;
}
.van-field__body {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
}
.van-field__control {
	display: block;
	box-sizing: border-box;
	width: 100%;
	min-width: 0;
	margin: 0;
	padding: 0;
	color: #323233;
	line-height: inherit;
	text-align: left;
	background-color: transparent;
	border: 0;
	resize: none;
}
</style>
